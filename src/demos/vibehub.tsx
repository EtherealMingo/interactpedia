import { useEffect, useRef, useState, type ComponentType } from 'react'
import s from './vibehub-demos.module.css'

export function ButtonDemo() {
  return (<div className={s.row}><button type="button" className={s.btn}>主按钮</button><button type="button" className={s.btnGhost}>次按钮</button><button type="button" className={s.btnSoft}>幽灵</button></div>)
}

export function IconButtonDemo() {
  return (<div className={s.row}>{['＋','✎','🗑'].map(i=><button key={i} type="button" className={s.btnSoft} aria-label="icon">{i}</button>)}</div>)
}

export function AnchorDemo() {
  return (<div className={s.row}><a href="#a">概述</a><a href="#b">快速上手</a><a href="#c">API</a></div>)
}

export function DropdownDemo() { const [o,setO]=useState(false); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setO(v=>!v)}>菜单 ▾</button>{o&&<div className={s.card} style={{minWidth:140}}><div>编辑</div><div>复制</div><div>删除</div></div>}</div> }

export function MenuDemo() { const [c,setC]=useState('仪表盘'); return <div className={s.card} style={{minWidth:150}}>{['仪表盘','订单','设置'].map(x=><button key={x} type="button" className={c===x?s.btn:s.btnSoft} style={{display:'block',width:'100%',marginBottom:6}} onClick={()=>setC(x)}>{x}</button>)}</div> }

export function PageHeaderDemo() {
  return (<div className={s.card} style={{width:'100%',maxWidth:360,display:'flex',justifyContent:'space-between',alignItems:'center'}}><div><div className={s.meta}>‹ 返回</div><strong>订单详情</strong></div><button type="button" className={s.btn}>保存</button></div>)
}

export function PaginationDemo() { const [p,setP]=useState(1); return <div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setP(x=>Math.max(1,x-1))}>‹</button>{[1,2,3].map(n=><button key={n} type="button" className={p===n?s.btn:s.btnSoft} onClick={()=>setP(n)}>{n}</button>)}<button type="button" className={s.btnSoft} onClick={()=>setP(x=>Math.min(3,x+1))}>›</button></div> }

export function InputDemo() {
  return (<label className={s.wrap} style={{alignItems:'stretch',maxWidth:280}}><span className={s.meta}>邮箱</span><input className={s.field} placeholder="you@vibe.com" /></label>)
}

export function CheckboxDemo() { const [a,setA]=useState(true); const [b,setB]=useState(false); return <div className={s.wrap} style={{alignItems:'flex-start'}}><label><input type="checkbox" checked={a} onChange={e=>setA(e.target.checked)} /> 已选中</label><label><input type="checkbox" checked={b} onChange={e=>setB(e.target.checked)} /> 未选中</label></div> }

export function RadioDemo() { const [v,setV]=useState('A'); return <div className={s.wrap} style={{alignItems:'flex-start'}}><label><input type="radio" checked={v==='A'} onChange={()=>setV('A')} /> 选项 A</label><label><input type="radio" checked={v==='B'} onChange={()=>setV('B')} /> 选项 B</label></div> }

export function SliderDemo() { const [v,setV]=useState(42); return <div className={s.wrap}><input type="range" min={0} max={100} value={v} onChange={e=>setV(Number(e.target.value))} style={{width:200}} /><span className={s.meta}>{v}</span></div> }

export function SelectDemo() {
  return (<select className={s.field} defaultValue="bj"><option value="bj">北京</option><option value="sh">上海</option></select>)
}

export function DatePickerDemo() {
  return (<input className={s.field} type="date" defaultValue="2026-06-17" />)
}

export function TimePickerDemo() {
  return (<input className={s.field} type="time" defaultValue="14:30" />)
}

export function InputNumberDemo() { const [v,setV]=useState(42); return <div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setV(x=>x-1)}>▼</button><strong>{v}</strong><button type="button" className={s.btnSoft} onClick={()=>setV(x=>x+1)}>▲</button></div> }

export function RateDemo() { const [v,setV]=useState(3); return <div className={s.row}>{[1,2,3,4,5].map(n=><button key={n} type="button" style={{border:'none',background:'transparent',fontSize:'1.25rem',color:n<=v?'var(--accent)':'#ccc'}} onClick={()=>setV(n)}>★</button>)}</div> }

