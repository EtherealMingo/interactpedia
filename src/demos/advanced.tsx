import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './demos.module.css'

export function CommandPaletteDemo() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState('')
  const commands = useMemo(
    () => ['新建文档', '搜索成员', '切换主题', '导出 CSV', '打开设置', '邀请协作'],
    [],
  )
  const hits = commands.filter((c) => c.includes(q.trim()) || !q.trim())
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => setOpen(true)}>
        打开命令面板
      </button>
      <span className={styles.meta}>或按 Ctrl/⌘ + K</span>
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} role="presentation">
          <div className={styles.palette} onClick={(e) => e.stopPropagation()} role="dialog">
            <input
              className={styles.input}
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="输入命令…"
            />
            <ul className={styles.paletteList}>
              {hits.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    className={styles.paletteItem}
                    onClick={() => {
                      setOpen(false)
                      setQ('')
                    }}
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export function BottomSheetDemo() {
  const [open, setOpen] = useState(false)
  const [h, setH] = useState(42)
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => setOpen(true)}>
        打开 Bottom Sheet
      </button>
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} role="presentation">
          <div
            className={styles.sheet}
            style={{ height: `${h}%` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.sheetHandle} />
            <strong>筛选 · 可调高度</strong>
            <div className={styles.row}>
              <button type="button" className={styles.btnGhost} onClick={() => setH(28)}>
                矮
              </button>
              <button type="button" className={styles.btnGhost} onClick={() => setH(48)}>
                中
              </button>
              <button type="button" className={styles.btnGhost} onClick={() => setH(78)}>
                高
              </button>
            </div>
            <p className={styles.meta}>移动端常见吸附档位演示</p>
          </div>
        </div>
      )}
    </div>
  )
}

export function GhostTextDemo() {
  const [value, setValue] = useState('请帮我写一封')
  const suggestion = '简洁的产品发布邮件，突出三个卖点…'
  return (
    <div className={styles.demo}>
      <div className={styles.ghostWrap}>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Tab') {
              e.preventDefault()
              setValue((v) => v + suggestion)
            }
          }}
        />
        <span className={styles.ghostHint} aria-hidden>
          {suggestion}
        </span>
      </div>
      <span className={styles.meta}>按 Tab 接受幽灵补全</span>
    </div>
  )
}

export function StreamingOutputDemo() {
  const full =
    '流式输出让首字更快出现：用户边读边等，并可随时停止生成以节省配额。'
  const [text, setText] = useState('')
  const [running, setRunning] = useState(false)
  const timer = useRef<number | null>(null)
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current)
    timer.current = null
    setRunning(false)
  }
  const start = () => {
    stop()
    setText('')
    setRunning(true)
    let i = 0
    timer.current = window.setInterval(() => {
      i += 1
      setText(full.slice(0, i))
      if (i >= full.length) stop()
    }, 42)
  }
  useEffect(() => () => stop(), [])
  return (
    <div className={styles.demo}>
      <div className={styles.row}>
        <button type="button" className={styles.btn} onClick={start} disabled={running}>
          开始生成
        </button>
        <button type="button" className={styles.btnDanger} onClick={stop} disabled={!running}>
          停止
        </button>
      </div>
      <p className={styles.stream}>{text || '（等待生成）'}{running && <span className={styles.caret}>▍</span>}</p>
    </div>
  )
}

export function SuggestionChipsDemo() {
  const [msg, setMsg] = useState('')
  const chips = ['对比三种方案', '写成对后端的接口说明', '给出反例']
  return (
    <div className={styles.demo}>
      <div className={styles.chipRow}>
        {chips.map((c) => (
          <button key={c} type="button" className={styles.sugChip} onClick={() => setMsg(c)}>
            {c}
          </button>
        ))}
      </div>
      <span className={styles.meta}>{msg ? `已选择：${msg}` : '点击芯片填入追问'}</span>
    </div>
  )
}

