import { useEffect, useMemo, useRef, useState, type ComponentType, type FormEvent } from 'react'
import styles from './demos.module.css'

export function ToastDemo() {
  const [toasts, setToasts] = useState<{ id: number; text: string }[]>([])
  const push = (text: string) => {
    const id = Date.now()
    setToasts((t) => [...t, { id, text }])
    window.setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2800)
  }
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => push('已保存更改')}>
        触发 Toast
      </button>
      <button type="button" className={styles.btnGhost} onClick={() => push('已删除 · 可撤销')}>
        带操作文案
      </button>
      <div className={styles.toastStack} aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className={styles.toast}>
            {t.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export function InlineValidationDemo() {
  const [email, setEmail] = useState('')
  const [touched, setTouched] = useState(false)
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const showError = touched && email.length > 0 && !valid
  return (
    <div className={styles.demo}>
      <label className={styles.label}>
        邮箱
        <input
          className={showError ? styles.inputError : styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          placeholder="you@company.com"
          autoComplete="off"
        />
      </label>
      {showError && <p className={styles.err}>请输入有效邮箱，例如 name@domain.com</p>}
      {touched && valid && <p className={styles.ok}>格式正确</p>}
    </div>
  )
}

export function SkeletonDemo() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!loading) return
    const t = window.setTimeout(() => setLoading(false), 1600)
    return () => window.clearTimeout(t)
  }, [loading])
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => setLoading(true)}>
        重新加载
      </button>
      {loading ? (
        <div className={styles.skeletonBlock} aria-hidden>
          <div className={styles.skelLine} style={{ width: '40%' }} />
          <div className={styles.skelLine} />
          <div className={styles.skelLine} style={{ width: '70%' }} />
        </div>
      ) : (
        <div className={styles.cardText}>
          <strong>季度报告已就绪</strong>
          <p>骨架消失后内容就位，布局保持稳定。</p>
        </div>
      )}
    </div>
  )
}

export function ProgressDemo() {
  const [value, setValue] = useState(0)
  const [indeterminate, setIndeterminate] = useState(false)
  const run = () => {
    setIndeterminate(false)
    setValue(0)
    let v = 0
    const id = window.setInterval(() => {
      v += 8
      setValue(Math.min(v, 100))
      if (v >= 100) window.clearInterval(id)
    }, 120)
  }
  return (
    <div className={styles.demo}>
      <div className={styles.row}>
        <button type="button" className={styles.btn} onClick={run}>
          确定进度
        </button>
        <button type="button" className={styles.btnGhost} onClick={() => setIndeterminate(true)}>
          不确定进度
        </button>
      </div>
      <div
        className={indeterminate ? styles.progressIndeterminate : styles.progress}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {!indeterminate && <div style={{ width: `${value}%` }} />}
      </div>
      <span className={styles.meta}>{indeterminate ? '处理中…' : `${value}%`}</span>
    </div>
  )
}

export function OptimisticDemo() {
  const [liked, setLiked] = useState(false)
  const [pending, setPending] = useState(false)
  const [msg, setMsg] = useState('')
  const toggle = () => {
    const next = !liked
    setLiked(next)
    setPending(true)
    setMsg('已乐观更新，等待服务器…')
    window.setTimeout(() => {
      const fail = Math.random() < 0.35
      if (fail) {
        setLiked(!next)
        setMsg('服务器拒绝，已回滚')
      } else {
        setMsg('服务器已确认')
      }
      setPending(false)
    }, 900)
  }
  return (
    <div className={styles.demo}>
      <button type="button" className={liked ? styles.btnAccent : styles.btn} onClick={toggle} disabled={pending}>
        {liked ? '已赞' : '点赞'}
      </button>
      <span className={styles.meta}>{msg}</span>
    </div>
  )
}