export function ColorPickerDemo() { const [c,setC]=useState('#2F6F4E'); return <div className={s.row}><input type="color" value={c} onChange={e=>setC(e.target.value)} /><code>{c}</code></div> }

export function CascaderDemo() { const [v,setV]=useState('浙江 / 杭州'); return <div className={s.wrap}><select className={s.field} value={v} onChange={e=>setV(e.target.value)}><option>浙江 / 杭州</option><option>浙江 / 宁波</option><option>江苏 / 南京</option></select></div> }

export function AutocompleteDemo() { const [q,setQ]=useState(''); const opts=['lib','library','liberty'].filter(x=>x.includes(q)||!q); return <div className={s.wrap}><input className={s.field} value={q} onChange={e=>setQ(e.target.value)} placeholder="输入 lib…" /><div className={s.card}>{opts.map(o=><div key={o}>{o}</div>)}</div></div> }

export function TransferDemo() { const [left,setLeft]=useState(['A 项','B 项']); const [right,setRight]=useState(['C 项']); return <div className={s.row}><div className={s.card}>{left.map(x=><div key={x}>{x}</div>)}</div><button type="button" className={s.btnSoft} onClick={()=>{ if(!left.length) return; const [m,...r]=left; setLeft(r); setRight(t=>[...t,m]); }}>›</button><div className={s.card}>{right.map(x=><div key={x}>{x}</div>)}</div></div> }

export function FormDemo() {
  return (<form className={s.wrap} style={{alignItems:'stretch',maxWidth:260}} onSubmit={e=>e.preventDefault()}><input className={s.field} placeholder="用户名" /><input className={s.field} type="password" placeholder="密码" /><button className={s.btn} type="submit">提交</button></form>)
}

export function AvatarDemo() {
  return (<div className={s.row}><div style={{width:40,height:40,borderRadius:'50%',background:'var(--accent)',color:'#fff',display:'grid',placeItems:'center',fontWeight:800}}>A</div><div style={{width:40,height:40,borderRadius:'50%',background:'var(--ink)',color:'#fff',display:'grid',placeItems:'center',fontWeight:800}}>K</div><span className={s.meta}>+3</span></div>)
}

export function TooltipDemo() {
  return (<div className={s.wrap} title="这是一条提示"><button type="button" className={s.btnGhost}>悬停我</button><span className={s.meta}>原生 title 提示</span></div>)
}

export function CardDemo() {
  return (<div className={s.card} style={{width:220}}><strong>卡片标题</strong><p className={s.meta}>内容卡片承载单组信息</p></div>)
}

export function BadgeDemo() {
  return (<div className={s.row}><span style={{position:'relative',fontSize:'1.4rem'}}>🔔<i style={{position:'absolute',top:-6,right:-10,background:'var(--accent)',color:'#fff',fontSize:10,fontStyle:'normal',borderRadius:999,padding:'1px 5px'}}>5</i></span><span style={{position:'relative',fontSize:'1.4rem'}}>✉<i style={{position:'absolute',top:-6,right:-12,background:'var(--accent)',color:'#fff',fontSize:10,fontStyle:'normal',borderRadius:999,padding:'1px 5px'}}>12</i></span></div>)
}

export function CalendarDemo() {
  return (<div className={s.card}><div className={s.meta}>2026 年 6 月</div><div style={{display:'grid',gridTemplateColumns:'repeat(7,1.4rem)',gap:4,fontSize:12}}>{Array.from({length:14},(_,i)=><span key={i} style={{textAlign:'center',fontWeight:i===9?700:400,color:i===9?'var(--accent)':'inherit'}}>{i+1}</span>)}</div></div>)
}

export function CarouselDemo() { const [i,setI]=useState(0); const items=['一','二','三']; return <div className={s.wrap}><div className={s.previewBox}>第 {items[i]} 屏</div><div className={s.row}><button type="button" className={s.btnSoft} onClick={()=>setI(x=>(x+2)%3)}>‹</button><span className={s.meta}>{i+1} / 3</span><button type="button" className={s.btnSoft} onClick={()=>setI(x=>(x+1)%3)}>›</button></div></div> }

export function CommentDemo() {
  return (<div className={s.card} style={{display:'flex',gap:10,width:280}}><div style={{width:36,height:36,borderRadius:'50%',background:'var(--preview)',display:'grid',placeItems:'center',fontWeight:700}}>A</div><div><strong>阿伦</strong> <span className={s.meta}>2h</span><p className={s.meta} style={{margin:0}}>这个组件很实用，收藏了。</p></div></div>)
}

