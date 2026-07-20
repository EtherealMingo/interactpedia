import type { Pattern } from './types'
import { advancedPatterns } from './patterns-advanced'
import { vibehubPatterns } from './patterns-vibehub'

const corePatterns: Pattern[] = [
  {
    id: 'toast',
    nameZh: '吐司提示',
    nameEn: 'Toast',
    aliases: ['Snackbar'],
    category: 'feedback',
    summary: '短暂出现的轻量反馈，告知操作结果而不打断主流程。',
    definition:
      'Toast（部分平台称 Snackbar）是短暂出现在屏幕边缘的轻量消息，用于确认非关键结果。可带可选操作（如撤销），超时后自动消失。',
    whenToUse: [
      '操作已成功且无需用户决策（已保存、已复制）',
      '需要可选的轻量撤销（Undo）',
      '不想打断当前阅读或编辑上下文',
    ],
    whenNotToUse: [
      '错误需要用户理解并修复（改用内联错误或对话框）',
      '信息必须被读完才能继续（改用 Banner 或 Modal）',
      '多条高频堆叠导致注意力疲劳',
    ],
    variants: ['纯文字自动消失', '带 Undo/查看 操作', '队列堆叠 vs 替换上一条'],
    related: ['banner', 'confirm-dialog', 'optimistic-ui'],
    collab: {
      states: ['queued', 'visible', 'exiting', 'dismissed'],
      api: [
        '前端本地触发即可，通常无需专用接口',
        '若带 Undo：需短时窗口内可调用回滚接口（幂等 DELETE/PUT）',
      ],
      productNotes: [
        '文案宜短：动词过去式 + 对象（「已删除 3 项」）',
        '跨端统一叫法：对外文档写 Toast/Snackbar 对照，避免产研各说各话',
      ],
    },
    confuseWith: [
      { id: 'banner', note: 'Banner 更持久、占版面，适合需持续知晓的状态' },
      { id: 'confirm-dialog', note: '确认框会阻断操作，Toast 不会' },
    ],
  },
  {
    id: 'inline-validation',
    nameZh: '内联校验',
    nameEn: 'Inline Validation',
    category: 'input',
    summary: '在字段旁即时提示格式或业务错误，帮助用户当场修正。',
    definition:
      '在输入过程中或失焦后，于字段附近展示校验结果（错误/成功），而不是等到整表提交才一次性报错。',
    whenToUse: [
      '格式规则清晰（邮箱、手机号、密码强度）',
      '字段间依赖不强、可独立判断',
      '希望降低提交失败率',
    ],
    whenNotToUse: [
      '规则依赖服务端且延迟很高（可改为提交时校验 + 摘要）',
      '用户仍在 IME 组合输入中（需忽略 composition）',
      '过早报错打断探索性填写',
    ],
    variants: ['输入中校验', '失焦校验', '成功态勾选', '异步唯一性检查'],
    related: ['debounced-search', 'confirm-dialog', 'toast'],
    collab: {
      states: ['pristine', 'validating', 'valid', 'invalid'],
      api: [
        '同步规则可纯前端；唯一性等需 GET/HEAD 探活接口',
        '防抖 300–500ms；返回需带 requestId 避免乱序覆盖',
      ],
      productNotes: [
        '错误文案写「如何改」而非仅「无效」',
        '与后端错误码表对齐，避免前后端各写一套句子',
      ],
    },
    confuseWith: [
      { id: 'toast', note: '字段错误应贴在字段旁，不要只用 Toast 闪一下' },
    ],
  },
  {
    id: 'skeleton',
    nameZh: '骨架屏',
    nameEn: 'Skeleton Screen',
    category: 'feedback',
    summary: '用内容轮廓占位，降低加载时的布局跳动与焦虑感。',
    definition:
      '在真实内容到达前，用灰色块模拟标题、段落、卡片等布局结构，让用户感知「内容正在就位」。',
    whenToUse: [
      '首屏或列表结构可预知',
      '加载时间通常 > 300ms',
      '希望减少 CLS（布局偏移）',
    ],
    whenNotToUse: [
      '瞬时本地切换（闪骨架反而嘈杂）',
      '结构完全未知（骨架会误导）',
      '错误场景（应直接错误态，而非永久骨架）',
    ],
    variants: ['列表行骨架', '详情页骨架', '闪烁动画 vs 静态'],
    related: ['spinner', 'optimistic-ui', 'infinite-scroll'],
    collab: {
      states: ['loading', 'partial', 'ready', 'error'],
      api: [
        '配合分区请求：先关键字段再补次要模块',
        '超时与空数据要跳出骨架，进入 empty/error',
      ],
      productNotes: ['骨架形状尽量贴近最终 UI，避免「骗布局」'],
    },
    confuseWith: [
      { id: 'spinner', note: 'Spinner 不传达结构；骨架更适合内容型页面' },
    ],
  },
  {
    id: 'progress-determinate',
    nameZh: '确定进度',
    nameEn: 'Determinate Progress',
    aliases: ['Progress Bar'],
    category: 'feedback',
    summary: '展示可估计完成比例的进度，适合上传、导出、批处理。',
    definition:
      '进度条显示 0%–100% 的可估计完成度。若无法估计，应改用不确定进度（Indeterminate）或 Spinner。',
    whenToUse: [
      '能拿到已完成字节/条数',
      '任务可能超过数秒，用户需要掌控感',
      '可取消的长任务',
    ],
    whenNotToUse: [
      '进度虚假（卡在 99% 伤害信任）',
      '亚秒级操作（过度反馈）',
    ],
    variants: ['线性条', '环形', '不确定进度条', '步进式多阶段进度'],
    related: ['skeleton', 'toast', 'optimistic-ui'],
    collab: {
      states: ['idle', 'running', 'paused', 'success', 'failed', 'cancelled'],
      api: [
        '上传用 xhr/fetch 进度事件或分片回调',
        '长任务用 jobId + 轮询/WebSocket 推送 percent',
      ],
      productNotes: ['允许取消；失败给出重试与已完成部分说明'],
    },
    confuseWith: [
      { id: 'skeleton', note: '骨架表示「内容位」；进度表示「任务完成度」' },
    ],
  },
  {
    id: 'optimistic-ui',
    nameZh: '乐观更新',
    nameEn: 'Optimistic UI',
    category: 'feedback',
    summary: '先更新界面再等服务器确认，失败则回滚并提示。',
    definition:
      '在请求返回前就按「将会成功」更新 UI，以提升响应感；若服务器拒绝或网络失败，则回滚到先前状态并给出错误反馈。',
    whenToUse: [
      '操作成功率高、冲突少（点赞、已读、轻量开关）',
      '延迟可感知且用户期望「跟手」',
    ],
    whenNotToUse: [
      '支付、删库、权限变更等高代价操作',
      '强一致/易冲突的协同编辑（需 OT/CRDT 或锁定）',
    ],
    variants: ['立即切换 + 静默确认', '立即切换 + 失败 Toast 回滚', '待确认徽标'],
    related: ['toast', 'toggle', 'undo-redo'],
    collab: {
      states: ['optimistic', 'confirmed', 'rolled_back'],
      api: [
        '接口必须幂等；客户端生成 mutationId',
        '回滚时用服务器权威状态覆盖，勿只本地反转一次',
      ],
      productNotes: ['产品需接受「偶发回跳」；文案准备失败解释'],
    },
    confuseWith: [
      { id: 'toast', note: 'Toast 是反馈载体；乐观更新是时序策略' },
    ],
  },
  {
    id: 'debounced-search',
    nameZh: '防抖搜索',
    nameEn: 'Debounced Search',
    category: 'input',
    summary: '停止输入一小段时间后再发搜索请求，降低服务压力。',
    definition:
      '在用户停止键入达到阈值（如 300ms）后才触发查询，合并连续输入造成的中间请求。',
    whenToUse: [
      '即时搜索类体验但后端成本高',
      '输入法组合输入场景（配合 composition 事件）',
    ],
    whenNotToUse: [
      '本地极小词表过滤（可即时，不必防抖）',
      '必须每次按键都分析的场景（罕见）',
    ],
    variants: ['固定防抖', '首字符立即 + 后续防抖', '节流（throttle）'],
    related: ['inline-validation', 'infinite-scroll', 'skeleton'],
    collab: {
      states: ['idle', 'typing', 'pending', 'results', 'empty', 'error'],
      api: [
        '取消过期请求（AbortController）',
        '响应带回 query 快照，丢弃过期结果',
      ],
      productNotes: ['空查询是展示推荐还是清空，需产品明确'],
    },
    confuseWith: [
      { id: 'inline-validation', note: '校验关注对错；搜索关注匹配结果集' },
    ],
  },
  {
    id: 'infinite-scroll',
    nameZh: '无限滚动',
    nameEn: 'Infinite Scroll',
    category: 'scrolling',
    summary: '接近列表底部时自动加载下一批内容。',
    definition:
      '当滚动接近末尾时自动请求下一页并追加，形成连续浏览流。页脚、站点地图等可达性需额外设计。',
    whenToUse: [
      '消费型信息流（社交、资讯）',
      '用户目标是「继续浏览」而非定位到某页',
    ],
    whenNotToUse: [
      '需要回到页脚/法律信息（难触达）',
      '用户常需比较跨页条目或分享「第 N 页」',
      'SEO 关键的目录页（慎用）',
    ],
    variants: ['交叉观察触发', '预取下一页', '反向无限滚动（聊天）'],
    related: ['load-more', 'pagination', 'skeleton', 'virtual-list'],
    collab: {
      states: ['idle', 'loading_more', 'eof', 'error'],
      api: [
        '优先游标/cursor 分页，避免 offset 在写入下漂移',
        '返回 nextCursor；空 cursor 表示结束',
      ],
      productNotes: ['提供「回到顶部」；错误时给「再试一次」而非静默失败'],
    },
    confuseWith: [
      { id: 'load-more', note: 'Load More 需显式点击，更可控、更利于页脚' },
      { id: 'pagination', note: '分页可分享页码、随机访问' },
    ],
  },
  {
    id: 'load-more',
    nameZh: '加载更多',
    nameEn: 'Load More',
    category: 'scrolling',
    summary: '用户主动点击按钮再加载下一批，兼顾控制感与页脚可达。',
    definition:
      '在列表底部放置「加载更多」控件，由用户显式触发下一页加载，而不是滚动自动触发。',
    whenToUse: [
      '需要稳定触达页脚',
      '批量加载成本高，希望用户有意识触发',
      '无限滚动与分页之间的折中',
    ],
    whenNotToUse: [
      '强沉浸消费流（用户厌倦反复点击）',
      '总条数很少（直接一次展示）',
    ],
    variants: ['按钮', '看见即加载但仍显示控件', '每次加载数量可配'],
    related: ['infinite-scroll', 'pagination', 'skeleton'],
    collab: {
      states: ['idle', 'loading', 'eof', 'error'],
      api: ['与无限滚动相同的 cursor 分页契约'],
      productNotes: ['按钮上可显示「还剩约 N 条」增强预期'],
    },
    confuseWith: [
      { id: 'infinite-scroll', note: '自动 vs 显式是核心差异' },
    ],
  },
  {
    id: 'pull-to-refresh',
    nameZh: '下拉刷新',
    nameEn: 'Pull to Refresh',
    category: 'scrolling',
    summary: '在列表顶部下拉以重新获取数据，常见于移动端。',
    definition:
      '用户在滚动容器顶部继续下拉超过阈值后松手，触发数据刷新并显示进度反馈。',
    whenToUse: [
      '移动端时间线/收件箱等「最新在上」列表',
      '需要手动获取最新，又不必单独放刷新按钮',
    ],
    whenNotToUse: [
      '桌面端无触控惯例时强行模仿',
      '与浏览器原生下拉刷新冲突且未处理',
      '表单编辑页（易误触丢焦点）',
    ],
    variants: ['松手刷新', '过度下拉阻尼', '刷新成功微反馈'],
    related: ['skeleton', 'toast', 'infinite-scroll'],
    collab: {
      states: ['pulling', 'armed', 'refreshing', 'settled'],
      api: ['通常重新拉取第一页；注意与已加载后续页的合并策略'],
      productNotes: ['刷新后是否清空已加载页，需明确（通常重置）'],
    },
    confuseWith: [
      { id: 'infinite-scroll', note: '一个管「更新顶部」，一个管「追加底部」' },
    ],
  },
  {
    id: 'confirm-dialog',
    nameZh: '确认对话框',
    nameEn: 'Confirm Dialog',
    category: 'overlays',
    summary: '在破坏性或高影响操作前要求明确确认。',
    definition:
      '模态对话框陈述后果并提供确认/取消。确认操作应是审慎的，避免习惯性点击。',
    whenToUse: [
      '不可轻易撤销的删除、覆盖、提交',
      '影响他人或计费的操作',
    ],
    whenNotToUse: [
      '低风险操作（改用 Toast + Undo）',
      '连续弹确认导致确认疲劳',
    ],
    variants: ['双按钮', '危险主按钮', '需输入名称确认'],
    related: ['modal', 'toast', 'optimistic-ui'],
    collab: {
      states: ['open', 'confirming', 'closed'],
      api: ['确认后才发突变请求；按钮进入 loading 防重复提交'],
      productNotes: [
        '说清后果与是否可恢复',
        '危险操作主按钮用破坏性样式，且不要默认聚焦在「删除」上（视平台规范）',
      ],
    },
    confuseWith: [
      { id: 'modal', note: 'Confirm 是 Modal 的一种任务形态' },
      { id: 'toast', note: 'Toast + Undo 适合可逆轻操作' },
    ],
  },
  {
    id: 'tabs',
    nameZh: '标签页',
    nameEn: 'Tabs',
    category: 'navigation',
    summary: '在同一视图内切换相关面板，通常保留页面上下文。',
    definition:
      '一组互斥标签控制可见面板。适合同一对象的不同方面，而不是完全无关的目的地。',
    whenToUse: [
      '内容同级、用户需频繁切换比较',
      '希望少占垂直空间',
    ],
    whenNotToUse: [
      '标签过多需横向滚动（考虑侧导航）',
      '各面板是独立任务流（考虑路由页面）',
    ],
    variants: ['下划线', '分段样式', '可路由 Tabs', '垂直 Tabs'],
    related: ['breadcrumb', 'drawer', 'modal'],
    collab: {
      states: ['selectedIndex', 'mounted/lazy'],
      api: ['若 Tab 对应数据：切换时按需请求；URL query 同步 tab= 便于分享'],
      productNotes: ['标签文案对等、短；角标表示未读要克制'],
    },
    confuseWith: [
      { id: 'drawer', note: '抽屉是临时叠加；Tabs 是页内切换' },
    ],
  },
  {
    id: 'breadcrumb',
    nameZh: '面包屑',
    nameEn: 'Breadcrumb',
    category: 'navigation',
    summary: '展示当前位置的层级路径，并支持快速回退上级。',
    definition:
      '以层级链接显示「你在哪」，帮助理解信息架构并一键回到祖先节点。',
    whenToUse: [
      '层级 ≥ 3 的站点或控制台',
      '用户会从深链直接进入',
    ],
    whenNotToUse: [
      '扁平信息架构',
      '移动端顶部空间极紧（可折叠为「上级」）',
    ],
    variants: ['全路径', '折叠中间节点', '带当前页不可点'],
    related: ['tabs', 'drawer'],
    collab: {
      states: ['path[]'],
      api: ['由路由或资源 parent 链生成；勿与浏览器历史强行等同'],
      productNotes: ['最后一项是当前页，通常不可点'],
    },
    confuseWith: [
      { id: 'tabs', note: 'Tabs 是同级切换；面包屑是祖先链' },
    ],
  },
  {
    id: 'drawer',
    nameZh: '抽屉',
    nameEn: 'Drawer',
    aliases: ['Side Sheet'],
    category: 'overlays',
    summary: '从屏幕边缘滑出的面板，承载导航或详情而少打断。',
    definition:
      '由边缘滑入的面板，可配合遮罩。常用于导航菜单或查看详情同时保留部分背景上下文。',
    whenToUse: [
      '需要较大面板但不想进新页面',
      '导航在窄屏的收纳',
    ],
    whenNotToUse: [
      '必须强制完成的决策（更适合 Modal）',
      '内容极短（Popover 足够）',
    ],
    variants: ['左侧导航抽屉', '右侧详情', '底部 Sheet（移动）'],
    related: ['modal', 'tabs', 'confirm-dialog'],
    collab: {
      states: ['closed', 'open', 'dragging'],
      api: ['详情抽屉按 id 拉资源；关闭勿丢未保存——需草稿或拦截'],
      productNotes: ['明确关闭方式：遮罩、关闭按钮、返回手势'],
    },
    confuseWith: [
      { id: 'modal', note: 'Modal 通常更阻断；抽屉更偏浏览/导航' },
    ],
  },
  {
    id: 'modal',
    nameZh: '模态对话框',
    nameEn: 'Modal Dialog',
    category: 'overlays',
    summary: '阻断背景交互，要求用户先处理当前任务。',
    definition:
      '带遮罩的对话框捕获焦点与交互，直到完成、取消或关闭。适合短小、自包含的任务。',
    whenToUse: [
      '短表单、确认、关键提示',
      '需要用户注意力集中',
    ],
    whenNotToUse: [
      '复杂长流程（用全页或向导）',
      '仅展示可延后阅读的信息（用 Banner/Toast）',
    ],
    variants: ['居中 Modal', '全屏 Modal（小屏）', '非模态面板对照'],
    related: ['confirm-dialog', 'drawer', 'toast'],
    collab: {
      states: ['open', 'submitting', 'closed'],
      api: ['打开时锁滚动；焦点陷阱；Esc 关闭策略需产品定'],
      productNotes: ['主操作一个；避免 Modal 套 Modal'],
    },
    confuseWith: [
      { id: 'drawer', note: '形态与打断程度不同' },
      { id: 'confirm-dialog', note: '确认框是模态的一种用途' },
    ],
  },
  {
    id: 'toggle',
    nameZh: '开关',
    nameEn: 'Toggle / Switch',
    category: 'controls',
    summary: '立即生效的开/关控件，适合设置项。',
    definition:
      '表现二元状态的开关。拨动后通常立即生效（或乐观更新），而不是等到表单提交。',
    whenToUse: [
      '设置项即时生效（通知开/关）',
      '状态本身是结果，无需额外「保存」',
    ],
    whenNotToUse: [
      '需要与多字段一起提交的表单（用 Checkbox）',
      '选项不是简单开/关（用单选/分段）',
    ],
    variants: ['即时保存', '需确认的危险开关', '带文字 ON/OFF'],
    related: ['optimistic-ui', 'confirm-dialog', 'toast'],
    collab: {
      states: ['on', 'off', 'pending', 'error'],
      api: ['PATCH 单一字段；失败回滚开关位置'],
      productNotes: ['危险关闭可先 Confirm；文案说明影响范围'],
    },
    confuseWith: [
      { id: 'optimistic-ui', note: '开关常配合乐观更新，但二者层级不同' },
    ],
  },
  {
    id: 'drag-reorder',
    nameZh: '拖拽排序',
    nameEn: 'Drag-and-drop Reorder',
    category: 'controls',
    summary: '通过拖动列表项改变顺序，适合优先级与编排。',
    definition:
      '用户拖动项目到新位置以更新顺序。应提供键盘替代方案与明确的放置指示。',
    whenToUse: [
      '顺序有业务意义（优先级、播放列表）',
      '列表长度中等、可一屏感知',
    ],
    whenNotToUse: [
      '超长列表无虚拟化（性能差）',
      '移动端易与滚动手势冲突且未做手柄分离',
    ],
    variants: ['手柄拖拽', '整行拖拽', '跨列表拖拽'],
    related: ['optimistic-ui', 'toast', 'load-more'],
    collab: {
      states: ['idle', 'dragging', 'saving', 'error'],
      api: [
        '提交有序列 id[] 或 {id, position}',
        '用 version/etag 防止并发覆盖',
      ],
      productNotes: ['保存中可禁用再拖；失败恢复原序并 Toast'],
    },
    confuseWith: [
      { id: 'load-more', note: '加载更多改变的是数据集合大小，不是顺序' },
    ],
  },
]

export const patterns: Pattern[] = [...corePatterns, ...advancedPatterns, ...vibehubPatterns]

export function getPattern(id: string): Pattern | undefined {
  return patterns.find((p) => p.id === id)
}

export function searchPatterns(query: string, category?: string): Pattern[] {
  const q = query.trim().toLowerCase()
  return patterns.filter((p) => {
    if (category && category !== 'all' && p.category !== category) return false
    if (!q) return true
    const hay = [p.id, p.nameZh, p.nameEn, p.summary, ...(p.aliases ?? [])]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
}
