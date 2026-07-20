export type CategoryId =
  | 'feedback'
  | 'input'
  | 'navigation'
  | 'overlays'
  | 'controls'
  | 'scrolling'
  | 'ai'
  | 'collab'
  | 'advanced'
  | 'component'
  | 'animation'
  | 'layout'
  | 'tokens'
  | 'svg'

export interface Pattern {
  id: string
  nameZh: string
  nameEn: string
  aliases?: string[]
  category: CategoryId
  summary: string
  definition: string
  whenToUse: string[]
  whenNotToUse: string[]
  variants: string[]
  related: string[]
  collab: {
    states: string[]
    api: string[]
    productNotes: string[]
  }
  confuseWith: { id: string; note: string }[]
}

export const CATEGORIES: { id: CategoryId; label: string; blurb: string }[] = [
  { id: 'feedback', label: '反馈与状态', blurb: '加载、成功、失败与即时反馈' },
  { id: 'input', label: '输入与提交', blurb: '搜索、校验、芯片与自动保存' },
  { id: 'scrolling', label: '浏览与加载', blurb: '分页、虚拟列表与吸附滚动' },
  { id: 'navigation', label: '导航与组织', blurb: '标签、向导、粘性头与 Scrollspy' },
  { id: 'overlays', label: '叠加与确认', blurb: '对话框、Sheet、弹出层与菜单' },
  { id: 'controls', label: '选择与操控', blurb: '开关、拖拽、批量与看板' },
  { id: 'ai', label: 'AI 辅助', blurb: '流式输出、幽灵补全与工具确认' },
  { id: 'collab', label: '实时协作', blurb: '在线状态、输入中与协同光标' },
  { id: 'advanced', label: '进阶体验', blurb: '命令面板、视差、共享元素等' },
  { id: 'component', label: '组件速查', blurb: '复刻 Vibehub 组件效果' },
  { id: 'animation', label: '动画速查', blurb: '复刻 Vibehub 动画效果' },
  { id: 'layout', label: '布局速查', blurb: '复刻 Vibehub 布局模式' },
  { id: 'tokens', label: '设计令牌', blurb: '色彩、字体、间距等令牌' },
  { id: 'svg', label: 'SVG 效果', blurb: '复刻 Vibehub SVG 特效' },
]