export function DescriptionsDemo() {
  return (<div className={s.card} style={{width:240,fontSize:13}}><div>姓名　张三</div><div>部门　设计组</div><div>状态　在职</div></div>)
}

export function ImageDemo() {
  return (<div style={{width:160,height:100,borderRadius:12,background:'linear-gradient(135deg,#2f6f4e,#7cb083)',display:'grid',placeItems:'center',color:'#fff',fontWeight:700}}>图片</div>)
}

export function ListDemo() {
  return (<div className={s.card} style={{width:200}}>{['列表项一','列表项二','列表项三'].map(x=><div key={x} style={{padding:'.35rem 0',borderBottom:'1px solid var(--border)'}}>{x}</div>)}</div>)
}

export function QrCodeDemo() {
  return (<svg width="96" height="96" viewBox="0 0 16 16" aria-label="QR"><rect width="16" height="16" fill="#fff"/><path fill="var(--ink)" d="M1 1h5v5H1zm1 1v3h3V2zm8-1h5v5h-5zm1 1v3h3V2zM1 10h5v5H1zm1 1v3h3v-3zm7 0h1v1H9zm2 0h1v1h-1zm2 0h2v1h-2zm-4 2h1v1H9zm2 0h3v3h-1v-2h-2zm0 2h1v1h-1z"/></svg>)
}

export function SegmentedDemo() { const [v,setV]=useState('日'); return <div className={s.row} style={{background:'var(--preview)',borderRadius:999,padding:4}}>{['日','周','月'].map(x=><button key={x} type="button" className={v===x?s.btn:s.btnSoft} style={{border:'none'}} onClick={()=>setV(x)}>{x}</button>)}</div> }

export function StatisticDemo() {
  return (<div className={s.card} style={{textAlign:'center'}}><div className={s.meta}>今日活跃</div><div style={{fontSize:'1.8rem',fontWeight:800}}>8,642</div><div style={{color:'var(--accent)',fontWeight:700}}>▲ 12.5%</div></div>)
}

export function TableDemo() {
  return (<table className={s.card} style={{borderCollapse:'collapse',fontSize:13}}><thead><tr><th align="left">名称</th><th align="left">状态</th></tr></thead><tbody><tr><td>订单 A</td><td>完成</td></tr><tr><td>订单 B</td><td>进行中</td></tr></tbody></table>)
}

export function TimelineDemo() {
  return (<div className={s.wrap} style={{alignItems:'flex-start'}}>{[['已下单','09:20'],['已发货','14:05'],['已签收','次日']].map(([t,d])=><div key={t} style={{display:'flex',gap:8}}><span style={{width:8,height:8,marginTop:6,borderRadius:'50%',background:'var(--accent)'}} /><div><strong>{t}</strong><div className={s.meta}>{d}</div></div></div>)}</div>)
}

export function TreeDemo() { const [open,setOpen]=useState(true); return <div className={s.card} style={{minWidth:180}}><button type="button" className={s.btnSoft} onClick={()=>setOpen(o=>!o)}>{open?'▾':'▸'} 项目</button>{open&&<div style={{paddingLeft:12}}><div>▾ 设计稿</div><div style={{paddingLeft:12}}>首页.fig</div><div>▸ 开发</div></div>}</div> }

export function AlertDemo() {
  return (<div className={s.card} style={{borderLeft:'3px solid var(--accent)',width:260}}><strong>✓ 操作成功</strong><div className={s.meta}>内容已保存。</div></div>)
}

export function NotificationDemo() {
  return (<div className={s.card} style={{width:240}}><div style={{display:'flex',justifyContent:'space-between'}}><strong>i 新消息</strong><span>✕</span></div><p className={s.meta} style={{margin:0}}>你有一条新的待办通知。</p></div>)
}

export function PopconfirmDemo() { const [o,setO]=useState(false); return <div className={s.wrap}><button type="button" className={s.btn} onClick={()=>setO(true)}>删除</button>{o&&<div className={s.card}>确定删除该项？<div className={s.row} style={{marginTop:8}}><button type="button" className={s.btnGhost} onClick={()=>setO(false)}>否</button><button type="button" className={s.btn} onClick={()=>setO(false)}>是</button></div></div>}</div> }