export function DebouncedSearchDemo() {
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('空闲')
  const [hits, setHits] = useState<string[]>([])
  const corpus = useMemo(() => ['Toast', 'Skeleton', 'Tabs', 'Drawer', 'Modal', 'Toggle', 'Breadcrumb'], [])
  useEffect(() => {
    if (!q.trim()) {
      setHits([])
      setStatus('空闲')
      return
    }
    setStatus('输入中…')
    const t = window.setTimeout(() => {
      setStatus('请求中…')
      window.setTimeout(() => {
        setHits(corpus.filter((c) => c.toLowerCase().includes(q.toLowerCase())))
        setStatus('完成')
      }, 280)
    }, 320)
    return () => window.clearTimeout(t)
  }, [q, corpus])
  return (
    <div className={styles.demo}>
      <input
        className={styles.input}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="搜索词条…"
      />
      <span className={styles.meta}>状态：{status}</span>
      <ul className={styles.list}>
        {hits.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </div>
  )
}

export function InfiniteScrollDemo() {
  const [items, setItems] = useState(() => Array.from({ length: 8 }, (_, i) => i + 1))
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = endRef.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      if (!entries[0]?.isIntersecting || loading || items.length >= 40) return
      setLoading(true)
      window.setTimeout(() => {
        setItems((prev) => {
          const start = prev.length + 1
          return [...prev, ...Array.from({ length: 6 }, (_, i) => start + i)]
        })
        setLoading(false)
      }, 600)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [loading, items.length])
  return (
    <div className={styles.scrollBox}>
      {items.map((n) => (
        <div key={n} className={styles.scrollItem}>
          条目 #{n}
        </div>
      ))}
      <div ref={endRef} className={styles.meta}>
        {items.length >= 40 ? '已到底' : loading ? '加载中…' : '继续下滚'}
      </div>
    </div>
  )
}

export function LoadMoreDemo() {
  const [count, setCount] = useState(5)
  const [loading, setLoading] = useState(false)
  const load = () => {
    setLoading(true)
    window.setTimeout(() => {
      setCount((c) => c + 5)
      setLoading(false)
    }, 500)
  }
  return (
    <div className={styles.demo}>
      <ul className={styles.list}>
        {Array.from({ length: count }, (_, i) => (
          <li key={i}>结果 {i + 1}</li>
        ))}
      </ul>
      <button type="button" className={styles.btn} onClick={load} disabled={loading || count >= 25}>
        {count >= 25 ? '没有更多了' : loading ? '加载中…' : '加载更多'}
      </button>
    </div>
  )
}

export function PullToRefreshDemo() {
  const [offset, setOffset] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const [stamp, setStamp] = useState(() => new Date().toLocaleTimeString())
  const startY = useRef(0)
  const pulling = useRef(false)
  return (
    <div
      className={styles.ptr}
      onPointerDown={(e) => {
        startY.current = e.clientY
        pulling.current = true
        ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!pulling.current || refreshing) return
        const dy = Math.max(0, e.clientY - startY.current)
        setOffset(Math.min(dy * 0.4, 72))
      }}
      onPointerUp={() => {
        pulling.current = false
        if (offset > 52) {
          setRefreshing(true)
          setOffset(48)
          window.setTimeout(() => {
            setStamp(new Date().toLocaleTimeString())
            setRefreshing(false)
            setOffset(0)
          }, 900)
        } else {
          setOffset(0)
        }
      }}
    >
      <div className={styles.ptrHint} style={{ height: offset }}>
        {refreshing ? '刷新中…' : offset > 52 ? '松开刷新' : '下拉刷新（演示）'}
      </div>
      <div className={styles.cardText}>
        <strong>收件箱</strong>
        <p>上次刷新：{stamp}</p>
      </div>
    </div>
  )
}

