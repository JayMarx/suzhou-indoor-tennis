"""
苏州室内网球场 · 经纬度批量修正脚本
用法：
  1. 申请高德开放平台 Web服务 API Key：https://lbs.amap.com/api/webservice/guide/create-project/get-key
     （选"Web服务"类型，免费每天5000次）
  2. 把 key 填到下方 AMAP_KEY 变量
  3. 运行：python fix_coords.py
  4. 脚本会自动读取 data.js，调用高德地理编码接口获取精确 GCJ-02 坐标，覆写回 data.js
"""

import re, json, time, urllib.request, urllib.parse

# ===== 填入你的高德 Web服务 API Key =====
AMAP_KEY = "你的高德key"
# ========================================

DATA_FILE = "data.js"

def geocode(address, city="苏州"):
    """调用高德地理编码接口，返回 (lat, lng) 或 None"""
    params = urllib.parse.urlencode({
        "address": address,
        "city": city,
        "output": "JSON",
        "key": AMAP_KEY
    })
    url = f"https://restapi.amap.com/v3/geocode/geo?{params}"
    try:
        req = urllib.request.Request(url)
        resp = urllib.request.urlopen(req, timeout=10)
        data = json.loads(resp.read())
        if data.get("status") == "1" and data.get("geocodes"):
            location = data["geocodes"][0]["location"]  # "120.123456,31.654321"
            lng, lat = location.split(",")
            return float(lat), float(lng)
    except Exception as e:
        print(f"  [ERROR] {e}")
    return None

def poi_search(keyword, city="苏州"):
    """调用高德POI搜索接口作为备选（更精确）"""
    params = urllib.parse.urlencode({
        "keywords": keyword,
        "city": city,
        "offset": 1,
        "output": "JSON",
        "key": AMAP_KEY
    })
    url = f"https://restapi.amap.com/v3/place/text?{params}"
    try:
        req = urllib.request.Request(url)
        resp = urllib.request.urlopen(req, timeout=10)
        data = json.loads(resp.read())
        if data.get("status") == "1" and data.get("pois"):
            location = data["pois"][0]["location"]
            lng, lat = location.split(",")
            return float(lat), float(lng)
    except Exception as e:
        print(f"  [ERROR POI] {e}")
    return None

def main():
    if AMAP_KEY == "你的高德key":
        print("❌ 请先填入你的高德 Web服务 API Key！")
        print("   申请地址：https://lbs.amap.com/api/webservice/guide/create-project/get-key")
        return

    # 读取 data.js
    with open(DATA_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # 提取所有场馆的 slug、name、addr
    pattern = r'slug:"([^"]+)".*?name:"([^"]+)".*?addr:"([^"]+)".*?lat:([\d.]+),\s*lng:([\d.]+)'
    matches = re.findall(pattern, content)

    print(f"找到 {len(matches)} 个场馆，开始地理编码...\n")

    updates = {}
    for slug, name, addr, old_lat, old_lng in matches:
        # 先用地址编码
        full_addr = addr.replace("（", "").replace("）", "").replace("详见苏体通", "")
        if "工业园区" in full_addr and not full_addr.startswith("苏州"):
            full_addr = "苏州市" + full_addr
        elif not any(c in full_addr for c in ["苏州", "昆山", "太仓", "张家港", "常熟"]):
            full_addr = "苏州市" + full_addr

        result = geocode(full_addr)

        # 地址编码失败时用名称 POI 搜索
        if not result:
            result = poi_search(name)

        if result:
            lat, lng = result
            updates[slug] = (lat, lng)
            changed = "✓" if abs(lat - float(old_lat)) > 0.001 or abs(lng - float(old_lng)) > 0.001 else "="
            print(f"  {changed} {slug}: {lat:.6f}, {lng:.6f}  (was {old_lat}, {old_lng})")
        else:
            print(f"  ✗ {slug}: 未找到，保持原值 ({old_lat}, {old_lng})")

        time.sleep(0.2)  # 每秒约5次，遵守限流

    # 批量替换
    updated_count = 0
    for slug, (lat, lng) in updates.items():
        # 替换对应 slug 行中的 lat/lng
        pattern = rf'(slug:"{slug}"[^}}]*?)lat:[\d.]+,\s*lng:[\d.]+'
        replacement = rf'\g<1>lat:{lat:.6f}, lng:{lng:.6f}'
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content != content:
            content = new_content
            updated_count += 1

    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"\n✅ 完成！更新了 {updated_count}/{len(matches)} 个场馆的坐标。")
    print(f"   坐标系：GCJ-02（高德/腾讯地图通用）")
    print(f"   文件已覆写：{DATA_FILE}")
    print(f"\n下一步：git add data.js && git commit -m '修正经纬度' && git push")

if __name__ == "__main__":
    main()