export function ResultDemo() {
  return (<div className={s.card} style={{textAlign:'center',width:240}}><div style={{fontSize:28,color:'var(--accent)'}}>✓</div><strong>提交成功</strong><p className={s.meta}>订单已生成</p><button type="button" className={s.btn}>返回首页</button></div>)
}

export function SpinDemo() {
  return (<div className={s.wrap}><div className={s.spinner} /><span className={s.meta}>加载中…</span></div>)
}

export function FadeDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.fade}>Fade</div>}</div></div> }

export function SlideInDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.slideIn}>Slide</div>}</div></div> }

export function ScaleInDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.scaleIn}>Scale</div>}</div></div> }

export function SpringInDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.springIn}>Spring</div>}</div></div> }

export function BlurInDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.blurIn}>Blur</div>}</div></div> }

export function StaggerDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.row}>{[0,1,2,3].map(i=><div key={i} className={s.previewBox + ' ' + s.staggerItem} style={{animationDelay:i*0.08+'s',width:48,height:48}}>{i+1}</div>)}</div>}</div></div> }

export function ClipRevealDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.clipReveal}>Reveal</div>}</div></div> }

export function HoverLiftDemo() {
  return (<div className={s.hoverLift}>悬停抬升</div>)
}

export function RippleDemo() { const [rips,setRips]=useState<{id:number;x:number;y:number;size:number}[]>([]); return <button type="button" className={s.rippleBtn} onClick={e=>{ const r=e.currentTarget.getBoundingClientRect(); const size=Math.max(r.width,r.height); const x=e.clientX-r.left-size/2; const y=e.clientY-r.top-size/2; const id=Date.now(); setRips(t=>[...t,{id,x,y,size}]); setTimeout(()=>setRips(t=>t.filter(z=>z.id!==id)),600); }}>点击涟漪{rips.map(r=><span key={r.id} className={s.rippleSpan} style={{width:r.size,height:r.size,left:r.x,top:r.y}} />)}</button> }

export function LikeBurstDemo() { const [on,setOn]=useState(false); return <button type="button" className={s.likeBurst} onClick={()=>setOn(v=>!v)} style={{transform:on?'scale(1.3)':'scale(1)',transition:'transform .2s'}}>{on?'❤️':'♡'}</button> }

export function MagneticDemo() { const ref=useRef<HTMLButtonElement>(null); return <button type="button" className={s.magnetic} ref={ref} onPointerMove={e=>{ const el=ref.current; if(!el) return; const r=el.getBoundingClientRect(); const dx=(e.clientX-r.left-r.width/2)*.25; const dy=(e.clientY-r.top-r.height/2)*.25; el.style.transform='translate('+dx+'px,'+dy+'px)'; }} onPointerLeave={e=>{ e.currentTarget.style.transform='none'; }}>磁吸</button> }

export function ShakeDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.shake}>密码错误</div>}</div></div> }

export function CheckmarkDrawDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<svg className={s.checkmark} viewBox="0 0 52 52"><path d="M14 27 l8 8 16-18" /></svg>}</div></div> }

export function SpinnerDemo() {
  return (<div className={s.spinner} />)
}

export function ShimmerDemo() {
  return (<div className={s.shimmer} />)
}

export function ProgressBarAnimDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.progressAnim}><i /></div>}</div></div> }

export function BouncingDotsDemo() {
  return (<div className={s.dots}><span /><span /><span /></div>)
}

export function PulseDemo() {
  return (<div className={s.pulse} />)
}

export function PageTransitionDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.slideIn}>Page B</div>}</div></div> }

export function ContainerTransformDemo() {
  return (<div className={s.containerMorph} />)
}

export function CrossfadeDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.fade}>Crossfade</div>}</div></div> }

export function SlideTransitionDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.slideTrans}>Slide ↔</div>}</div></div> }

export function ScrollRevealDemo() {
  return (<div className={s.scrollBox}>{[1,2,3,4].map(n=><div key={n} className={s.revealItem}>区块 {n}</div>)}</div>)
}

export function ScrollProgressDemo() { const [p,setP]=useState(0); return <div className={s.scrollBox} onScroll={e=>{ const el=e.currentTarget; setP(el.scrollTop/(el.scrollHeight-el.clientHeight)*100||0); }}><div className={s.scrollBar} style={{width:p+'%'}} /><div style={{height:280,padding:12}}>向下滚动查看进度…</div></div> }