export function ConfirmDialogDemo() {
  const [open, setOpen] = useState(false)
  const [log, setLog] = useState('')
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btnDanger} onClick={() => setOpen(true)}>
        删除项目
      </button>
      <span className={styles.meta}>{log}</span>
      {open && (
        <div className={styles.backdrop} role="presentation">
          <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <h3 id="confirm-title">确认删除？</h3>
            <p>此操作不可撤销，项目将永久移除。</p>
            <div className={styles.row}>
              <button type="button" className={styles.btnGhost} onClick={() => setOpen(false)}>
                取消
              </button>
              <button
                type="button"
                className={styles.btnDanger}
                onClick={() => {
                  setOpen(false)
                  setLog('已确认删除')
                }}
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function TabsDemo() {
  const [tab, setTab] = useState<'a' | 'b' | 'c'>('a')
  const labels = { a: '概览', b: '活动', c: '设置' } as const
  return (
    <div className={styles.demo}>
      <div className={styles.tabs} role="tablist">
        {(Object.keys(labels) as (keyof typeof labels)[]).map((k) => (
          <button
            key={k}
            type="button"
            role="tab"
            aria-selected={tab === k}
            className={tab === k ? styles.tabActive : styles.tab}
            onClick={() => setTab(k)}
          >
            {labels[k]}
          </button>
        ))}
      </div>
      <div className={styles.tabPanel} role="tabpanel">
        当前面板：{labels[tab]} —— 切换时保留页面上下文。
      </div>
    </div>
  )
}

export function BreadcrumbDemo() {
  return (
    <nav className={styles.demo} aria-label="面包屑">
      <ol className={styles.crumbs}>
        <li>
          <a href="#crumb">控制台</a>
        </li>
        <li>
          <a href="#crumb">项目</a>
        </li>
        <li>
          <a href="#crumb">Interactpedia</a>
        </li>
        <li aria-current="page">设置</li>
      </ol>
    </nav>
  )
}

export function DrawerDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => setOpen(true)}>
        打开抽屉
      </button>
      {open && (
        <div className={styles.backdrop} onClick={() => setOpen(false)} role="presentation">
          <aside
            className={styles.drawer}
            onClick={(e) => e.stopPropagation()}
            aria-label="详情抽屉"
          >
            <header className={styles.drawerHead}>
              <strong>详情</strong>
              <button type="button" className={styles.btnGhost} onClick={() => setOpen(false)}>
                关闭
              </button>
            </header>
            <p>从边缘滑入，可浏览详情同时保留部分背景上下文。</p>
          </aside>
        </div>
      )}
    </div>
  )
}