export function ToolCallConfirmDemo() {
  const [phase, setPhase] = useState<'idle' | 'pending' | 'done'>('idle')
  return (
    <div className={styles.demo}>
      {phase === 'idle' && (
        <button type="button" className={styles.btn} onClick={() => setPhase('pending')}>
          模拟 Agent 请求发邮件
        </button>
      )}
      {phase === 'pending' && (
        <div className={styles.approveBox}>
          <strong>批准工具调用？</strong>
          <p className={styles.meta}>send_email → to: team@acme.com</p>
          <div className={styles.row}>
            <button type="button" className={styles.btnGhost} onClick={() => setPhase('idle')}>
              拒绝
            </button>
            <button type="button" className={styles.btn} onClick={() => setPhase('done')}>
              批准
            </button>
          </div>
        </div>
      )}
      {phase === 'done' && <p className={styles.ok}>已执行 · 可在审计日志中追溯</p>}
    </div>
  )
}

export function SwipeActionDemo() {
  const [x, setX] = useState(0)
  const start = useRef(0)
  const [gone, setGone] = useState(false)
  if (gone) {
    return (
      <div className={styles.demo}>
        <span className={styles.meta}>已归档</span>
        <button type="button" className={styles.btnGhost} onClick={() => { setGone(false); setX(0) }}>
          重置
        </button>
      </div>
    )
  }
  return (
    <div className={styles.swipeTrack}>
      <div className={styles.swipeActions}>归档</div>
      <div
        className={styles.swipeRow}
        style={{ transform: `translateX(${x}px)` }}
        onPointerDown={(e) => {
          start.current = e.clientX - x
          ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (!e.pressure && e.buttons === 0) return
          setX(Math.max(-120, Math.min(0, e.clientX - start.current)))
        }}
        onPointerUp={() => {
          if (x < -80) setGone(true)
          else setX(0)
        }}
      >
        向左拖动此行露出操作
      </div>
    </div>
  )
}

export function CardStackDemo() {
  const [cards, setCards] = useState(['候选人 A', '候选人 B', '候选人 C', '候选人 D'])
  const [offset, setOffset] = useState(0)
  const start = useRef(0)
  const top = cards[0]
  const decide = (dir: 'left' | 'right') => {
    setOffset(dir === 'left' ? -220 : 220)
    window.setTimeout(() => {
      setCards((c) => c.slice(1))
      setOffset(0)
    }, 220)
  }
  if (!top) {
    return (
      <div className={styles.demo}>
        <p className={styles.meta}>牌堆已空</p>
        <button type="button" className={styles.btn} onClick={() => setCards(['候选人 A', '候选人 B', '候选人 C'])}>
          再来一轮
        </button>
      </div>
    )
  }
  return (
    <div className={styles.demo}>
      <div
        className={styles.deckCard}
        style={{ transform: `translateX(${offset}px) rotate(${offset / 18}deg)` }}
        onPointerDown={(e) => {
          start.current = e.clientX
          ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        }}
        onPointerMove={(e) => {
          if (e.buttons === 0) return
          setOffset(e.clientX - start.current)
        }}
        onPointerUp={() => {
          if (offset > 90) decide('right')
          else if (offset < -90) decide('left')
          else setOffset(0)
        }}
      >
        {top}
        <span className={styles.meta}>左滑跳过 · 右滑通过</span>
      </div>
      <div className={styles.row}>
        <button type="button" className={styles.btnGhost} onClick={() => decide('left')}>
          跳过
        </button>
        <button type="button" className={styles.btn} onClick={() => decide('right')}>
          通过
        </button>
      </div>
    </div>
  )
}

export function BeforeAfterDemo() {
  const [pos, setPos] = useState(48)
  return (
    <div className={styles.ba}>
      <div className={styles.baAfter}>改版后</div>
      <div className={styles.baBefore} style={{ width: `${pos}%` }}>
        改版前
      </div>
      <input
        className={styles.baRange}
        type="range"
        min={8}
        max={92}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="对比位置"
      />
    </div>
  )
}

export function ScrollSnapDemo() {
  return (
    <div className={styles.snapRow}>
      {['屏一', '屏二', '屏三', '屏四'].map((t) => (
        <div key={t} className={styles.snapPage}>
          {t}
        </div>
      ))}
    </div>
  )
}