export function HorizontalScrollDemo() {
  return (<div className={s.hScroll}>{[1,2,3,4,5].map(n=><div key={n}>卡 {n}</div>)}</div>)
}

export function ScrollytellingDemo() {
  return (<div className={s.scrollBox}>{['开场','冲突','转折','结局'].map(t=><div key={t} className={s.revealItem} style={{minHeight:70}}>{t}</div>)}</div>)
}

export function PulseGlowDemo() {
  return (<div className={s.glow}>脉冲发光</div>)
}

export function BounceDemo() {
  return (<div className={s.previewBox + ' ' + s.bounceBox}>Bounce</div>)
}

export function WiggleDemo() {
  return (<div className={s.previewBox + ' ' + s.wiggleBox}>Wiggle</div>)
}

export function FlashDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.previewBox + ' ' + s.flashBox}>Flash</div>}</div></div> }

export function BadgePopDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div className={s.badgePop}>消息 <i>3</i></div>}</div></div> }

export function AnimatedGradientDemo() {
  return (<div className={s.gradFlow}>流动渐变</div>)
}

export function FloatingDemo() {
  return (<div className={s.previewBox + ' ' + s.float}>漂浮</div>)
}

export function MarqueeDemo() {
  return (<div className={s.marquee}><span>跑马灯内容 · UI 速查 · Interactpedia　</span></div>)
}

export function BlobDemo() {
  return (<div className={s.blob} />)
}

export function BreathingDemo() {
  return (<div className={s.breathe} />)
}

export function TypewriterDemo() {
  return (<div className={s.type}>打字机效果</div>)
}

export function TextScrambleDemo() { const [t,setT]=useState('########'); useEffect(()=>{ const target='DECODED'; const chars='ABCDEFG#@$%'; let i=0; const id=setInterval(()=>{ i++; setT(target.slice(0,i)+Array.from({length:Math.max(0,target.length-i)},()=>chars[Math.floor(Math.random()*chars.length)]).join('')); if(i>=target.length) clearInterval(id); },80); return ()=>clearInterval(id); },[]); return <strong style={{letterSpacing:2}}>{t}</strong> }

export function SplitTextDemo() { const [k,setK]=useState(0); return <div className={s.wrap}><button type="button" className={s.btnGhost} onClick={()=>setK(x=>x+1)}>重播</button><div key={k} className={s.stage}>{<div>{'逐字进场'.split('').map((ch,i)=><span key={i} className={s.split} style={{animationDelay:i*0.06+'s'}}>{ch}</span>)}</div>}</div></div> }

export function GradientTextDemo() {
  return (<div className={s.gradText}>Gradient</div>)
}

export function CountUpDemo() { const [n,setN]=useState(0); useEffect(()=>{ let v=0; const id=setInterval(()=>{ v+=86; setN(Math.min(v,8642)); if(v>=8642) clearInterval(id); },30); return ()=>clearInterval(id); },[]); return <div className={s.count}>{n.toLocaleString()}</div> }

export function FlipDemo() {
  return (<div className={s.flipCard}><div className={s.flipInner}><div className={s.flipFace}>正面</div><div className={s.flipFace + ' ' + s.flipBack}>背面</div></div></div>)
}

export function CubeRotationDemo() {
  return (<div style={{perspective:400}}><div className={s.cube}><div className={s.cubeFace} style={{transform:'translateZ(32px)'}}>前</div><div className={s.cubeFace} style={{transform:'rotateY(90deg) translateZ(32px)'}}>右</div></div></div>)
}

export function NavbarDemo() {
  return (<div className={s.miniNav} style={{width:'100%',maxWidth:360}}><strong>Logo</strong><span>首页</span><span>文档</span><span>定价</span></div>)
}

export function HolyGrailDemo() {
  return (<div className={s.layoutBox}><div className={s.layoutHead}>Header</div><div className={s.layoutBody}><div className={s.layoutSide}>Nav</div><div className={s.layoutMain}>Content</div></div><div className={s.layoutFoot}>Footer</div></div>)
}

export function CardGridDemo() {
  return (<div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,width:'100%',maxWidth:300}}>{[1,2,3,4].map(n=><div key={n} className={s.card}>卡片 {n}</div>)}</div>)
}

export function SingleColumnDemo() {
  return (<div style={{width:220,display:'flex',flexDirection:'column',gap:8}}><div className={s.wire}>区块 1</div><div className={s.wire}>区块 2</div><div className={s.wire}>区块 3</div></div>)
}