export function ModalDemo() {
  const [open, setOpen] = useState(false)
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setOpen(false)
  }
  return (
    <div className={styles.demo}>
      <button type="button" className={styles.btn} onClick={() => setOpen(true)}>
        打开模态框
      </button>
      {open && (
        <div className={styles.backdrop} role="presentation">
          <form className={styles.dialog} role="dialog" aria-modal="true" onSubmit={onSubmit}>
            <h3>短任务</h3>
            <label className={styles.label}>
              名称
              <input className={styles.input} name="name" required placeholder="新名称" />
            </label>
            <div className={styles.row}>
              <button type="button" className={styles.btnGhost} onClick={() => setOpen(false)}>
                取消
              </button>
              <button type="submit" className={styles.btn}>
                保存
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export function ToggleDemo() {
  const [on, setOn] = useState(true)
  const [note, setNote] = useState('已开启通知')
  return (
    <div className={styles.demo}>
      <button
        type="button"
        className={on ? styles.switchOn : styles.switchOff}
        role="switch"
        aria-checked={on}
        onClick={() => {
          const next = !on
          setOn(next)
          setNote(next ? '已开启通知（即时生效）' : '已关闭通知')
        }}
      >
        <span className={styles.switchKnob} />
      </button>
      <span className={styles.meta}>{note}</span>
    </div>
  )
}

export function DragReorderDemo() {
  const [items, setItems] = useState(['设计评审', '接口联调', '内容校对', '上线检查'])
  const dragIndex = useRef<number | null>(null)
  return (
    <ul className={styles.dndList}>
      {items.map((item, index) => (
        <li
          key={item}
          className={styles.dndItem}
          draggable
          onDragStart={() => {
            dragIndex.current = index
          }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => {
            const from = dragIndex.current
            if (from === null || from === index) return
            setItems((prev) => {
              const next = [...prev]
              const [moved] = next.splice(from, 1)
              next.splice(index, 0, moved)
              return next
            })
            dragIndex.current = null
          }}
        >
          <span className={styles.dndHandle} aria-hidden>
            ⋮⋮
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

import {
  AccordionDemo,
  AutosaveDemo,
  BeforeAfterDemo,
  BottomSheetDemo,
  BulkActionBarDemo,
  CardStackDemo,
  ChipInputDemo,
  CoachMarkDemo,
  CollaborativeCursorsDemo,
  CommandPaletteDemo,
  ContextMenuDemo,
  CopyFeedbackDemo,
  DragDropUploadDemo,
  EmptyStateDemo,
  FacetedSearchDemo,
  GhostTextDemo,
  HoverCardDemo,
  InlineEditDemo,
  KanbanDndDemo,
  MentionDemo,
  MorphButtonDemo,
  OfflineBannerDemo,
  OtpInputDemo,
  ParallaxDemo,
  PopoverDemo,
  PresenceDemo,
  ScrollSnapDemo,
  ScrollspyDemo,
  SelectionToolbarDemo,
  SharedElementDemo,
  ShowMoreDemo,
  SplitPaneDemo,
  StreamingOutputDemo,
  SuggestionChipsDemo,
  SwipeActionDemo,
  StickyHeaderDemo,
  ToolCallConfirmDemo,
  TypingIndicatorDemo,
  VirtualListDemo,
  WizardDemo,
} from './advanced'
import { vibehubDemoMap } from './vibehub'

export const demoMap: Record<string, ComponentType> = {
  toast: ToastDemo,
  'inline-validation': InlineValidationDemo,
  skeleton: SkeletonDemo,
  'progress-determinate': ProgressDemo,
  'optimistic-ui': OptimisticDemo,
  'debounced-search': DebouncedSearchDemo,
  'infinite-scroll': InfiniteScrollDemo,
  'load-more': LoadMoreDemo,
  'pull-to-refresh': PullToRefreshDemo,
  'confirm-dialog': ConfirmDialogDemo,
  tabs: TabsDemo,
  breadcrumb: BreadcrumbDemo,
  drawer: DrawerDemo,
  modal: ModalDemo,
  toggle: ToggleDemo,
  'drag-reorder': DragReorderDemo,
  'command-palette': CommandPaletteDemo,
  'bottom-sheet': BottomSheetDemo,
  'ghost-text': GhostTextDemo,
  'streaming-output': StreamingOutputDemo,
  'suggestion-chips': SuggestionChipsDemo,
  'tool-call-confirm': ToolCallConfirmDemo,
  'swipe-action': SwipeActionDemo,
  'card-stack': CardStackDemo,
  'before-after': BeforeAfterDemo,
  'scroll-snap': ScrollSnapDemo,
  scrollspy: ScrollspyDemo,
  'split-pane': SplitPaneDemo,
  accordion: AccordionDemo,
  'inline-edit': InlineEditDemo,
  'bulk-action-bar': BulkActionBarDemo,
  popover: PopoverDemo,
  'coach-mark': CoachMarkDemo,
  'typing-indicator': TypingIndicatorDemo,
  'collaborative-cursors': CollaborativeCursorsDemo,
  mention: MentionDemo,
  'copy-feedback': CopyFeedbackDemo,
  autosave: AutosaveDemo,
  wizard: WizardDemo,
  'faceted-search': FacetedSearchDemo,
  'hover-card': HoverCardDemo,
  'otp-input': OtpInputDemo,
  'drag-drop-upload': DragDropUploadDemo,
  'virtual-list': VirtualListDemo,
  'sticky-header': StickyHeaderDemo,
  'show-more': ShowMoreDemo,
  'morph-button': MorphButtonDemo,
  'kanban-dnd': KanbanDndDemo,
  'context-menu': ContextMenuDemo,
  'selection-toolbar': SelectionToolbarDemo,
  'offline-banner': OfflineBannerDemo,
  'empty-state': EmptyStateDemo,
  parallax: ParallaxDemo,
  'shared-element': SharedElementDemo,
  'chip-input': ChipInputDemo,
  presence: PresenceDemo,
  ...vibehubDemoMap,
}