export function ScrollspyDemo() {
  const sections = ['简介', '用法', '注意']
  const [active, setActive] = useState(sections[0])
  return (
    <div className={styles.spy}>
      <nav className={styles.spyNav}>
        {sections.map((s) => (
          <button
            key={s}
            type="button"
            className={active === s ? styles.tabActive : styles.tab}
            onClick={() => {
              setActive(s)
              document.getElementById(`spy-${s}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
            }}
          >
            {s}
          </button>
        ))}
      </nav>
      <div
        className={styles.spyBody}
        onScroll={(e) => {
          const root = e.currentTarget
          for (const s of sections) {
            const el = document.getElementById(`spy-${s}`)
            if (!el) continue
            const top = el.offsetTop - root.scrollTop
            if (top < 80) setActive(s)
          }
        }}
      >
        {sections.map((s) => (
          <section key={s} id={`spy-${s}`} className={styles.spySection}>
            <strong>{s}</strong>
            <p className={styles.meta}>滚动时目录高亮会跟随当前章节。</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export function SplitPaneDemo() {
  const [w, setW] = useState(42)
  const dragging = useRef(false)
  return (
    <div
      className={styles.split}
      onPointerMove={(e) => {
        if (!dragging.current) return
        const rect = e.currentTarget.getBoundingClientRect()
        setW(Math.min(70, Math.max(25, ((e.clientX - rect.left) / rect.width) * 100)))
      }}
      onPointerUp={() => {
        dragging.current = false
      }}
    >
      <div className={styles.splitLeft} style={{ width: `${w}%` }}>
        主列表
      </div>
      <div
        className={styles.splitBar}
        onPointerDown={(e) => {
          dragging.current = true
          ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
        }}
      />
      <div className={styles.splitRight}>详情面板</div>
    </div>
  )
}

export function AccordionDemo() {
  const [open, setOpen] = useState<string | null>('a')
  const items = [
    { id: 'a', t: '什么是手风琴？', b: '分段折叠，节省纵空间。' },
    { id: 'b', t: '何时使用？', b: 'FAQ、设置分组、移动端密集内容。' },
    { id: 'c', t: '注意什么？', b: '需要并排比较时不要强行折叠。' },
  ]
  return (
    <div className={styles.demo}>
      {items.map((it) => (
        <div key={it.id} className={styles.accItem}>
          <button
            type="button"
            className={styles.accBtn}
            aria-expanded={open === it.id}
            onClick={() => setOpen(open === it.id ? null : it.id)}
          >
            {it.t}
          </button>
          {open === it.id && <p className={styles.accBody}>{it.b}</p>}
        </div>
      ))}
    </div>
  )
}

export function InlineEditDemo() {
  const [text, setText] = useState('季度目标草案')
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(text)
  return (
    <div className={styles.demo}>
      {editing ? (
        <input
          className={styles.input}
          value={draft}
          autoFocus
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            setText(draft.trim() || text)
            setEditing(false)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') (e.target as HTMLInputElement).blur()
            if (e.key === 'Escape') {
              setDraft(text)
              setEditing(false)
            }
          }}
        />
      ) : (
        <button type="button" className={styles.inlineText} onClick={() => { setDraft(text); setEditing(true) }}>
          {text} <span className={styles.meta}>点击编辑</span>
        </button>
      )}
    </div>
  )
}

export function BulkActionBarDemo() {
  const [selected, setSelected] = useState<number[]>([])
  const items = [1, 2, 3, 4]
  const toggle = (n: number) =>
    setSelected((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]))
  return (
    <div className={styles.demo}>
      {items.map((n) => (
        <label key={n} className={styles.checkRow}>
          <input type="checkbox" checked={selected.includes(n)} onChange={() => toggle(n)} />
          资源 {n}
        </label>
      ))}
      {selected.length > 0 && (
        <div className={styles.bulkBar}>
          已选 {selected.length}
          <button type="button" className={styles.btnGhost} onClick={() => setSelected([])}>
            清除
          </button>
          <button type="button" className={styles.btnDanger} onClick={() => setSelected([])}>
            删除
          </button>
        </div>
      )}
    </div>
  )
}

export function PopoverDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.demo}>
      <div className={styles.anchor}>
        <button type="button" className={styles.btn} onClick={() => setOpen((o) => !o)}>
          分享
        </button>
        {open && (
          <div className={styles.popover}>
            <button type="button" className={styles.paletteItem}>复制链接</button>
            <button type="button" className={styles.paletteItem}>生成二维码</button>
            <button type="button" className={styles.paletteItem} onClick={() => setOpen(false)}>
              关闭
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export function CoachMarkDemo() {
  const [on, setOn] = useState(true)
  return (
    <div className={styles.coachScene}>
      <button type="button" className={styles.btn} id="coach-target">
        新建项目
      </button>
      {on && (
        <div className={styles.coachMask}>
          <div className={styles.coachBubble}>
            <strong>从这里开始</strong>
            <p className={styles.meta}>聚光引导高亮关键入口，可跳过。</p>
            <button type="button" className={styles.btn} onClick={() => setOn(false)}>
              知道了
            </button>
          </div>
        </div>
      )}
      {!on && (
        <button type="button" className={styles.btnGhost} onClick={() => setOn(true)}>
          重新演示
        </button>
      )}
    </div>
  )
}

export function TypingIndicatorDemo() {
  const [typing, setTyping] = useState(true)
  useEffect(() => {
    const id = window.setInterval(() => setTyping((t) => !t), 2200)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className={styles.demo}>
      <div className={styles.chatBubble}>你好，关于交互百科…</div>
      {typing && (
        <div className={styles.typing} aria-label="对方正在输入">
          <span /><span /><span />
        </div>
      )}
      <span className={styles.meta}>{typing ? 'Alex 正在输入' : '已停止输入'}</span>
    </div>
  )
}

export function CollaborativeCursorsDemo() {
  const [pos, setPos] = useState({ x: 40, y: 36 })
  return (
    <div
      className={styles.canvas}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
      }}
    >
      <div className={styles.peerCursor} style={{ left: pos.x * 0.55 + 20, top: pos.y * 0.4 + 24 }}>
        <i /> Mia
      </div>
      <div className={styles.peerCursor} style={{ left: pos.x * 0.3 + 120, top: pos.y * 0.6 + 10, color: '#b45309' }}>
        <i /> Leo
      </div>
      <span className={styles.meta}>移动指针看协同光标跟随</span>
    </div>
  )
}

export function MentionDemo() {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const people = ['Ada', 'Lin', 'Sam']
  return (
    <div className={styles.demo}>
      <input
        className={styles.input}
        value={text}
        placeholder="输入 @ 提及某人"
        onChange={(e) => {
          const v = e.target.value
          setText(v)
          setOpen(v.endsWith('@') || /@\w*$/.test(v))
        }}
      />
      {open && (
        <ul className={styles.paletteList}>
          {people.map((p) => (
            <li key={p}>
              <button
                type="button"
                className={styles.paletteItem}
                onClick={() => {
                  setText((t) => t.replace(/@\w*$/, `@${p} `))
                  setOpen(false)
                }}
              >
                @{p}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function CopyFeedbackDemo() {
  const [copied, setCopied] = useState(false)
  return (
    <div className={styles.demo}>
      <code className={styles.codeBox}>pk_live_98f3…a2</code>
      <button
        type="button"
        className={copied ? styles.btnAccent : styles.btn}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText('pk_live_98f3demo')
          } catch {
            /* ignore */
          }
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1600)
        }}
      >
        {copied ? '已复制' : '复制密钥'}
      </button>
    </div>
  )
}

export function AutosaveDemo() {
  const [value, setValue] = useState('自动保存草稿…')
  const [status, setStatus] = useState('已保存')
  useEffect(() => {
    if (status !== '保存中…') return
    const t = window.setTimeout(() => setStatus('已保存 · 刚刚'), 700)
    return () => window.clearTimeout(t)
  }, [status])
  return (
    <div className={styles.demo}>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setStatus('保存中…')
        }}
      />
      <span className={styles.meta}>{status}</span>
    </div>
  )
}

export function WizardDemo() {
  const [step, setStep] = useState(0)
  const labels = ['基本信息', '偏好', '完成']
  return (
    <div className={styles.demo}>
      <div className={styles.steps}>
        {labels.map((l, i) => (
          <span key={l} className={i === step ? styles.stepOn : styles.step}>
            {i + 1}. {l}
          </span>
        ))}
      </div>
      <p className={styles.meta}>当前：{labels[step]}</p>
      <div className={styles.row}>
        <button type="button" className={styles.btnGhost} disabled={step === 0} onClick={() => setStep((s) => s - 1)}>
          上一步
        </button>
        <button
          type="button"
          className={styles.btn}
          onClick={() => setStep((s) => Math.min(labels.length - 1, s + 1))}
        >
          {step === labels.length - 1 ? '完成' : '下一步'}
        </button>
      </div>
    </div>
  )
}

export function FacetedSearchDemo() {
  const [tags, setTags] = useState<string[]>([])
  const facets = ['移动', '桌面', 'AI', '无障碍']
  const toggle = (t: string) => setTags((s) => (s.includes(t) ? s.filter((x) => x !== t) : [...s, t]))
  const count = 24 - tags.length * 5
  return (
    <div className={styles.demo}>
      <div className={styles.chipRow}>
        {facets.map((f) => (
          <button
            key={f}
            type="button"
            className={tags.includes(f) ? styles.sugChipOn : styles.sugChip}
            onClick={() => toggle(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <span className={styles.meta}>命中约 {Math.max(count, 3)} 条</span>
    </div>
  )
}

export function HoverCardDemo() {
  const [open, setOpen] = useState(false)
  const timer = useRef<number | null>(null)
  return (
    <div className={styles.demo}>
      <span
        className={styles.hoverLink}
        onPointerEnter={() => {
          timer.current = window.setTimeout(() => setOpen(true), 280)
        }}
        onPointerLeave={() => {
          if (timer.current) window.clearTimeout(timer.current)
          setOpen(false)
        }}
      >
        @Ada Xu
        {open && (
          <div className={styles.hoverCard}>
            <strong>Ada Xu</strong>
            <p className={styles.meta}>产品设计 · 在线</p>
          </div>
        )}
      </span>
      <span className={styles.meta}>悬停查看预览卡</span>
    </div>
  )
}

export function OtpInputDemo() {
  const [digits, setDigits] = useState(['', '', '', '', '', ''])
  const refs = useRef<(HTMLInputElement | null)[]>([])
  return (
    <div className={styles.demo}>
      <div className={styles.otpRow}>
        {digits.map((d, i) => (
          <input
            key={i}
            ref={(el) => {
              refs.current[i] = el
            }}
            className={styles.otpCell}
            inputMode="numeric"
            maxLength={1}
            value={d}
            onChange={(e) => {
              const v = e.target.value.replace(/\D/g, '').slice(-1)
              const next = [...digits]
              next[i] = v
              setDigits(next)
              if (v && i < 5) refs.current[i + 1]?.focus()
            }}
            onKeyDown={(e) => {
              if (e.key === 'Backspace' && !digits[i] && i > 0) refs.current[i - 1]?.focus()
            }}
            onPaste={(e) => {
              e.preventDefault()
              const paste = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6).split('')
              const next = [...digits]
              paste.forEach((ch, idx) => {
                next[idx] = ch
              })
              setDigits(next)
            }}
          />
        ))}
      </div>
      <span className={styles.meta}>{digits.every(Boolean) ? '已填满，可自动提交' : '支持粘贴 6 位码'}</span>
    </div>
  )
}

export function DragDropUploadDemo() {
  const [over, setOver] = useState(false)
  const [file, setFile] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const startUpload = (name: string) => {
    setFile(name)
    setProgress(0)
    let p = 0
    const id = window.setInterval(() => {
      p += 12
      setProgress(Math.min(p, 100))
      if (p >= 100) window.clearInterval(id)
    }, 100)
  }
  return (
    <div
      className={over ? styles.dropOn : styles.drop}
      onDragOver={(e) => {
        e.preventDefault()
        setOver(true)
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setOver(false)
        const f = e.dataTransfer.files[0]
        if (f) startUpload(f.name)
      }}
    >
      {file ? (
        <>
          <strong>{file}</strong>
          <div className={styles.progress}>
            <div style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.meta}>{progress >= 100 ? '上传完成' : `上传中 ${progress}%`}</span>
        </>
      ) : (
        <span className={styles.meta}>拖入文件，或
          <label className={styles.linkish}>
            {' '}选择
            <input
              type="file"
              hidden
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) startUpload(f.name)
              }}
            />
          </label>
        </span>
      )}
    </div>
  )
}

export function VirtualListDemo() {
  const rowH = 32
  const total = 5000
  const [scrollTop, setScrollTop] = useState(0)
  const height = 180
  const start = Math.max(0, Math.floor(scrollTop / rowH) - 2)
  const visible = Math.ceil(height / rowH) + 4
  const end = Math.min(total, start + visible)
  return (
    <div
      className={styles.virt}
      onScroll={(e) => setScrollTop(e.currentTarget.scrollTop)}
    >
      <div style={{ height: total * rowH, position: 'relative' }}>
        {Array.from({ length: end - start }, (_, i) => {
          const idx = start + i
          return (
            <div
              key={idx}
              className={styles.virtRow}
              style={{ top: idx * rowH, height: rowH }}
            >
              行 #{idx + 1} / {total}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function StickyHeaderDemo() {
  return (
    <div className={styles.stickyBox}>
      <div className={styles.stickyHead}>姓名 · 角色 · 状态</div>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={styles.stickyRow}>
          成员 {i + 1}
        </div>
      ))}
    </div>
  )
}

export function ShowMoreDemo() {
  const [open, setOpen] = useState(false)
  const text =
    '截断展开用于评论与描述：先展示前几行，用户按需展开全文，避免列表被长文本撑破。这在信息流与搜索结果中非常常见。'
  return (
    <div className={styles.demo}>
      <p className={open ? undefined : styles.clamp}>{text}</p>
      <button type="button" className={styles.btnGhost} onClick={() => setOpen((o) => !o)}>
        {open ? '收起' : '展开'}
      </button>
    </div>
  )
}

export function MorphButtonDemo() {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle')
  const run = () => {
    setState('loading')
    window.setTimeout(() => setState('success'), 1100)
    window.setTimeout(() => setState('idle'), 2400)
  }
  return (
    <div className={styles.demo}>
      <button
        type="button"
        className={state === 'success' ? styles.morphOk : styles.btn}
        style={{ minWidth: state === 'loading' ? 120 : 96 }}
        onClick={run}
        disabled={state !== 'idle'}
      >
        {state === 'idle' && '提交'}
        {state === 'loading' && '处理中…'}
        {state === 'success' && '完成'}
      </button>
    </div>
  )
}

export function KanbanDndDemo() {
  const [cols, setCols] = useState({
    todo: ['调研', '草稿'],
    doing: ['原型'],
    done: ['评审'],
  })
  const drag = useRef<{ col: keyof typeof cols; index: number } | null>(null)
  const onDrop = (col: keyof typeof cols) => {
    const from = drag.current
    if (!from) return
    setCols((prev) => {
      const next = {
        todo: [...prev.todo],
        doing: [...prev.doing],
        done: [...prev.done],
      }
      const [item] = next[from.col].splice(from.index, 1)
      next[col].push(item)
      return next
    })
    drag.current = null
  }
  return (
    <div className={styles.kanban}>
      {(Object.keys(cols) as (keyof typeof cols)[]).map((col) => (
        <div
          key={col}
          className={styles.kanbanCol}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => onDrop(col)}
        >
          <strong>{col}</strong>
          {cols[col].map((item, index) => (
            <div
              key={item}
              className={styles.kanbanCard}
              draggable
              onDragStart={() => {
                drag.current = { col, index }
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export function ContextMenuDemo() {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null)
  return (
    <div
      className={styles.ctxArea}
      onContextMenu={(e) => {
        e.preventDefault()
        const r = e.currentTarget.getBoundingClientRect()
        setMenu({ x: e.clientX - r.left, y: e.clientY - r.top })
      }}
      onClick={() => setMenu(null)}
    >
      在此区域右键
      {menu && (
        <div className={styles.ctxMenu} style={{ left: menu.x, top: menu.y }}>
          <button type="button" className={styles.paletteItem}>重命名</button>
          <button type="button" className={styles.paletteItem}>复制</button>
          <button type="button" className={styles.paletteItem}>删除</button>
        </div>
      )}
    </div>
  )
}

export function SelectionToolbarDemo() {
  const [toolbar, setToolbar] = useState<{ x: number; y: number } | null>(null)
  const [note, setNote] = useState('选中这段文字试试浮动工具条')
  return (
    <div className={styles.demo}>
      <p
        className={styles.selectText}
        onMouseUp={(e) => {
          const sel = window.getSelection()
          if (!sel || sel.isCollapsed) {
            setToolbar(null)
            return
          }
          const r = e.currentTarget.getBoundingClientRect()
          setToolbar({ x: e.clientX - r.left, y: Math.max(0, e.clientY - r.top - 42) })
        }}
      >
        {note}
      </p>
      {toolbar && (
        <div className={styles.selBar} style={{ left: toolbar.x, top: toolbar.y }}>
          <button type="button" onClick={() => setNote((n) => n.toUpperCase())}>
            粗
          </button>
          <button type="button" onClick={() => setNote((n) => `「${n}」`)}>
            引用
          </button>
          <button type="button" onClick={() => setNote('AI 已改写：更短更清晰的说明')}>
            AI
          </button>
        </div>
      )}
    </div>
  )
}

export function OfflineBannerDemo() {
  const [offline, setOffline] = useState(false)
  return (
    <div className={styles.demo}>
      {offline && <div className={styles.offline}>你已离线 · 更改将在恢复后同步</div>}
      <button type="button" className={styles.btn} onClick={() => setOffline((o) => !o)}>
        {offline ? '模拟恢复网络' : '模拟断网'}
      </button>
    </div>
  )
}

export function EmptyStateDemo() {
  const [empty, setEmpty] = useState(true)
  return (
    <div className={styles.demo}>
      {empty ? (
        <div className={styles.emptyBox}>
          <strong>还没有项目</strong>
          <p className={styles.meta}>创建第一个项目开始协作</p>
          <button type="button" className={styles.btn} onClick={() => setEmpty(false)}>
            创建项目
          </button>
        </div>
      ) : (
        <div className={styles.row}>
          <span>项目 Alpha 已创建</span>
          <button type="button" className={styles.btnGhost} onClick={() => setEmpty(true)}>
            清空演示
          </button>
        </div>
      )}
    </div>
  )
}

export function ParallaxDemo() {
  const [y, setY] = useState(0)
  return (
    <div className={styles.parallax} onScroll={(e) => setY(e.currentTarget.scrollTop)}>
      <div className={styles.parallaxBg} style={{ transform: `translateY(${y * 0.35}px)` }}>
        背景层
      </div>
      <div className={styles.parallaxFg}>前景内容 · 向下滚动看视差</div>
      <div className={styles.parallaxFg}>第二段</div>
    </div>
  )
}

export function SharedElementDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.demo}>
      {!open ? (
        <button type="button" className={styles.thumb} onClick={() => setOpen(true)}>
          <span />
          打开详情
        </button>
      ) : (
        <div className={styles.heroExpand}>
          <span className={styles.heroImg} />
          <div>
            <strong>共享元素展开</strong>
            <p className={styles.meta}>缩略图延续到详情英雄区</p>
            <button type="button" className={styles.btnGhost} onClick={() => setOpen(false)}>
              返回
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function ChipInputDemo() {
  const [chips, setChips] = useState(['design', 'ux'])
  const [draft, setDraft] = useState('')
  return (
    <div className={styles.chipInput}>
      {chips.map((c) => (
        <button
          key={c}
          type="button"
          className={styles.tag}
          onClick={() => setChips((list) => list.filter((x) => x !== c))}
        >
          {c} ×
        </button>
      ))}
      <input
        value={draft}
        placeholder="回车添加"
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && draft.trim()) {
            e.preventDefault()
            setChips((c) => [...c, draft.trim()])
            setDraft('')
          }
          if (e.key === 'Backspace' && !draft && chips.length) {
            setChips((c) => c.slice(0, -1))
          }
        }}
      />
    </div>
  )
}

export function PresenceDemo() {
  const people = [
    { n: 'Ada', s: 'online' as const },
    { n: 'Lin', s: 'away' as const },
    { n: 'Sam', s: 'offline' as const },
  ]
  return (
    <div className={styles.demo}>
      <div className={styles.presenceRow}>
        {people.map((p) => (
          <div key={p.n} className={styles.avatar}>
            {p.n[0]}
            <i className={p.s === 'offline' ? styles.statusOffline : styles[p.s]} />
          </div>
        ))}
      </div>
      <span className={styles.meta}>绿=在线 · 黄=离开 · 灰=离线</span>
    </div>
  )
}