export function SidebarDemo() {
  return (<div className={s.layoutBox}><div className={s.layoutBody} style={{minHeight:110}}><div className={s.layoutSide}>Side</div><div className={s.layoutMain}>Main</div></div></div>)
}

export function ListDetailDemo() {
  return (<div className={s.layoutBox}><div className={s.layoutBody} style={{gridTemplateColumns:'1fr 1.2fr'}}><div className={s.layoutSide}>列表</div><div className={s.layoutMain}>详情面板</div></div></div>)
}

export function DashboardGridDemo() {
  return (<div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gridTemplateRows:'70px 70px',gap:8,width:300}}><div className={s.card}>KPI</div><div className={s.card}>图</div><div className={s.card} style={{gridColumn:'1 / -1'}}>表格</div></div>)
}

export function HeroDemo() {
  return (<div className={s.heroMini}><div className={s.meta}>PRODUCT</div><strong>英雄区标题</strong><p className={s.meta}>一句话价值主张</p><button type="button" className={s.btn}>开始</button></div>)
}

export function MasonryDemo() {
  return (<div className={s.masonry}><div style={{height:48}}>A</div><div style={{height:72}}>B</div><div style={{height:40}}>C</div><div style={{height:64}}>D</div><div style={{height:52}}>E</div></div>)
}

export function CenteredDemo() {
  return (<div style={{width:280,height:120,border:'1px dashed var(--border)',borderRadius:12,display:'grid',placeItems:'center'}}><div className={s.card}>居中内容</div></div>)
}

export function MediaObjectDemo() {
  return (<div className={s.card} style={{display:'flex',gap:12,width:280}}><div style={{width:56,height:56,borderRadius:10,background:'var(--preview)'}} /><div><strong>标题</strong><p className={s.meta} style={{margin:0}}>图文左右排布说明</p></div></div>)
}

export function ColorDemo() {
  return (<div className={s.tokenRow}>{['#2F6F4E','#14201A','#5A6B62','#E6EBE8','#FFFFFF'].map(c=><div key={c} className={s.swatch} style={{background:c}} title={c} />)}</div>)
}

export function TypographyDemo() {
  return (<div className={s.wrap} style={{alignItems:'flex-start'}}><div style={{fontSize:28,fontWeight:800}}>Display</div><div style={{fontSize:16,fontWeight:600}}>Title</div><div style={{fontSize:14}}>Body text</div><div className={s.meta}>Caption</div></div>)
}

export function SpacingDemo() {
  return (<div className={s.tokenRow}>{[4,8,12,16,24,32].map(n=><div key={n} style={{width:n,height:n,background:'var(--accent)',borderRadius:4}} title={n+'px'} />)}</div>)
}

export function RadiusDemo() {
  return (<div className={s.tokenRow}>{[4,8,12,16,999].map(n=><div key={n} style={{width:40,height:40,background:'#fff',border:'1px solid var(--border)',borderRadius:n}} />)}</div>)
}

export function ShadowDemo() {
  return (<div className={s.tokenRow}>{['0 1px 2px rgba(0,0,0,.06)','0 8px 24px rgba(0,0,0,.1)','0 16px 40px rgba(0,0,0,.14)'].map((sh,i)=><div key={i} style={{width:56,height:40,background:'#fff',borderRadius:10,boxShadow:sh}} />)}</div>)
}

export function BreakpointDemo() {
  return (<div className={s.card} style={{fontSize:13}}><div>sm ≥ 640</div><div>md ≥ 768</div><div>lg ≥ 1024</div><div>xl ≥ 1280</div></div>)
}

export function LineDrawDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 120 80"><path className={s.strokePath} d="M10 60 C 40 10, 80 10, 110 60" /></svg>)
}

export function SignatureDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 160 60"><path className={s.strokePath} d="M10 40 c20-30 40 20 55-5 s30 10 50-15 25 20 40 5" /></svg>)
}

export function MarchingAntsDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 120 80"><rect x="20" y="15" width="80" height="50" fill="none" stroke="var(--accent)" strokeWidth="2" className={s.ants} /></svg>)
}

export function IconTraceDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 64 64"><path className={s.strokePath} d="M16 32 l10 10 22-24" /></svg>)
}

export function NeonGlowDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 120 80"><text x="20" y="48" fontSize="28" fontWeight="800" fill="var(--accent)" className={s.neon}>NEON</text></svg>)
}

