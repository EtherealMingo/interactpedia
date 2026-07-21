/**
 * Generates vibehub demo components + CSS + map.
 * node scripts/generate-vibehub-demos.mjs
 */
import { writeFileSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const ids = JSON.parse(readFileSync(join(root, 'scripts/vibehub-ids.json'), 'utf8'))

const css = `
.wrap{display:flex;flex-direction:column;align-items:stretch;justify-content:flex-start;gap:.5rem;width:100%;max-width:100%;margin:0;min-height:0;text-align:left}
.row{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center;justify-content:flex-start}
.btn{border:none;border-radius:8px;padding:.45rem .85rem;font-weight:600;background:var(--accent);color:#fff}
.btnGhost{border:1px solid var(--border);border-radius:8px;padding:.4rem .75rem;font-weight:600;background:#fff;color:var(--ink)}
.btnSoft{border:1px solid var(--border);border-radius:8px;padding:.35rem .6rem;background:#fff}
.field{border:1px solid var(--border);border-radius:8px;padding:.45rem .65rem;background:#fff;width:100%;min-width:0;box-sizing:border-box}
.meta{font-size:.78rem;color:var(--ink-faint)}
.stage{position:relative;width:100%;min-height:96px;display:flex;align-items:center;justify-content:center}
.card{background:#fff;border:1px solid var(--border);border-radius:10px;padding:.75rem;box-shadow:0 1px 0 rgba(20,32,26,.04);width:100%;box-sizing:border-box}
.previewBox{width:100%;max-width:160px;height:64px;border-radius:10px;background:#fff;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-weight:700;margin-inline:auto}
.miniNav{display:flex;gap:.75rem;padding:.5rem .75rem;background:#fff;border:1px solid var(--border);border-radius:10px;font-weight:600;font-size:.82rem;width:100%;box-sizing:border-box}
.layoutBox{width:100%;border:1px solid var(--border);border-radius:10px;overflow:hidden;background:#fff;font-size:.75rem}
.layoutHead,.layoutFoot{background:var(--bg-elevated);padding:.45rem .6rem;font-weight:700}
.layoutBody{display:grid;grid-template-columns:72px 1fr;min-height:90px}
.layoutSide{background:var(--preview);padding:.45rem}
.layoutMain{padding:.45rem}
.swatch{width:36px;height:36px;border-radius:10px;border:1px solid var(--border)}
.tokenRow{display:flex;gap:.4rem;align-items:center;flex-wrap:wrap;justify-content:flex-start}
.wire{border:1px dashed rgba(58,26,22,.2);border-radius:8px;padding:.5rem;background:rgba(255,255,255,.7)}
.fade{animation:vhFade .7s ease both}
.slideIn{animation:vhSlide .65s ease both}
.scaleIn{animation:vhScale .55s cubic-bezier(.2,.8,.2,1) both}
.springIn{animation:vhSpring .7s cubic-bezier(.2,1.4,.3,1) both}
.blurIn{animation:vhBlur .7s ease both}
.staggerItem{opacity:0;animation:vhFade .45s ease forwards}
.clipReveal{animation:vhClip .8s ease both}
.hoverLift{transition:transform .2s ease,box-shadow .2s ease;background:#fff;border:1px solid var(--border);border-radius:12px;padding:1rem 1.25rem;font-weight:700}
.hoverLift:hover{transform:translateY(-8px);box-shadow:0 12px 28px rgba(58,26,22,.12)}
.rippleBtn{position:relative;overflow:hidden;border:none;border-radius:999px;padding:.65rem 1.2rem;background:var(--accent);color:#fff;font-weight:700}
.rippleSpan{position:absolute;border-radius:50%;transform:scale(0);animation:vhRipple .6s linear;background:rgba(255,255,255,.45);pointer-events:none}
.likeBurst{font-size:1.6rem;border:none;background:transparent}
.magnetic{border:none;border-radius:999px;padding:.7rem 1.3rem;background:var(--ink);color:#fff;font-weight:700;transition:transform .12s ease}
.shake{animation:vhShake .45s ease}
.checkmark{width:56px;height:56px}
.checkmark path{fill:none;stroke:var(--accent);stroke-width:4;stroke-linecap:round;stroke-dasharray:48;stroke-dashoffset:48;animation:vhDraw .7s ease forwards}
.spinner{width:28px;height:28px;border:3px solid rgba(58,26,22,.15);border-top-color:var(--accent);border-radius:50%;animation:vhSpin .7s linear infinite}
.shimmer{width:180px;height:14px;border-radius:8px;background:linear-gradient(90deg,#f0d8c4,#f9ece4,#f0d8c4);background-size:200% 100%;animation:vhShimmer 1.2s ease infinite}
.progressAnim{width:200px;height:8px;border-radius:999px;background:rgba(58,26,22,.08);overflow:hidden}
.progressAnim>i{display:block;height:100%;width:0;background:var(--accent);animation:vhProgress 1.4s ease forwards;border-radius:inherit}
.dots span{display:inline-block;width:8px;height:8px;margin:0 3px;border-radius:50%;background:var(--accent);animation:vhBounce 1s infinite}
.dots span:nth-child(2){animation-delay:.15s}
.dots span:nth-child(3){animation-delay:.3s}
.pulse{width:48px;height:48px;border-radius:50%;background:var(--accent);animation:vhPulse 1.2s ease infinite}
.pageA,.pageB{position:absolute;inset:20%;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:700;background:#fff;border:1px solid var(--border)}
.crossfadeA{animation:vhFadeOut .6s ease forwards}
.crossfadeB{animation:vhFade .6s ease}
.slideTrans{animation:vhSlide .55s ease}
.containerMorph{width:80px;height:80px;border-radius:16px;background:var(--accent);animation:vhMorph 1.4s ease infinite alternate}
.scrollBox{width:100%;height:140px;overflow:auto;border:1px solid var(--border);border-radius:10px;background:#fff}
.revealItem{padding:.55rem;margin:.35rem;background:var(--preview);border-radius:8px;animation:vhFade .6s ease both}
.scrollBar{position:sticky;top:0;height:4px;background:var(--accent);transform-origin:left;width:var(--p,0%)}
.hScroll{display:flex;gap:.45rem;overflow-x:auto;width:100%;padding-bottom:.25rem}
.hScroll>div{flex:0 0 120px;height:72px;border-radius:12px;background:#fff;border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-weight:700}
.glow{padding:.7rem 1.1rem;border-radius:999px;background:#fff;border:1px solid var(--accent);color:var(--accent);font-weight:700;animation:vhGlow 1.4s ease infinite}
.bounceBox{animation:vhBounceBox .8s ease infinite}
.wiggleBox{animation:vhWiggle .7s ease infinite}
.flashBox{animation:vhFlash 1s ease}
.badgePop{position:relative;padding:.6rem .9rem;background:#fff;border:1px solid var(--border);border-radius:10px}
.badgePop i{position:absolute;top:-6px;right:-6px;background:var(--accent);color:#fff;font-size:.65rem;font-style:normal;font-weight:700;padding:2px 5px;border-radius:999px;animation:vhPop .45s ease}
.gradFlow{width:180px;height:56px;border-radius:14px;background:linear-gradient(120deg,#d1411c,#f3bf9a,#d1411c);background-size:200% 200%;animation:vhGrad 2s ease infinite;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
.float{animation:vhFloat 2.4s ease-in-out infinite}
.marquee{width:240px;overflow:hidden;white-space:nowrap;border:1px solid var(--border);border-radius:999px;padding:.45rem 0;background:#fff}
.marquee span{display:inline-block;padding-left:100%;animation:vhMarquee 8s linear infinite;font-weight:600}
.blob{width:90px;height:90px;background:var(--accent);border-radius:40% 60% 55% 45%/50% 45% 55% 50%;animation:vhBlob 3s ease-in-out infinite}
.breathe{width:64px;height:64px;border-radius:50%;background:rgba(209,65,28,.25);border:2px solid var(--accent);animation:vhBreathe 2s ease-in-out infinite}
.type{font-weight:700;font-size:1.05rem;border-right:2px solid var(--accent);white-space:nowrap;overflow:hidden;animation:vhType 2.5s steps(12) infinite}
.split span{display:inline-block;opacity:0;animation:vhFade .4s ease forwards}
.gradText{font-size:1.4rem;font-weight:800;background:linear-gradient(90deg,#d1411c,var(--ink),#d1411c);background-size:200% auto;-webkit-background-clip:text;background-clip:text;color:transparent;animation:vhGrad 2s linear infinite}
.count{font-size:2rem;font-weight:800;font-variant-numeric:tabular-nums}
.flipCard{width:120px;height:72px;perspective:600px}
.flipInner{width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d;position:relative}
.flipCard:hover .flipInner{transform:rotateY(180deg)}
.flipFace{position:absolute;inset:0;backface-visibility:hidden;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:700;background:#fff;border:1px solid var(--border)}
.flipBack{transform:rotateY(180deg);background:var(--accent);color:#fff;border-color:var(--accent)}
.cube{width:64px;height:64px;transform-style:preserve-3d;animation:vhCube 4s linear infinite}
.cubeFace{position:absolute;inset:0;background:rgba(209,65,28,.85);border:1px solid #fff;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:.7rem}
.masonry{columns:3;column-gap:.4rem;width:100%}
.masonry>div{break-inside:avoid;margin-bottom:.4rem;background:#fff;border:1px solid var(--border);border-radius:10px;padding:.5rem;font-size:.75rem}
.heroMini{width:100%;padding:1rem;border-radius:10px;background:linear-gradient(135deg,var(--preview),#fff);border:1px solid var(--border);box-sizing:border-box}
.heroMini strong{font-size:1.2rem}
.svgStage{width:160px;height:100px}
.strokePath{fill:none;stroke:var(--accent);stroke-width:3;stroke-linecap:round;stroke-dasharray:200;stroke-dashoffset:200;animation:vhDrawPath 2s ease forwards infinite}
.ants{stroke-dasharray:6 6;animation:vhAnts 1s linear infinite}
.neon{filter:drop-shadow(0 0 4px #d1411c) drop-shadow(0 0 10px #d1411c)}
.gooey filter{position:absolute}
.goo{display:flex;gap:0;filter:url(#goo)}
.goo i{width:36px;height:36px;border-radius:50%;background:var(--accent);display:block;animation:vhGoo 1.6s ease-in-out infinite alternate}
.goo i:nth-child(2){animation-delay:.2s}
.grain{width:140px;height:80px;border-radius:12px;background:var(--accent);position:relative;overflow:hidden}
.grain::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(0,0,0,.25) 1px,transparent 1px);background-size:3px 3px;opacity:.35;animation:vhGrain .4s steps(2) infinite}
.liquid{width:100px;height:100px;border-radius:50%;background:radial-gradient(circle at 30% 30%,#f3bf9a,var(--accent));animation:vhBlob 2.5s ease-in-out infinite}
.ring{transform:rotate(-90deg)}
.ring circle{fill:none;stroke-width:8}
.ring .track{stroke:rgba(58,26,22,.12)}
.ring .bar{stroke:var(--accent);stroke-linecap:round;stroke-dasharray:126;stroke-dashoffset:40;animation:vhRing 1.5s ease infinite alternate}
.gauge{overflow:visible}
.spark path{fill:none;stroke:var(--accent);stroke-width:2}
.wave{width:100%;max-width:320px}
@keyframes vhFade{from{opacity:0}to{opacity:1}}
@keyframes vhFadeOut{to{opacity:0}}
@keyframes vhSlide{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes vhScale{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:none}}
@keyframes vhSpring{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
@keyframes vhBlur{from{opacity:0;filter:blur(8px)}to{opacity:1;filter:blur(0)}}
@keyframes vhClip{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes vhRipple{to{transform:scale(4);opacity:0}}
@keyframes vhShake{10%,90%{transform:translateX(-2px)}20%,80%{transform:translateX(4px)}30%,50%,70%{transform:translateX(-6px)}40%,60%{transform:translateX(6px)}}
@keyframes vhDraw{to{stroke-dashoffset:0}}
@keyframes vhSpin{to{transform:rotate(360deg)}}
@keyframes vhShimmer{to{background-position:-200% 0}}
@keyframes vhProgress{to{width:100%}}
@keyframes vhBounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-7px)}}
@keyframes vhPulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.15);opacity:.6}100%{transform:scale(1);opacity:1}}
@keyframes vhMorph{from{border-radius:16px;width:80px}to{border-radius:40px;width:140px}}
@keyframes vhGlow{0%,100%{box-shadow:0 0 0 0 rgba(209,65,28,.45)}50%{box-shadow:0 0 0 10px rgba(209,65,28,0)}}
@keyframes vhBounceBox{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes vhWiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(4deg)}75%{transform:rotate(-4deg)}}
@keyframes vhFlash{0%,100%{background:#fff}40%{background:#f3bf9a}}
@keyframes vhPop{from{transform:scale(0)}to{transform:scale(1)}}
@keyframes vhGrad{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes vhFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
@keyframes vhMarquee{to{transform:translateX(-100%)}}
@keyframes vhBlob{0%,100%{border-radius:40% 60% 55% 45%/50% 45% 55% 50%}50%{border-radius:55% 45% 40% 60%/45% 55% 45% 55%}}
@keyframes vhBreathe{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
@keyframes vhType{0%{width:0}40%{width:7.5em}60%{width:7.5em}100%{width:0}}
@keyframes vhCube{to{transform:rotateX(360deg) rotateY(360deg)}}
@keyframes vhDrawPath{0%{stroke-dashoffset:200}50%{stroke-dashoffset:0}100%{stroke-dashoffset:200}}
@keyframes vhAnts{to{stroke-dashoffset:-24}}
@keyframes vhGoo{from{transform:translateX(0)}to{transform:translateX(18px)}}
@keyframes vhGrain{to{transform:translate(1px,1px)}}
@keyframes vhRing{to{stroke-dashoffset:10}}
`

const componentImpl = {
  button: `() => <div className={s.row}><button type="button" className={s.btn}>主按钮</button><button type="button" className={s.btnGhost}>次按钮</button><button type="button" className={s.btnSoft}>幽灵</button></div>`,
  'icon-button': `() => <div className={s.row}>{['＋','✎','🗑'].map(i=><button key={i} type="button" className={s.btnSoft} aria-label="icon">{i}</button>)}</div>`,
  anchor: `() => <div className={s.row}><a href="#a">概述</a><a href="#b">快速上手</a><a href="#c">API</a></div>`,
  dropdown: `() => { const [o,setO]=useState(false); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setO(v=>!v)}>菜单 ▾</button>{o&&<div className={s.card} style={{minWidth:140}}><div>编辑</div><div>复制</div><div>删除</div></div>}</div> }`,
  menu: `() => { const [c,setC]=useState('仪表盘'); return <div className={s.card} style={{minWidth:150}}>{['仪表盘','订单','设置'].map(x=><button key={x} type="button" className={c===x?s.btn:s.btnSoft} style={{display:'block',width:'100%',marginBottom:6}} onClick={()=>setC(x)}>{x}</button>)}</div> }`,
  'page-header': `() => <div className={s.card} style={{width:'100%',maxWidth:360,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div className={s.meta}>‹ 返回</div><strong>订单详情</strong></div><button type="button" className={s.btn}>保存</button></div>`,
  pagination: `() => { const [p,setP]=useState(1); return <div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setP(x=>Math.max(1,x-1))}>‹</button>{[1,2,3].map(n=><button key={n} type="button" className={p===n?s.btn:s.btnSoft} onClick={()=>setP(n)}>{n}</button>)}<button type="button" className={s.btnSoft} onClick={()=>setP(x=>Math.min(3,x+1))}>›</button></div> }`,
  input: `() => <label className={s.wrap} style={{alignItems:'stretch',maxWidth:280}}><span className={s.meta}>邮箱</span><input className={s.field} placeholder="you@vibe.com" /></label>`,
  checkbox: `() => { const [a,setA]=useState(true); const [b,setB]=useState(false); return <div className={s.wrap} style={{alignItems:'flex-start'}}><label><input type="checkbox" checked={a} onChange={e=>setA(e.target.checked)} /> 已选中</label><label><input type="checkbox" checked={b} onChange={e=>setB(e.target.checked)} /> 未选中</label></div> }`,
  radio: `() => { const [v,setV]=useState('A'); return <div className={s.wrap} style={{alignItems:'flex-start'}}><label><input type="radio" checked={v==='A'} onChange={()=>setV('A')} /> 选项 A</label><label><input type="radio" checked={v==='B'} onChange={()=>setV('B')} /> 选项 B</label></div> }`,
  slider: `() => { const [v,setV]=useState(42); return <div className={s.wrap}><input type="range" min={0} max={100} value={v} onChange={e=>setV(Number(e.target.value))} style={{width:200}} /><span className={s.meta}>{v}</span></div> }`,
  select: `() => <select className={s.field} defaultValue="bj"><option value="bj">北京</option><option value="sh">上海</option></select>`,
  'date-picker': `() => <input className={s.field} type="date" defaultValue="2026-06-17" />`,
  'time-picker': `() => <input className={s.field} type="time" defaultValue="14:30" />`,
  'input-number': `() => { const [v,setV]=useState(42); return <div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setV(x=>x-1)}>▼</button><strong>{v}</strong><button type="button" className={s.btnSoft} onClick={()=>setV(x=>x+1)}>▲</button></div> }`,
  rate: `() => { const [v,setV]=useState(3); return <div className={s.row}>{[1,2,3,4,5].map(n=><button key={n} type="button" style={{border:'none',background:'transparent',fontSize:'1.25rem',color:n<=v?'var(--accent)':'#ccc'}} onClick={()=>setV(n)}>★</button>)}</div> }`,
  'color-picker': `() => { const [c,setC]=useState('#D1411C'); return <div className={s.row}><input type="color" value={c} onChange={e=>setC(e.target.value)} /><code>{c}</code></div> }`,
  cascader: `() => { const [v,setV]=useState('浙江 / 杭州'); return <div className={s.wrap}><select className={s.field} value={v} onChange={e=>setV(e.target.value)}><option>浙江 / 杭州</option><option>浙江 / 宁波</option><option>江苏 / 南京</option></select></div> }`,
  autocomplete: `() => { const [q,setQ]=useState(''); const opts=['lib','library','liberty'].filter(x=>x.includes(q)||!q); return <div className={s.wrap}><input className={s.field} value={q} onChange={e=>setQ(e.target.value)} placeholder="输入 lib…" /><div className={s.card}>{opts.map(o=><div key={o}>{o}</div>)}</div></div> }`,
  transfer: `() => { const [left,setLeft]=useState(['A 项','B 项']); const [right,setRight]=useState(['C 项']); return <div className={s.row}><div className={s.card}>{left.map(x=><div key={x}>{x}</div>)}</div><button type="button" className={s.btnSoft} onClick={()=>{ if(!left.length) return; const [m,...r]=left; setLeft(r); setRight(t=>[...t,m]); }}>›</button><div className={s.card}>{right.map(x=><div key={x}>{x}</div>)}</div></div> }`,
  form: `() => <form className={s.wrap} style={{alignItems:'stretch',maxWidth:260}} onSubmit={e=>e.preventDefault()}><input className={s.field} placeholder="用户名" /><input className={s.field} type="password" placeholder="密码" /><button className={s.btn} type="submit">提交</button></form>`,
  avatar: `() => <div className={s.row}><div style={{width:40,height:40,borderRadius:'50%',background:'var(--accent)',color:'#fff',display:'grid',placeItems:'center',fontWeight:800}}>A</div><div style={{width:40,height:40,borderRadius:'50%',background:'var(--ink)',color:'#fff',display:'grid',placeItems:'center',fontWeight:800}}>K</div><span className={s.meta}>+3</span></div>`,
  tooltip: `() => <div className={s.wrap} title="这是一条提示"><button type="button" className={s.btnGhost}>悬停我</button><span className={s.meta}>原生 title 提示</span></div>`,
  card: `() => <div className={s.card} style={{width:220}}><strong>卡片标题</strong><p className={s.meta}>内容卡片承载单组信息</p></div>`,
  badge: `() => <div className={s.row}><span style={{position:'relative',fontSize:'1.4rem'}}>🔔<i style={{position:'absolute',top:-6,right:-10,background:'var(--accent)',color:'#fff',fontSize:10,fontStyle:'normal',borderRadius:999,padding:'1px 5px'}}>5</i></span><span style={{position:'relative',fontSize:'1.4rem'}}>✉<i style={{position:'absolute',top:-6,right:-12,background:'var(--accent)',color:'#fff',fontSize:10,fontStyle:'normal',borderRadius:999,padding:'1px 5px'}}>12</i></span></div>`,
  calendar: `() => <div className={s.card}><div className={s.meta}>2026 年 6 月</div><div style={{display:'grid',gridTemplateColumns:'repeat(7,1.4rem)',gap:4,fontSize:12}}>{Array.from({length:14},(_,i)=><span key={i} style={{textAlign:'center',fontWeight:i===9?700:400,color:i===9?'var(--accent)':'inherit'}}>{i+1}</span>)}</div></div>`,
  carousel: `() => { const [i,setI]=useState(0); const items=['一','二','三']; return <div className={s.wrap}><div className={s.previewBox}>第 {items[i]} 屏</div><div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setI(x=>(x+2)%3)}>‹</button><span className={s.meta}>{i+1} / 3</span><button type="button" className={s.btnSoft} onClick={()=>setI(x=>(x+1)%3)}>›</button></div></div> }`,
  comment: `() => <div className={s.card} style={{display:'flex',gap:10,width:280}}><div style={{width:36,height:36,borderRadius:'50%',background:'var(--preview)',display:'grid',placeItems:'center',fontWeight:700}}>A</div><div><strong>阿伦</strong> <span className={s.meta}>2h</span><p className={s.meta} style={{margin:0}}>这个组件很实用，收藏了。</p></div></div>`,
  descriptions: `() => <div className={s.card} style={{width:240,fontSize:13}}><div>姓名　张三</div><div>部门　设计组</div><div>状态　在职</div></div>`,
  image: `() => <div style={{width:160,height:100,borderRadius:12,background:'linear-gradient(135deg,#d1411c,#f3bf9a)',display:'grid',placeItems:'center',color:'#fff',fontWeight:700}}>图片</div>`,
  list: `() => <div className={s.card} style={{width:200}}>{['列表项一','列表项二','列表项三'].map(x=><div key={x} style={{padding:'.35rem 0',borderBottom:'1px solid var(--border)'}}>{x}</div>)}</div>`,
  'qr-code': `() => <svg width="96" height="96" viewBox="0 0 16 16" aria-label="QR"><rect width="16" height="16" fill="#fff"/><path fill="var(--ink)" d="M1 1h5v5H1zm1 1v3h3V2zm8-1h5v5h-5zm1 1v3h3V2zM1 10h5v5H1zm1 1v3h3v-3zm7 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm-4 2h1v1H9zm2 0h3v3h-1v-2h-2zm0 2h1v1h-1z"/></svg>`,
  segmented: `() => { const [v,setV]=useState('日'); return <div className={s.row} style={{background:'var(--preview)',borderRadius:999,padding:4}}>{['日','周','月'].map(x=><button key={x} type="button" className={v===x?s.btn:s.btnSoft} style={{border:'none'}} onClick={()=>setV(x)}>{x}</button>)}</div> }`,
  statistic: `() => <div className={s.card} style={{textAlign:'center'}}><div className={s.meta}>今日活跃</div><div style={{fontSize:'1.8rem',fontWeight:800}}>8,642</div><div style={{color:'var(--accent)',fontWeight:700}}>▲ 12.5%</div></div>`,
  table: `() => <table className={s.card} style={{borderCollapse:'collapse',fontSize:13}}><thead><tr><th align="left">名称</th><th align="left">状态</th></tr></thead><tbody><tr><td>订单 A</td><td>完成</td></tr><tr><td>订单 B</td><td>进行中</td></tr></tbody></table>`,
  timeline: `() => <div className={s.wrap} style={{alignItems:'flex-start'}}>{[['已下单','09:20'],['已发货','14:05'],['已签收','次日']].map(([t,d])=><div key={t} style={{display:'flex',gap:8}}><span style={{width:8,height:8,marginTop:6,borderRadius:'50%',background:'var(--accent)'}} /><div><strong>{t}</strong><div className={s.meta}>{d}</div></div></div>)}</div>`,
  tree: `() => { const [open,setOpen]=useState(true); return <div className={s.card} style={{minWidth:180}}><button type="button" className={s.btnSoft} onClick={()=>setOpen(o=>!o)}>{open?'▾':'▸'} 项目</button>{open&&<div style={{paddingLeft:12}}><div>▾ 设计稿</div><div style={{paddingLeft:12}}>首页.fig</div><div>▸ 开发</div></div>}</div> }`,
  alert: `() => <div className={s.card} style={{borderLeft:'3px solid var(--accent)',width:260}}><strong>✓ 操作成功</strong><div className={s.meta}>内容已保存。</div></div>`,
  notification: `() => <div className={s.card} style={{width:240}}><div style={{display:'flex',justifyContent:'space-between'}}><strong>i 新消息</strong><span>✕</span></div><p className={s.meta} style={{margin:0}}>你有一条新的待办通知。</p></div>`,
  popconfirm: `() => { const [o,setO]=useState(false); return <div className={s.wrap}><button type="button" className={s.btn} onClick={()=>setO(true)}>删除</button>{o&&<div className={s.card}>确定删除该项？<div className={s.row} style={{marginTop:8}}><button type="button" className={s.btnGhost} onClick={()=>setO(false)}>否</button><button type="button" className={s.btn} onClick={()=>setO(false)}>是</button></div></div>}</div> }`,
  result: `() => <div className={s.card} style={{textAlign:'center',width:240}}><div style={{fontSize:28,color:'var(--accent)'}}>✓</div><strong>提交成功</strong><p className={s.meta}>订单已生成</p><button type="button" className={s.btn}>返回首页</button></div>`,
  spin: `() => <div className={s.wrap}><div className={s.spinner} /><span className={s.meta}>加载中…</span></div>`,
}

const animReplay = (inner) => `() => { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{${inner}}</div></div> }`

const animationImpl = {
  fade: animReplay(`<div className={s.previewBox + ' ' + s.fade}>Fade</div>`),
  'slide-in': animReplay(`<div className={s.previewBox + ' ' + s.slideIn}>Slide</div>`),
  'scale-in': animReplay(`<div className={s.previewBox + ' ' + s.scaleIn}>Scale</div>`),
  'spring-in': animReplay(`<div className={s.previewBox + ' ' + s.springIn}>Spring</div>`),
  'blur-in': animReplay(`<div className={s.previewBox + ' ' + s.blurIn}>Blur</div>`),
  stagger: animReplay(`<div className={s.row}>{[0,1,2,3].map(i=><div key={i} className={s.previewBox + ' ' + s.staggerItem} style={{animationDelay:i*0.08+'s',width:48,height:48}}>{i+1}</div>)}</div>`),
  'clip-reveal': animReplay(`<div className={s.previewBox + ' ' + s.clipReveal}>Reveal</div>`),
  'hover-lift': `() => <div className={s.hoverLift}>悬停抬升</div>`,
  ripple: `() => { const [rips,setRips]=useState<{id:number;x:number;y:number;size:number}[]>([]); return <button type="button" className={s.rippleBtn} onClick={e=>{ const r=e.currentTarget.getBoundingClientRect(); const size=Math.max(r.width,r.height); const x=e.clientX-r.left-size/2; const y=e.clientY-r.top-size/2; const id=Date.now(); setRips(t=>[...t,{id,x,y,size}]); setTimeout(()=>setRips(t=>t.filter(z=>z.id!==id)),600); }}>点击涟漪{rips.map(r=><span key={r.id} className={s.rippleSpan} style={{width:r.size,height:r.size,left:r.x,top:r.y}} />)}</button> }`,
  'like-burst': `() => { const [on,setOn]=useState(false); return <button type="button" className={s.likeBurst} onClick={()=>setOn(v=>!v)} style={{transform:on?'scale(1.3)':'scale(1)',transition:'transform .2s'}}>{on?'❤️':'♡'}</button> }`,
  magnetic: `() => { const ref=useRef<HTMLButtonElement>(null); return <button type="button" className={s.magnetic} ref={ref} onPointerMove={e=>{ const el=ref.current; if(!el) return; const r=el.getBoundingClientRect(); const dx=(e.clientX-r.left-r.width/2)*.25; const dy=(e.clientY-r.top-r.height/2)*.25; el.style.transform='translate('+dx+'px,'+dy+'px)'; }} onPointerLeave={e=>{ e.currentTarget.style.transform='none'; }}>磁吸</button> }`,
  shake: animReplay(`<div className={s.previewBox + ' ' + s.shake}>密码错误</div>`),
  'checkmark-draw': animReplay(`<svg className={s.checkmark} viewBox="0 0 52 52"><path d="M14 27 l8 8 16-18" /></svg>`),
  spinner: `() => <div className={s.spinner} />`,
  shimmer: `() => <div className={s.shimmer} />`,
  'progress-bar-anim': animReplay(`<div className={s.progressAnim}><i /></div>`),
  'bouncing-dots': `() => <div className={s.dots}><span /><span /><span /></div>`,
  pulse: `() => <div className={s.pulse} />`,
  'page-transition': animReplay(`<div className={s.previewBox + ' ' + s.slideIn}>Page B</div>`),
  'container-transform': `() => <div className={s.containerMorph} />`,
  crossfade: animReplay(`<div className={s.previewBox + ' ' + s.fade}>Crossfade</div>`),
  'slide-transition': animReplay(`<div className={s.previewBox + ' ' + s.slideTrans}>Slide ↔</div>`),
  'scroll-reveal': `() => <div className={s.scrollBox}>{[1,2,3,4].map(n=><div key={n} className={s.revealItem}>区块 {n}</div>)}</div>`,
  'scroll-progress': `() => { const [p,setP]=useState(0); return <div className={s.scrollBox} onScroll={e=>{ const el=e.currentTarget; setP(el.scrollTop/(el.scrollHeight-el.clientHeight)*100||0); }}><div className={s.scrollBar} style={{width:p+'%'}} /><div style={{height:280,padding:12}}>向下滚动查看进度…</div></div> }`,
  'horizontal-scroll': `() => <div className={s.hScroll}>{[1,2,3,4,5].map(n=><div key={n}>卡 {n}</div>)}</div>`,
  scrollytelling: `() => <div className={s.scrollBox}>{['开场','冲突','转折','结局'].map(t=><div key={t} className={s.revealItem} style={{minHeight:70}}>{t}</div>)}</div>`,
  'pulse-glow': `() => <div className={s.glow}>脉冲发光</div>`,
  bounce: `() => <div className={s.previewBox + ' ' + s.bounceBox}>Bounce</div>`,
  wiggle: `() => <div className={s.previewBox + ' ' + s.wiggleBox}>Wiggle</div>`,
  flash: animReplay(`<div className={s.previewBox + ' ' + s.flashBox}>Flash</div>`),
  'badge-pop': animReplay(`<div className={s.badgePop}>消息 <i>3</i></div>`),
  'animated-gradient': `() => <div className={s.gradFlow}>流动渐变</div>`,
  floating: `() => <div className={s.previewBox + ' ' + s.float}>漂浮</div>`,
  marquee: `() => <div className={s.marquee}><span>跑马灯内容 · UI 速查 · Interactpedia　</span></div>`,
  blob: `() => <div className={s.blob} />`,
  breathing: `() => <div className={s.breathe} />`,
  typewriter: `() => <div className={s.type}>打字机效果</div>`,
  'text-scramble': `() => { const [t,setT]=useState('########'); useEffect(()=>{ const target='DECODED'; const chars='ABCDEFG#@$%'; let i=0; const id=setInterval(()=>{ i++; setT(target.slice(0,i)+Array.from({length:Math.max(0,target.length-i)},()=>chars[Math.floor(Math.random()*chars.length)]).join('')); if(i>=target.length) clearInterval(id); },80); return ()=>clearInterval(id); },[]); return <strong style={{letterSpacing:2}}>{t}</strong> }`,
  'split-text': animReplay(`<div>{'逐字进场'.split('').map((ch,i)=><span key={i} className={s.split} style={{animationDelay:i*0.06+'s'}}>{ch}</span>)}</div>`),
  'gradient-text': `() => <div className={s.gradText}>Gradient</div>`,
  'count-up': `() => { const [n,setN]=useState(0); useEffect(()=>{ let v=0; const id=setInterval(()=>{ v+=86; setN(Math.min(v,8642)); if(v>=8642) clearInterval(id); },30); return ()=>clearInterval(id); },[]); return <div className={s.count}>{n.toLocaleString()}</div> }`,
  flip: `() => <div className={s.flipCard}><div className={s.flipInner}><div className={s.flipFace}>正面</div><div className={s.flipFace + ' ' + s.flipBack}>背面</div></div></div>`,
  'cube-rotation': `() => <div style={{perspective:400}}><div className={s.cube}><div className={s.cubeFace} style={{transform:'translateZ(32px)'}}>前</div><div className={s.cubeFace} style={{transform:'rotateY(90deg) translateZ(32px)'}}>右</div></div></div>`,
}

const layoutImpl = {
  navbar: `() => <div className={s.miniNav} style={{width:'100%',maxWidth:360}}><strong>Logo</strong><span>首页</span><span>文档</span><span>定价</span></div>`,
  'holy-grail': `() => <div className={s.layoutBox}><div className={s.layoutHead}>Header</div><div className={s.layoutBody}><div className={s.layoutSide}>Nav</div><div className={s.layoutMain}>Content</div></div><div className={s.layoutFoot}>Footer</div></div>`,
  'card-grid': `() => <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,width:'100%',maxWidth:300}}>{[1,2,3,4].map(n=><div key={n} className={s.card}>卡片 {n}</div>)}</div>`,
  'single-column': `() => <div style={{width:220,display:'flex',flexDirection:'column',gap:8}}><div className={s.wire}>区块 1</div><div className={s.wire}>区块 2</div><div className={s.wire}>区块 3</div></div>`,
  sidebar: `() => <div className={s.layoutBox}><div className={s.layoutBody} style={{minHeight:110}}><div className={s.layoutSide}>Side</div><div className={s.layoutMain}>Main</div></div></div>`,
  'list-detail': `() => <div className={s.layoutBox}><div className={s.layoutBody} style={{gridTemplateColumns:'1fr 1.2fr'}}><div className={s.layoutSide}>列表</div><div className={s.layoutMain}>详情面板</div></div></div>`,
  'dashboard-grid': `() => <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gridTemplateRows:'70px 70px',gap:8,width:300}}><div className={s.card}>KPI</div><div className={s.card}>图</div><div className={s.card} style={{gridColumn:'1 / -1'}}>表格</div></div>`,
  hero: `() => <div className={s.heroMini}><div className={s.meta}>PRODUCT</div><strong>英雄区标题</strong><p className={s.meta}>一句话价值主张</p><button type="button" className={s.btn}>开始</button></div>`,
  masonry: `() => <div className={s.masonry}><div style={{height:48}}>A</div><div style={{height:72}}>B</div><div style={{height:40}}>C</div><div style={{height:64}}>D</div><div style={{height:52}}>E</div></div>`,
  centered: `() => <div style={{width:280,height:120,border:'1px dashed var(--border)',borderRadius:12,display:'grid',placeItems:'center'}}><div className={s.card}>居中内容</div></div>`,
  'media-object': `() => <div className={s.card} style={{display:'flex',gap:12,width:280}}><div style={{width:56,height:56,borderRadius:10,background:'var(--preview)'}} /><div><strong>标题</strong><p className={s.meta} style={{margin:0}}>图文左右排布说明</p></div></div>`,
}

const tokenImpl = {
  color: `() => <div className={s.tokenRow}>{['#B02B26','#D1411C','#F3BF9A','#F9ECE4','#FFFFFF'].map(c=><div key={c} className={s.swatch} style={{background:c}} title={c} />)}</div>`,
  typography: `() => <div className={s.wrap} style={{alignItems:'flex-start'}}><div style={{fontSize:28,fontWeight:800}}>Display</div><div style={{fontSize:16,fontWeight:600}}>Title</div><div style={{fontSize:14}}>Body text</div><div className={s.meta}>Caption</div></div>`,
  spacing: `() => <div className={s.tokenRow}>{[4,8,12,16,24,32].map(n=><div key={n} style={{width:n,height:n,background:'var(--accent)',borderRadius:4}} title={n+'px'} />)}</div>`,
  radius: `() => <div className={s.tokenRow}>{[4,8,12,16,999].map(n=><div key={n} style={{width:40,height:40,background:'#fff',border:'1px solid var(--border)',borderRadius:n}} />)}</div>`,
  shadow: `() => <div className={s.tokenRow}>{['0 1px 2px rgba(0,0,0,.06)','0 8px 24px rgba(0,0,0,.1)','0 16px 40px rgba(0,0,0,.14)'].map((sh,i)=><div key={i} style={{width:56,height:40,background:'#fff',borderRadius:10,boxShadow:sh}} />)}</div>`,
  breakpoint: `() => <div className={s.card} style={{fontSize:13}}><div>sm ≥ 640</div><div>md ≥ 768</div><div>lg ≥ 1024</div><div>xl ≥ 1280</div></div>`,
}

const svgImpl = {
  'line-draw': `() => <svg className={s.svgStage} viewBox="0 0 120 80"><path className={s.strokePath} d="M10 60 C 40 10, 80 10, 110 60" /></svg>`,
  signature: `() => <svg className={s.svgStage} viewBox="0 0 160 60"><path className={s.strokePath} d="M10 40 c20-30 40 20 55-5 s30 10 50-15 25 20 40 5" /></svg>`,
  'marching-ants': `() => <svg className={s.svgStage} viewBox="0 0 120 80"><rect x="20" y="15" width="80" height="50" fill="none" stroke="var(--accent)" strokeWidth="2" className={s.ants} /></svg>`,
  'icon-trace': `() => <svg className={s.svgStage} viewBox="0 0 64 64"><path className={s.strokePath} d="M16 32 l10 10 22-24" /></svg>`,
  'neon-glow': `() => <svg className={s.svgStage} viewBox="0 0 120 80"><text x="20" y="48" fontSize="28" fontWeight="800" fill="var(--accent)" className={s.neon}>NEON</text></svg>`,
  gooey: `() => <div className={s.wrap}><svg width="0" height="0"><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" /><feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" /></filter></svg><div className={s.goo}><i /><i /></div></div>`,
  grain: `() => <div className={s.grain} />`,
  liquid: `() => <div className={s.liquid} />`,
  linear: `() => <svg className={s.svgStage} viewBox="0 0 120 80"><defs><linearGradient id="lg" x1="0" x2="1"><stop stopColor="#d1411c"/><stop offset="1" stopColor="#f3bf9a"/></linearGradient></defs><rect x="20" y="20" width="80" height="40" rx="10" fill="url(#lg)" /></svg>`,
  radial: `() => <svg className={s.svgStage} viewBox="0 0 120 80"><defs><radialGradient id="rg"><stop stopColor="#f3bf9a"/><stop offset="1" stopColor="#d1411c"/></radialGradient></defs><circle cx="60" cy="40" r="28" fill="url(#rg)" /></svg>`,
  'animated-gradient-svg': `() => <div className={s.gradFlow} style={{width:140,height:80}} />`,
  'progress-ring': `() => <svg className={s.ring} width="72" height="72" viewBox="0 0 50 50"><circle className={s.track} cx="25" cy="25" r="20" /><circle className={s.bar} cx="25" cy="25" r="20" /></svg>`,
  gauge: `() => <svg width="140" height="80" viewBox="0 0 140 80"><path d="M20 70 A50 50 0 0 1 120 70" fill="none" stroke="var(--preview)" strokeWidth="10" strokeLinecap="round" /><path d="M20 70 A50 50 0 0 1 95 28" fill="none" stroke="var(--accent)" strokeWidth="10" strokeLinecap="round" /><text x="70" y="68" textAnchor="middle" fontWeight="800" fontSize="16">72</text></svg>`,
  donut: `() => <svg width="90" height="90" viewBox="0 0 42 42"><circle cx="21" cy="21" r="15.5" fill="none" stroke="var(--preview)" strokeWidth="6" /><circle cx="21" cy="21" r="15.5" fill="none" stroke="var(--accent)" strokeWidth="6" strokeDasharray="70 100" strokeLinecap="round" transform="rotate(-90 21 21)" /></svg>`,
  sparkline: `() => <svg width="160" height="56" viewBox="0 0 100 40" className={s.spark}><path d="M0 30 L15 22 L30 26 L45 12 L60 18 L75 8 L100 14" /></svg>`,
  'blob-shape': `() => <svg width="110" height="110" viewBox="0 0 100 100"><path fill="var(--accent)" d="M44.7,-57C57.3,-48.5,66.2,-33.3,70.1,-16.7C74,0,72.9,18.1,64.5,31.5C56.2,44.8,40.6,53.4,24.5,58.4C8.4,63.5,-8.2,65,-23.8,60.4C-39.4,55.7,-54,45,-62.3,30.1C-70.6,15.2,-72.7,-3.9,-67.2,-20.4C-61.7,-36.9,-48.7,-50.8,-34,-58.8C-19.3,-66.7,-2.9,-68.6,12,-65.2C26.9,-61.8,42.1,-53,44.7,-57Z" transform="translate(50 50)" /></svg>`,
  'wave-divider': `() => <svg className={s.wave} viewBox="0 0 400 60" preserveAspectRatio="none"><path fill="var(--accent)" d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30 V60 H0Z" /></svg>`,
  squiggle: `() => <svg width="180" height="40" viewBox="0 0 180 40"><path d="M10 25 q15 -20 30 0 t30 0 t30 0 t30 0 t30 0" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" /></svg>`,
}

const allImpl = { ...componentImpl, ...animationImpl, ...layoutImpl, ...tokenImpl, ...svgImpl }

const missing = ids.filter((id) => !allImpl[id])
if (missing.length) {
  console.warn('Missing implementations:', missing)
}

let body = `import { useEffect, useRef, useState, type ComponentType } from 'react'
import s from './vibehub-demos.module.css'

`

function toPascalDemo(id) {
  return (
    id
      .split('-')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join('')
      .replace(/[^a-zA-Z0-9]/g, '') + 'Demo'
  )
}

/** Convert `() => expr` / `() => { body }` into a plain function declaration. */
function emitFn(name, impl) {
  if (!impl.startsWith('() =>')) {
    throw new Error(`Bad impl for ${name}: must start with () =>`)
  }
  const rest = impl.slice('() =>'.length).trimStart()
  if (rest.startsWith('{')) {
    return `export function ${name}() ${rest}\n\n`
  }
  return `export function ${name}() {\n  return (${rest})\n}\n\n`
}

for (const id of ids) {
  const impl = allImpl[id]
  if (!impl) continue
  body += emitFn(toPascalDemo(id), impl)
}

body += `export const vibehubDemoMap: Record<string, ComponentType> = {\n`
for (const id of ids) {
  if (!allImpl[id]) continue
  body += `  '${id}': ${toPascalDemo(id)},\n`
}
body += `}\n`

writeFileSync(join(root, 'src/demos/vibehub-demos.module.css'), css.trim() + '\n', 'utf8')
writeFileSync(join(root, 'src/demos/vibehub.tsx'), body, 'utf8')
console.log('Wrote vibehub demos for', ids.filter((id) => allImpl[id]).length, 'ids')
