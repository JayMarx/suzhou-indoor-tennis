// 苏州室内网球场 · 首页 + 全部场馆 共享列表逻辑
(function(){
  const S = window.SZT;
  let curArea="全部", curQ="", myPos=null, favOnly=false;

  const chipsEl=document.getElementById("chips"),
        listEl=document.getElementById("list"),
        countEl=document.getElementById("count"),
        qEl=document.getElementById("q"),
        nearBtn=document.getElementById("near"),
        favBtn=document.getElementById("favBtn"),
        toTop=document.getElementById("toTop");

  // 地区 chips
  S.areas().forEach(a=>{
    const c=document.createElement("div");
    c.className="chip"+(a===curArea?" active":""); c.textContent=a;
    c.onclick=()=>{ curArea=a; [...chipsEl.children].forEach(x=>x.classList.toggle("active",x.textContent===a)); render(); };
    chipsEl.appendChild(c);
  });

  if(qEl) qEl.addEventListener("input",e=>{ curQ=e.target.value.trim().toLowerCase(); render(); });

  if(nearBtn) nearBtn.onclick=()=>{
    if(myPos){ myPos=null; nearBtn.classList.remove("on"); render(); return; }
    if(!navigator.geolocation){ alert("当前浏览器不支持定位"); return; }
    nearBtn.classList.add("loading"); nearBtn.textContent="📍 定位中…";
    navigator.geolocation.getCurrentPosition(
      p=>{ myPos={lat:p.coords.latitude,lng:p.coords.longitude}; nearBtn.classList.remove("loading"); nearBtn.classList.add("on"); nearBtn.textContent="📍 离我最近"; render(); },
      ()=>{ nearBtn.classList.remove("loading"); nearBtn.textContent="📍 离我最近"; alert("定位失败，请在浏览器允许定位权限"); },
      {enableHighAccuracy:true,timeout:8000}
    );
  };

  if(favBtn) favBtn.onclick=()=>{ favOnly=!favOnly; favBtn.classList.toggle("on",favOnly); render(); };

  window.__sztToggleFav=(slug)=>{ S.toggleFav(slug); render(); };

  function render(){
    let items=VENUES.map(v=>({...v, dist: myPos?S.haversine(myPos,v):null}));
    const favs=S.favs();
    items=items.filter(v=>{
      if(favOnly && !favs.has(v.slug)) return false;
      if(curArea!=="全部" && v.area!==curArea) return false;
      if(curQ){ const hay=(v.name+v.addr+v.area+v.tags.join("")+v.note).toLowerCase(); if(!hay.includes(curQ)) return false; }
      return true;
    });
    if(myPos) items.sort((a,b)=>a.dist-b.dist);

    if(countEl) countEl.innerHTML="<span>共 "+items.length+" 个场馆</span>"+(myPos?'<span class="hint">已按距离排序</span>':'');
    if(!items.length){ listEl.innerHTML='<div class="empty">没有匹配的场馆，换个条件试试～</div>'; return; }

    listEl.innerHTML=items.map(v=>{
      const tags=v.tags.map(t=>`<span class="${S.tagClass(t)}">${t}</span>`).join("");
      const call=v.phone
        ?`<a class="btn call" href="tel:${v.phone}">📞 ${v.phone}</a>`
        :`<span class="no-phone">电话请查苏体通/大众点评</span>`;
      const dist=v.dist!=null?`<div class="dist">🚗 约 ${S.distText(v.dist)}</div>`:"";
      const on=favs.has(v.slug)?" on":"";
      return `<div class="card">
        <span class="fav${on}" onclick="__sztToggleFav('${v.slug}')" role="button" aria-label="收藏">${favs.has(v.slug)?"★":"☆"}</span>
        <h2><a href="venue.html?id=${v.slug}">${v.name}</a> ${tags}</h2>
        <div class="addr">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#65726b" stroke-width="2"><path d="M12 21s-7-6.3-7-11a7 7 0 1 1 14 0c0 4.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
          <span>${v.addr}</span>
        </div>
        ${dist}
        ${v.note?`<div class="note">${v.note}</div>`:""}
        <div class="actions">
          <a class="btn nav" href="${S.mapLink(v)}" target="_blank" rel="noopener">🧭 导航</a>
          ${call}
        </div>
      </div>`;
    }).join("");
  }

  if(toTop){
    window.addEventListener("scroll",()=>{ toTop.classList.toggle("show",window.scrollY>400); });
    toTop.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
  }

  render();
})();