export function GooeyDemo() {
  return (<div className={s.wrap}><svg width="0" height="0"><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" /><feColorMatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" /></filter></svg><div className={s.goo}><i /><i /></div></div>)
}

export function GrainDemo() {
  return (<div className={s.grain} />)
}

export function LiquidDemo() {
  return (<div className={s.liquid} />)
}

export function LinearDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 120 80"><defs><linearGradient id="lg" x1="0" x2="1"><stop stopColor="#2f6f4e"/><stop offset="1" stopColor="#7cb083"/></linearGradient></defs><rect x="20" y="20" width="80" height="40" rx="10" fill="url(#lg)" /></svg>)
}

export function RadialDemo() {
  return (<svg className={s.svgStage} viewBox="0 0 120 80"><defs><radialGradient id="rg"><stop stopColor="#7cb083"/><stop offset="1" stopColor="#2f6f4e"/></radialGradient></defs><circle cx="60" cy="40" r="28" fill="url(#rg)" /></svg>)
}

export function AnimatedGradientSvgDemo() {
  return (<div className={s.gradFlow} style={{width:140,height:80}} />)
}

export function ProgressRingDemo() {
  return (<svg className={s.ring} width="72" height="72" viewBox="0 0 50 50"><circle className={s.track} cx="25" cy="25" r="20" /><circle className={s.bar} cx="25" cy="25" r="20" /></svg>)
}

export function GaugeDemo() {
  return (<svg width="140" height="80" viewBox="0 0 140 80"><path d="M20 70 A50 50 0 0 1 120 70" fill="none" stroke="var(--preview)" strokeWidth="10" strokeLinecap="round" /><path d="M20 70 A50 50 0 0 1 95 28" fill="none" stroke="var(--accent)" strokeWidth="10" strokeLinecap="round" /><text x="70" y="68" textAnchor="middle" fontWeight="800" fontSize="16">72</text></svg>)
}

export function DonutDemo() {
  return (<svg width="90" height="90" viewBox="0 0 42 42"><circle cx="21" cy="21" r="15.5" fill="none" stroke="var(--preview)" strokeWidth="6" /><circle cx="21" cy="21" r="15.5" fill="none" stroke="var(--accent)" strokeWidth="6" strokeDasharray="70 100" strokeLinecap="round" transform="rotate(-90 21 21)" /></svg>)
}

export function SparklineDemo() {
  return (<svg width="160" height="56" viewBox="0 0 100 40" className={s.spark}><path d="M0 30 L15 22 L30 26 L45 12 L60 18 L75 8 L100 14" /></svg>)
}

export function BlobShapeDemo() {
  return (<svg width="110" height="110" viewBox="0 0 100 100"><path fill="var(--accent)" d="M44.7,-57C57.3,-48.5,66.2,-33.3,70.1,-16.7C74,0,72.9,18.1,64.5,31.5C56.2,44.8,40.6,53.4,24.5,58.4C8.4,63.5,-8.2,65,-23.8,60.4C-39.4,55.7,-54,45,-62.3,30.1C-70.6,15.2,-72.7,-3.9,-67.2,-20.4C-61.7,-36.9,-48.7,-50.8,-34,-58.8C-19.3,-66.7,-2.9,-68.6,12,-65.2C26.9,-61.8,42.1,-53,44.7,-57Z" transform="translate(50 50)" /></svg>)
}

export function WaveDividerDemo() {
  return (<svg className={s.wave} viewBox="0 0 400 60" preserveAspectRatio="none"><path fill="var(--accent)" d="M0 30 Q50 0 100 30 T200 30 T300 30 T400 30 V60 H0Z" /></svg>)
}

