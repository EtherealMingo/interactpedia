import type { Pattern } from './types'

/** Extra teaching content keyed by pattern id */
export type PatternExtras = {
  scenarios: string[]
  a11y: string[]
  implTips: string[]
  pitfalls: string[]
}

const defaults = (p: Pattern): PatternExtras => ({
  scenarios: [
    `用户需要理解「${p.nameZh}」（${p.nameEn}）在真实产品中的作用：${p.summary}`,
    ...p.whenToUse.slice(0, 2).map((w) => `典型场景：${w}`),
  ],
  a11y: [
    '保证键盘可到达与可操作，焦点可见。',
    '状态变化用活区（aria-live）或可见文本同步告知辅助技术。',
    '尊重 prefers-reduced-motion，必要时提供瞬切。',
  ],
  implTips: [
    ...p.collab.api.slice(0, 2),
    `关键状态：${p.collab.states.join(' → ')}`,
  ],
  pitfalls: [
    ...p.whenNotToUse.slice(0, 2),
    ...p.confuseWith.slice(0, 1).map((c) => `勿与「${c.id}」混淆：${c.note}`),
  ],
})

/** Hand-tuned extras for higher-signal patterns; others fall back to defaults */
export const patternExtras: Partial<Record<string, Partial<PatternExtras>>> = {
  'command-palette': {
    scenarios: [
      '设计工具 / IDE / 文档站：用户用 ⌘K 跳转页面或执行命令。',
      '运营后台功能很多，菜单层级深，命令面板作为「万能入口」。',
    ],
    a11y: [
      '打开后面板 role=dialog，焦点落入搜索框；Esc 关闭并归还焦点。',
      '列表用 aria-activedescendant 或 roving tabindex 支持方向键。',
    ],
    implTips: [
      '本地命令注册表 + 可选远程搜索；输入防抖与 AbortController。',
      '记录最近使用命令，空查询时优先展示。',
    ],
    pitfalls: [
      '移动端勿只靠快捷键，需有可见入口。',
      '结果过多时要分组，避免一屏刷屏。',
    ],
  },
  'streaming-output': {
    scenarios: [
      '对话式 AI：首 token 尽快出现，降低等待焦虑。',
      '长文生成：边生成边读，并可中途停止。',
    ],
    a11y: [
      '流式区域标记 aria-live=polite，避免每个 token 都打断朗读（可节流播报）。',
      '停止按钮需可键盘激活，并宣告「已停止生成」。',
    ],
    implTips: [
      'SSE/WebSocket + 可取消读取；停止后保留已生成内容。',
      'Markdown 流式渲染注意未闭合语法的临时降级。',
    ],
    pitfalls: [
      '不要在流式过程中频繁重排整页导致抖动。',
      '错误时保留部分结果并提供重试。',
    ],
  },
  'optimistic-ui': {
    scenarios: [
      '点赞、收藏、已读：成功率高，跟手感优先。',
      '开关类设置：先切 UI，失败再回滚并提示。',
    ],
    a11y: ['回滚时必须有可见/可听反馈，不能静默跳回。'],
    implTips: [
      'mutationId + 幂等接口；以服务器权威状态覆盖本地。',
      '并发点击要排队或忽略，避免状态撕裂。',
    ],
    pitfalls: ['支付、删除、权限变更等高代价操作不要乐观。'],
  },
  'bottom-sheet': {
    scenarios: ['移动端筛选、分享、详情预览，保留部分背景上下文。'],
    a11y: ['打开时焦点陷阱；提供明确关闭按钮，不只依赖下滑。'],
    implTips: ['多档 snap；与浏览器手势返回协调。'],
    pitfalls: ['桌面宽屏长表单更适合 Modal 或侧栏。'],
  },
  'virtual-list': {
    scenarios: ['日志、通讯录、大表格：上万行仍需流畅滚动。'],
    a11y: ['确保当前焦点行仍在 DOM 中或可恢复焦点。'],
    implTips: ['定高最简单；动态高度需缓存测量值。'],
    pitfalls: ['几十行以内不必虚拟化。'],
  },
  'collaborative-cursors': {
    scenarios: ['白板、设计协作：看见队友指针减少口头对齐成本。'],
    a11y: ['光标信息勿仅靠颜色，需名字标签。'],
    implTips: ['位置节流上报；离开页面清除 presence。'],
    pitfalls: ['人多时允许隐藏他人光标，减少视觉噪音。'],
  },
  'tool-call-confirm': {
    scenarios: ['Agent 发邮件、改数据、调支付前必须人审。'],
    a11y: ['确认对话框需可读出工具名与关键参数。'],
    implTips: ['工具调用挂起直至 approval；审计日志记录决策。'],
    pitfalls: ['只读查询可自动执行，避免确认疲劳。'],
  },
  'kanban-dnd': {
    scenarios: ['任务板、招聘漏斗：拖卡片即改状态。'],
    a11y: ['提供键盘移动卡片的替代操作。'],
    implTips: ['更新 status + order；用版本号防并发覆盖。'],
    pitfalls: ['非法落列要拒收并说明原因。'],
  },
}

export function getExtras(pattern: Pattern): PatternExtras {
  const base = defaults(pattern)
  const override = patternExtras[pattern.id]
  if (!override) return base
  return {
    scenarios: override.scenarios ?? base.scenarios,
    a11y: override.a11y ?? base.a11y,
    implTips: override.implTips ?? base.implTips,
    pitfalls: override.pitfalls ?? base.pitfalls,
  }
}
