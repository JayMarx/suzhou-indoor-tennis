// 苏州室内网球场 · 共享数据
// 说明：数据整理自公开信息，非官方、非合作。
// 未核验的电话留空（显示"详见苏体通/大众点评"），不臆造号码。
// 坐标为区级近似值，仅用于"离我最近"距离排序。
window.VENUES = [
  { slug:"aoti-center", name:"苏州奥林匹克体育中心网球馆", area:"工业园区", addr:"工业园区中新大道东999号 奥体中心", phone:"", tags:["室内","专业"], note:"标准室内外网球场齐全，支持散客/会员/培训/赛事", hours:"10:00-22:00，地铁5号线苏胜路站", lat:31.305249, lng:120.748617 },
  { slug:"sip-sports", name:"苏州工业园区体育中心网球馆", area:"工业园区", addr:"工业园区苏虹中路68号（近金鸡湖）", phone:"0512-66680114", tags:["室内","专业"], note:"多块室内场，设青少年及成人教学班", hours:"总台可咨询开放时段", lat:31.348937, lng:120.792980 },
  { slug:"suyi", name:"苏州科技文化艺术中心网球馆（苏艺）", area:"工业园区", addr:"工业园区观枫街1号", phone:"", tags:["室内"], note:"环境雅致，部分场地半室内", hours:"详见现场/大众点评", lat:31.321244, lng:120.702502 },
  { slug:"qspace-film", name:"轻空间气膜网球馆（园区）", area:"工业园区", addr:"工业园区（气膜馆，具体点位见大众点评）", phone:"", tags:["气膜","室内"], note:"四季恒温、新风照明，全天候", hours:"热门时段建议提前1-2天预订", lat:31.295000, lng:120.730000 },
  { slug:"gxq-wenti", name:"苏州高新区文体中心网球馆", area:"高新区", addr:"高新区狮山路文体中心", phone:"", tags:["室内"], note:"场地新，交通便利，可团体包场", hours:"详见苏体通", lat:31.337694, lng:120.416651 },
  { slug:"wuzhong-wenti", name:"吴中区文体中心网球馆", area:"吴中区", addr:"吴中区越溪街道吴中大道199号", phone:"", tags:["室内"], note:"大型体育综合体，支持年卡/次卡/临时", hours:"详见苏体通", lat:31.210630, lng:120.605140 },
  { slug:"wujiang-tennis", name:"吴江网球中心", area:"吴江区", addr:"吴江区体育路609号", phone:"13914026620", tags:["室内"], note:"室内+室外，每场限1小时，现场排队", hours:"全年 9:00-21:00", lat:31.147513, lng:120.649465 },
  { slug:"simin-jianshen", name:"苏州市市民健身中心网球场", area:"姑苏区", addr:"姑苏区五卅路175号", phone:"0512-65227806", tags:["半室内"], note:"部分时段半室内遮棚，「苏体健身+」预约", hours:"详见「苏体健身+」小程序", lat:31.303133, lng:120.627334 },
  { slug:"kunshan-sports", name:"昆山市体育中心网球馆", area:"昆山市", addr:"昆山市体育中心内（详见苏体通）", phone:"", tags:["室内"], note:"室内外球场，设施完善", hours:"详见苏体通", lat:31.385868, lng:120.908666 },
  { slug:"xiangcheng-wenti", name:"相城区文体中心网球馆", area:"相城区", addr:"相城区社区文体中心（详见苏体通）", phone:"", tags:["室内"], note:"小程序/电话预约", hours:"详见苏体通", lat:31.368372, lng:120.636928 },
  { slug:"taicang-sports", name:"太仓市体育中心网球馆", area:"太仓市", addr:"太仓市体育中心内（详见苏体通）", phone:"", tags:["室内"], note:"室内外球场", hours:"详见苏体通", lat:31.445044, lng:121.115493 },
  { slug:"zjg-sports", name:"张家港市体育中心网球馆", area:"张家港市", addr:"张家港市体育中心内（详见苏体通）", phone:"", tags:["室内"], note:"室内外球场", hours:"详见苏体通", lat:31.882299, lng:120.543672 },
  { slug:"sz-sports-center", name:"苏州市体育中心网球场", area:"姑苏区", addr:"姑苏区三香路1188号 苏州市体育中心", phone:"", tags:["室内"], note:"市级综合体育中心，含网球场", hours:"详见苏体通", lat:31.294456, lng:120.580243 },
  { slug:"szwan-sports", name:"苏州湾体育中心网球馆", area:"吴江区", addr:"吴江区太湖新城龙河路1288号 苏州湾体育公园", phone:"0512-60909001", tags:["室内"], note:"乐动力运营，专业网球场及配套更衣室/淋浴，可预约", hours:"详见乐动力App", lat:31.112765, lng:120.620539 },
  { slug:"kjc-sports", name:"苏州科技城体育运动中心网球馆", area:"高新区", addr:"高新区科技城 昆仑山路", phone:"", tags:["室内"], note:"科技城综合运动中心，含网球场", hours:"详见苏体通", lat:31.338201, lng:120.416263 },
  { slug:"changshu-sports", name:"常熟市体育中心网球馆", area:"常熟市", addr:"常熟市海虞北路 体育中心", phone:"", tags:["室内"], note:"县级市体育中心，室内外球场", hours:"详见苏体通", lat:31.656320, lng:120.781948 },
  { slug:"shengze-gym", name:"吴江盛泽体育馆网球场", area:"吴江区", addr:"吴江区盛泽镇 盛泽体育馆", phone:"", tags:["室内"], note:"镇级体育馆，含网球场", hours:"详见苏体通", lat:30.901990, lng:120.654746 },
  { slug:"huaqiao-gym", name:"昆山花桥国际商务城体育馆网球场", area:"昆山市", addr:"昆山市花桥经济开发区 体育馆", phone:"", tags:["室内"], note:"花桥片区体育馆，含网球场", hours:"详见苏体通", lat:31.298796, lng:121.067820 },
  { slug:"taicang-art", name:"太仓市文化艺术中心网球馆", area:"太仓市", addr:"太仓市城厢镇 文化艺术中心", phone:"", tags:["室内"], note:"含室内球场", hours:"详见苏体通/大众点评", lat:31.457261, lng:121.132682 },
  { slug:"suda-gym", name:"苏州大学体育馆网球场（独墅湖校区）", area:"工业园区", addr:"工业园区独墅湖高教区 苏州大学", phone:"", tags:["室内"], note:"高校场馆，对外时段有限，需提前确认", hours:"对外时段有限，需提前确认", lat:31.267624, lng:120.724653 },
  { slug:"bandao-tennis", name:"新建元国际网球中心（阳澄湖半岛）", area:"工业园区", addr:"工业园区慈云路 莲池湖公园东南（阳澄湖半岛度假区）", phone:"", tags:["室内","专业"], note:"11片国际赛事标准场（含4片风雨篷全天候场地），WTA/ATP赛事场馆", hours:"9:00-21:00，「惠游半岛」小程序预约", lat:31.406025, lng:120.791425 },
  { slug:"dushuhu-sports", name:"独墅湖体育中心网球馆", area:"工业园区", addr:"工业园区翠薇街1号（独墅湖科教创新区）", phone:"", tags:["室内"], note:"三片室内网球场，配专业教练，常有赛事交流", hours:"详见苏体通/大众点评", lat:31.267349, lng:120.725281 },
  { slug:"yuanhetang-y3", name:"元和塘Y³ PARK体育公园网球馆", area:"相城区", addr:"相城区齐门北大街283号（潮玩街区）", phone:"", tags:["室内"], note:"2025年底启用，近200亩综合体育公园，「苏体康康2024」小程序预约", hours:"7:00-22:00，详见苏体康康", lat:31.389142, lng:120.615108 },
  { slug:"wuzhong-baodai", name:"吴中体育中心网球场", area:"吴中区", addr:"吴中区宝带东路345号", phone:"", tags:["室内"], note:"白天25元/时，晚上加灯光费10元/时，性价比高", hours:"详见苏体通", lat:31.265461, lng:120.633948 },
  { slug:"gxq-guangda", name:"光大网球馆（高新区体育中心）", area:"高新区", addr:"高新区狮山路 新区体育中心内", phone:"", tags:["室内"], note:"平日白天65元/时，晚上及节假日80元/时", hours:"详见苏体通/大众点评", lat:31.338201, lng:120.416263 },
  { slug:"zhuhuifandian", name:"竹辉饭店网球场", area:"姑苏区", addr:"姑苏区竹辉路36号 竹辉饭店", phone:"", tags:["半室内"], note:"平日白天50元/时，酒店环境，场地维护好", hours:"详见酒店前台", lat:31.293797, lng:120.636743 },
  { slug:"hengze-rongyao", name:"恒泽荣耀网球俱乐部", area:"工业园区", addr:"工业园区北榭雨街135号1号楼", phone:"13471558617", tags:["室内","专业"], note:"澳网风格室内精品馆，全天空调，成人/青少年培训，小程序预约", hours:"全年开放，详见小程序", lat:31.340642, lng:120.761739 },
  { slug:"boyue-tennis", name:"博跃网球中心", area:"工业园区", addr:"工业园区月亮湾路15号 博悦生活广场", phone:"0512-62697876", tags:["室内"], note:"多片室内场地，适合培训与自由打球", hours:"详见电话预约", lat:31.264374, lng:120.724880 },
  { slug:"lingxian-tennis", name:"领先网球俱乐部", area:"工业园区", addr:"工业园区苏虹西路99号 微格科创园", phone:"0512-66685558", tags:["室内"], note:"室内标准场地，少儿/青少年/成人私教培训", hours:"详见电话/小程序预约", lat:31.327036, lng:120.671205 },
  { slug:"hga-tennis", name:"HGA网球俱乐部（大悦城店）", area:"相城区", addr:"相城区御窑路1999号 苏州大悦城停车楼顶楼", phone:"", tags:["室内"], note:"智能灯光与鹰眼系统，室内发球机训练场，近地铁龙道浜站", hours:"详见官方公众号预约", lat:31.401503, lng:120.606372 },
  { slug:"ouyi-tennis", name:"欧翼体育网球馆", area:"工业园区", addr:"工业园区唯正路19号 北部市民中心C幢一楼", phone:"18118168828", tags:["室内"], note:"专业教练团队，成人/青少年私教、团体班", hours:"详见电话预约", lat:31.364354, lng:120.711100 },
];

// ── 共享工具函数 ─────────────────────────────
window.SZT = {
  areas(){ return ["全部", ...Array.from(new Set(VENUES.map(v=>v.area)))]; },
  find(slug){ return VENUES.find(v=>v.slug===slug); },
  haversine(a,b){
    const R=6371, dLat=(b.lat-a.lat)*Math.PI/180, dLng=(b.lng-a.lng)*Math.PI/180;
    const s=Math.sin(dLat/2)**2+Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2;
    return R*2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s));
  },
  distText(km){ return km<1 ? Math.round(km*1000)+" 米" : km.toFixed(1)+" 公里"; },
  mapLink(v){ return "https://uri.amap.com/marker/?position="+v.lng+","+v.lat+"&name="+encodeURIComponent(v.name)+"&src=web&callnative=1"; },
  tagClass(t){ return t==="气膜"?"tag film":(t==="专业"?"tag pro":"tag"); },
  favs(){ return new Set(JSON.parse(localStorage.getItem("szt_favs")||"[]")); },
  toggleFav(slug){ const f=this.favs(); f.has(slug)?f.delete(slug):f.add(slug); localStorage.setItem("szt_favs",JSON.stringify([...f])); return f; },
};