export function SquiggleDemo() {
  return (<svg width="180" height="40" viewBox="0 0 180 40"><path d="M10 25 q15 -20 30 0 t30 0 t30 0 t30 0 t30 0" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" /></svg>)
}

export const vibehubDemoMap: Record<string, ComponentType> = {
  'button': ButtonDemo,
  'icon-button': IconButtonDemo,
  'anchor': AnchorDemo,
  'dropdown': DropdownDemo,
  'menu': MenuDemo,
  'page-header': PageHeaderDemo,
  'pagination': PaginationDemo,
  'input': InputDemo,
  'checkbox': CheckboxDemo,
  'radio': RadioDemo,
  'slider': SliderDemo,
  'select': SelectDemo,
  'date-picker': DatePickerDemo,
  'time-picker': TimePickerDemo,
  'input-number': InputNumberDemo,
  'rate': RateDemo,
  'color-picker': ColorPickerDemo,
  'cascader': CascaderDemo,
  'autocomplete': AutocompleteDemo,
  'transfer': TransferDemo,
  'form': FormDemo,
  'avatar': AvatarDemo,
  'tooltip': TooltipDemo,
  'card': CardDemo,
  'badge': BadgeDemo,
  'calendar': CalendarDemo,
  'carousel': CarouselDemo,
  'comment': CommentDemo,
  'descriptions': DescriptionsDemo,
  'image': ImageDemo,
  'list': ListDemo,
  'qr-code': QrCodeDemo,
  'segmented': SegmentedDemo,
  'statistic': StatisticDemo,
  'table': TableDemo,
  'timeline': TimelineDemo,
  'tree': TreeDemo,
  'alert': AlertDemo,
  'notification': NotificationDemo,
  'popconfirm': PopconfirmDemo,
  'result': ResultDemo,
  'spin': SpinDemo,
  'fade': FadeDemo,
  'slide-in': SlideInDemo,
  'scale-in': ScaleInDemo,
  'spring-in': SpringInDemo,
  'blur-in': BlurInDemo,
  'stagger': StaggerDemo,
  'clip-reveal': ClipRevealDemo,
  'hover-lift': HoverLiftDemo,
  'ripple': RippleDemo,
  'like-burst': LikeBurstDemo,
  'magnetic': MagneticDemo,
  'shake': ShakeDemo,
  'checkmark-draw': CheckmarkDrawDemo,
  'spinner': SpinnerDemo,
  'shimmer': ShimmerDemo,
  'progress-bar-anim': ProgressBarAnimDemo,
  'bouncing-dots': BouncingDotsDemo,
  'pulse': PulseDemo,
  'page-transition': PageTransitionDemo,
  'container-transform': ContainerTransformDemo,
  'crossfade': CrossfadeDemo,
  'slide-transition': SlideTransitionDemo,
  'scroll-reveal': ScrollRevealDemo,
  'scroll-progress': ScrollProgressDemo,
  'horizontal-scroll': HorizontalScrollDemo,
  'scrollytelling': ScrollytellingDemo,
  'pulse-glow': PulseGlowDemo,
  'bounce': BounceDemo,
  'wiggle': WiggleDemo,
  'flash': FlashDemo,
  'badge-pop': BadgePopDemo,
  'animated-gradient': AnimatedGradientDemo,
  'floating': FloatingDemo,
  'marquee': MarqueeDemo,
  'blob': BlobDemo,
  'breathing': BreathingDemo,
  'typewriter': TypewriterDemo,
  'text-scramble': TextScrambleDemo,
  'split-text': SplitTextDemo,
  'gradient-text': GradientTextDemo,
  'count-up': CountUpDemo,
  'flip': FlipDemo,
  'cube-rotation': CubeRotationDemo,
  'navbar': NavbarDemo,
  'holy-grail': HolyGrailDemo,
  'card-grid': CardGridDemo,
  'single-column': SingleColumnDemo,
  'sidebar': SidebarDemo,
  'list-detail': ListDetailDemo,
  'dashboard-grid': DashboardGridDemo,
  'hero': HeroDemo,
  'masonry': MasonryDemo,
  'centered': CenteredDemo,
  'media-object': MediaObjectDemo,
  'color': ColorDemo,
  'typography': TypographyDemo,
  'spacing': SpacingDemo,
  'radius': RadiusDemo,
  'shadow': ShadowDemo,
  'breakpoint': BreakpointDemo,
  'line-draw': LineDrawDemo,
  'signature': SignatureDemo,
  'marching-ants': MarchingAntsDemo,
  'icon-trace': IconTraceDemo,
  'neon-glow': NeonGlowDemo,
  'gooey': GooeyDemo,
  'grain': GrainDemo,
  'liquid': LiquidDemo,
  'linear': LinearDemo,
  'radial': RadialDemo,
  'animated-gradient-svg': AnimatedGradientSvgDemo,
  'progress-ring': ProgressRingDemo,
  'gauge': GaugeDemo,
  'donut': DonutDemo,
  'sparkline': SparklineDemo,
  'blob-shape': BlobShapeDemo,
  'wave-divider': WaveDividerDemo,
  'squiggle': SquiggleDemo,
}
