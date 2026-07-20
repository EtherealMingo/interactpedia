# UI Interaction Patterns — Full Catalog

> Version 1.0 · 195 entries · IDs aligned with the [Chinese version](./ui-interaction-catalog.zh.md)

## 0. How to read this catalog

- Three layers: **input primitives** (tap, swipe) ≠ **controls** (button, switch) ≠ **interaction patterns** (infinite scroll, optimistic UI).
- Cross-platform naming differs (Toast vs Snackbar); aliases are noted where common.
- There is no single authoritative “complete set.” This catalog aims to cover common Web / mobile / desktop / a11y / collaboration / AI product patterns and can grow.
- Each entry has a stable `id`, English name, Chinese name, one-line definition, and category; some include platform and “often confused with.”

## Contents

- [1. Input Primitives](#primitives)
- [2. Basic Controls & Standard Interactions](#controls)
- [3. Navigation & Wayfinding](#navigation)
- [4. Disclosure, Overlays & Attention](#overlays)
- [5. Browsing, Scrolling & Loading More](#scrolling)
- [6. Search, Filter & Discovery](#search)
- [7. Selection, Bulk Actions & Data Manipulation](#selection)
- [8. Forms, Validation & Submission](#forms)
- [9. System Status & Feedback](#feedback)
- [10. Motion & Transitions](#motion)
- [11. Media & Data Visualization](#media)
- [12. Collaboration, Realtime & Social](#collab)
- [13. AI & Intelligent Assistance](#ai)
- [14. Accessibility & Inclusive Interaction](#a11y)
- [15. Cross-platform & System-level](#crossplatform)

## 1. Input Primitives {#primitives}

### `click` Click / Tap
- **Chinese name**: 点击
- **Definition**: Press and release a pointer or finger to activate a target.
- **Category**: 1. Input Primitives
  - Platforms: General

### `double-click` Double-click / Double-tap
- **Chinese name**: 双击
- **Definition**: Two rapid clicks/taps, often to open or enter edit mode.
- **Category**: 1. Input Primitives
  - Platforms: General
  - Often confused with: `long-press`

### `long-press` Long Press / Press and Hold
- **Chinese name**: 长按
- **Definition**: Hold beyond a threshold to open a menu or enter selection mode.
- **Category**: 1. Input Primitives
  - Platforms: Mobile/Touch
  - Often confused with: `double-click`

### `right-click` Right-click / Context Menu Gesture
- **Chinese name**: 右键 / 呼出菜单
- **Definition**: Secondary pointer button or equivalent gesture opens a context menu.
- **Category**: 1. Input Primitives
  - Platforms: Desktop/Web

### `hover` Hover / Mouseover
- **Chinese name**: 悬停
- **Definition**: Pointer rests on a target to reveal preview, highlight, or tooltip (often absent on touch).
- **Category**: 1. Input Primitives
  - Platforms: Desktop/Web

### `focus` Focus
- **Chinese name**: 聚焦
- **Definition**: Keyboard or AT moves input focus onto an interactive element.
- **Category**: 1. Input Primitives
  - Platforms: General

### `drag` Drag
- **Chinese name**: 拖拽
- **Definition**: Press and move to relocate an object or define a region.
- **Category**: 1. Input Primitives
  - Platforms: General

### `drop` Drop
- **Chinese name**: 投放
- **Definition**: Release a dragged object onto a drop target.
- **Category**: 1. Input Primitives
  - Platforms: General
  - Often confused with: `drag`

### `scroll-pan` Scroll / Pan
- **Chinese name**: 滚动 / 平移
- **Definition**: Move the viewport to reveal content beyond the visible area.
- **Category**: 1. Input Primitives
  - Platforms: General

### `swipe` Swipe
- **Chinese name**: 轻扫
- **Definition**: A quick directional slide, often to switch, delete, or go back.
- **Category**: 1. Input Primitives
  - Platforms: Mobile
  - Often confused with: `fling`

### `fling` Fling
- **Chinese name**: 抛甩
- **Definition**: A fast swipe with inertia so content keeps moving after release.
- **Category**: 1. Input Primitives
  - Platforms: Mobile
  - Often confused with: `swipe`

### `pinch-zoom` Pinch to Zoom
- **Chinese name**: 捏合缩放
- **Definition**: Two-finger spread/pinch changes zoom level.
- **Category**: 1. Input Primitives
  - Platforms: Touch

### `rotate-gesture` Two-finger Rotate
- **Chinese name**: 双指旋转
- **Definition**: Two fingers rotate relative to each other to rotate an object or view.
- **Category**: 1. Input Primitives
  - Platforms: Touch

### `multi-touch` Multi-touch Gesture
- **Chinese name**: 多指手势
- **Definition**: Two or more fingers used together for a system or app gesture.
- **Category**: 1. Input Primitives
  - Platforms: Touch

### `force-touch` Force Touch / 3D Touch
- **Chinese name**: 力触控
- **Definition**: Pressure-sensitive press for Peek/Pop-style previews (platform-dependent).
- **Category**: 1. Input Primitives
  - Platforms: Some devices

### `stylus` Stylus / Pen Input
- **Chinese name**: 触控笔交互
- **Definition**: Pen input for writing, tapping, pressure, and barrel-button actions.
- **Category**: 1. Input Primitives
  - Platforms: Tablet/Desktop

### `keyboard-typing` Keyboard Typing
- **Chinese name**: 键盘键入
- **Definition**: Enter text via physical or on-screen keyboard.
- **Category**: 1. Input Primitives
  - Platforms: General

### `keyboard-shortcut` Keyboard Shortcut
- **Chinese name**: 键盘快捷键
- **Definition**: Key combinations that invoke commands for power users.
- **Category**: 1. Input Primitives
  - Platforms: Desktop/Web

### `arrow-key-nav` Arrow-key Navigation
- **Chinese name**: 方向键浏览
- **Definition**: Move focus across lists, grids, menus, or canvas with arrow keys.
- **Category**: 1. Input Primitives
  - Platforms: Desktop/Web

### `space-activate` Space to Activate
- **Chinese name**: 空格激活
- **Definition**: Activate a focused control with Space (or Enter), per keyboard conventions.
- **Category**: 1. Input Primitives
  - Platforms: Desktop/Web

### `ime-composition` IME Composition
- **Chinese name**: IME 组合输入
- **Definition**: CJK IMEs stay in composition before commit; validation/search must handle this.
- **Category**: 1. Input Primitives
  - Platforms: General

### `voice-input` Voice Input
- **Chinese name**: 语音输入
- **Definition**: Speech-to-text fills fields or triggers commands.
- **Category**: 1. Input Primitives
  - Platforms: General

### `gamepad` Gamepad / Remote Control
- **Chinese name**: 手柄 / 遥控
- **Definition**: Navigate and confirm with a gamepad or TV remote.
- **Category**: 1. Input Primitives
  - Platforms: TV/Gaming

### `eye-tracking` Eye Tracking
- **Chinese name**: 眼球追踪
- **Definition**: Gaze moves a pointer or selects targets (AT or specialized devices).
- **Category**: 1. Input Primitives
  - Platforms: Specialized

### `camera-gesture` Camera / Mid-air Gesture
- **Chinese name**: 相机手势
- **Definition**: Camera-recognized mid-air gestures control the system (some devices).
- **Category**: 1. Input Primitives
  - Platforms: Specialized


## 2. Basic Controls & Standard Interactions {#controls}

### `button` Button
- **Chinese name**: 按钮
- **Definition**: A control that triggers an action on activation.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `split-button` Split Button
- **Chinese name**: 分裂按钮
- **Definition**: Primary action plus a dropdown of secondary options in one control.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Desktop/Web
  - Often confused with: `button`

### `fab` Floating Action Button (FAB)
- **Chinese name**: 浮动操作按钮; aliases: FAB
- **Definition**: A primary action floating above content, common on mobile.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Mobile

### `icon-button` Icon Button
- **Chinese name**: 图标按钮
- **Definition**: Action expressed only by an icon; needs an accessible name.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `link` Link / Hyperlink
- **Chinese name**: 链接
- **Definition**: Navigates to another resource or in-page location; not a button semantically.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Web
  - Often confused with: `button`

### `text-field` Text Field / Textbox
- **Chinese name**: 文本框
- **Definition**: Single-line text input control.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `password-field` Password Field
- **Chinese name**: 密码框
- **Definition**: Masked sensitive text input, often with show/hide toggle.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `otp-input` OTP / PIN Input
- **Chinese name**: 验证码分位输入
- **Definition**: Multi-cell one-digit OTP/PIN entry with autofill and focus advance.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `search-field` Search Field
- **Chinese name**: 搜索框
- **Definition**: Input dedicated to queries, often with clear and submit affordances.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `textarea` Textarea / Multiline Input
- **Chinese name**: 多行输入
- **Definition**: Multi-line text entry area.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `checkbox` Checkbox
- **Chinese name**: 复选框
- **Definition**: Toggle an option independently; supports multi-select and indeterminate.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `toggle`

### `radio` Radio Button
- **Chinese name**: 单选按钮
- **Definition**: Exactly one choice within a mutually exclusive group.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `segmented-control`

### `toggle` Toggle / Switch
- **Chinese name**: 开关; aliases: Switch
- **Definition**: Immediate on/off control, suited to settings.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `checkbox`

### `slider` Slider / Range
- **Chinese name**: 滑块
- **Definition**: Drag to pick a value in a continuous or discrete range.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `stepper` Input Stepper
- **Chinese name**: 步进器
- **Definition**: Increment/decrement a value by a fixed step.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `slider`

### `select` Select / Dropdown List
- **Chinese name**: 下拉选择
- **Definition**: Choose one (or more) options from a predefined list.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `combobox`

### `listbox` Listbox
- **Chinese name**: 列表框
- **Definition**: Select one or more items from an often persistently visible list.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Desktop/Web

### `combobox` Combobox
- **Chinese name**: 组合框
- **Definition**: Hybrid control: type freely and/or pick from a list.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `select`

### `segmented-control` Segmented Control / Segmented Button
- **Chinese name**: 分段控件
- **Definition**: Mutually exclusive segments for view or mode switching.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `tabs`

### `date-picker` Date Picker
- **Chinese name**: 日期选择器
- **Definition**: Pick a date via calendar or wheels.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `time-picker` Time Picker
- **Chinese name**: 时间选择器
- **Definition**: Pick hours, minutes, seconds, or a time period.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `color-picker` Color Picker
- **Chinese name**: 颜色选择器
- **Definition**: Choose a color via swatches, spectrum, or numeric input.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `file-picker` File Picker
- **Chinese name**: 文件选择
- **Definition**: Select local files via a system dialog.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General
  - Often confused with: `drag-drop-upload`

### `drag-drop-upload` Drag-and-drop Upload
- **Chinese name**: 拖放上传
- **Definition**: Drop files onto a dropzone to upload.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Desktop/Web
  - Often confused with: `file-picker`

### `chip-input` Chip / Tag Input
- **Chinese name**: 标签 / 芯片输入
- **Definition**: Add multiple values as chips in an editable field (e.g. recipients).
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `rating` Rating Control
- **Chinese name**: 评分
- **Definition**: Rate with discrete levels such as stars.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: General

### `knob` Knob / Virtual Knob
- **Chinese name**: 旋钮
- **Definition**: Rotary continuous control, common in audio UIs.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Specialized
  - Often confused with: `slider`

### `wheel-picker` Wheel Picker
- **Chinese name**: 滚轮选择器
- **Definition**: Scroll a cylindrical list to pick a value; common for mobile date/time.
- **Category**: 2. Basic Controls & Standard Interactions
  - Platforms: Mobile


## 3. Navigation & Wayfinding {#navigation}

### `top-nav` Top Navigation Bar
- **Chinese name**: 顶部导航栏
- **Definition**: Primary navigation or toolbar region at the top of a page.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: General

### `bottom-nav` Bottom Navigation / Tab Bar
- **Chinese name**: 底部导航栏
- **Definition**: Fixed bottom destinations for primary mobile sections.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Mobile
  - Often confused with: `tabs`

### `sidebar` Sidebar
- **Chinese name**: 侧边栏
- **Definition**: Side region for navigation and tools, persistent or collapsible.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Desktop/Web

### `nav-rail` Navigation Rail
- **Chinese name**: 导航轨
- **Definition**: Narrow vertical icon navigation between bottom bar and sidebar.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Tablet/Desktop

### `hamburger-menu` Hamburger Menu
- **Chinese name**: 汉堡菜单
- **Definition**: Collapsed nav entry that opens a drawer or menu.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Mobile/Web

### `mega-menu` Mega Menu
- **Chinese name**: 巨型菜单
- **Definition**: Large multi-column site-level navigation panel.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web

### `tabs` Tabs
- **Chinese name**: 标签页
- **Definition**: Switch related panels in place, usually keeping context.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: General
  - Often confused with: `segmented-control`

### `breadcrumb` Breadcrumb
- **Chinese name**: 面包屑
- **Definition**: Shows hierarchical path to the current location with back links.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web/Desktop

### `anchor-link` Anchor Link / Jump Link
- **Chinese name**: 锚点 / 页内跳转
- **Definition**: Jump to a target section within the same page.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web

### `back-to-top` Back to Top
- **Chinese name**: 返回顶部
- **Definition**: Shortcut control to scroll a long page back to the top.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web/Mobile

### `wizard` Wizard / Stepper Flow
- **Chinese name**: 步进向导
- **Definition**: Break a complex task into ordered guided steps.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: General
  - Often confused with: `tabs`

### `tree-nav` Tree Navigation
- **Chinese name**: 树形导航
- **Definition**: Expandable hierarchical node navigation for files and settings.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Desktop/Web

### `pagination-nav` Pagination Navigation
- **Chinese name**: 分页导航
- **Definition**: Move through a result set via page numbers or prev/next.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web
  - Often confused with: `infinite-scroll`

### `history-back-forward` History Back / Forward
- **Chinese name**: 历史前进 / 后退
- **Definition**: Move along browser or in-app navigation history.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: General

### `deep-link` Deep Link / URL State
- **Chinese name**: 深链与 URL 状态
- **Definition**: Encode shareable app state and entry points in the URL.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: Web/Mobile

### `app-switcher` App Switcher
- **Chinese name**: 应用切换器
- **Definition**: System-level switching among recent apps or windows.
- **Category**: 3. Navigation & Wayfinding
  - Platforms: System


## 4. Disclosure, Overlays & Attention {#overlays}

### `modal` Modal Dialog
- **Chinese name**: 模态对话框
- **Definition**: Blocks background interaction until the user addresses it.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `non-modal`

### `non-modal` Non-modal Overlay / Panel
- **Chinese name**: 非模态面板
- **Definition**: Overlay that still allows interacting with the background.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `modal`

### `confirm-dialog` Confirm Dialog
- **Chinese name**: 确认对话框
- **Definition**: Requires explicit confirmation before a destructive or important action.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `alert-dialog`

### `alert-dialog` Alert Dialog
- **Chinese name**: 警告对话框
- **Definition**: Communicates must-know information, often with a single acknowledge action.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `confirm-dialog`

### `drawer` Drawer / Side Sheet
- **Chinese name**: 抽屉
- **Definition**: Panel sliding from a screen edge for nav or details.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `bottom-sheet`

### `bottom-sheet` Bottom Sheet
- **Chinese name**: 底部动作条 / Sheet
- **Definition**: Panel rising from the bottom for mobile actions and details.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Mobile
  - Often confused with: `drawer`

### `popover` Popover
- **Chinese name**: 弹出层
- **Definition**: Lightweight floating content anchored to a trigger.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `tooltip`

### `tooltip` Tooltip
- **Chinese name**: 工具提示
- **Definition**: Brief hint on hover/focus; usually not for complex interaction.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Desktop/Web
  - Often confused with: `popover`

### `toast` Toast
- **Chinese name**: 吐司提示; aliases: Snackbar
- **Definition**: Brief lightweight feedback, with or without an action (naming varies by platform).
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `banner`

### `snackbar` Snackbar
- **Chinese name**: Snackbar
- **Definition**: Material-style brief feedback bar, often with an action like Undo.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Android/Web
  - Often confused with: `toast`

### `banner` Banner
- **Chinese name**: 横幅提示
- **Definition**: In-page persistent status or announcement bar requiring attention.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `toast`

### `lightbox` Lightbox
- **Chinese name**: 灯箱
- **Definition**: Enlarged media on a dimmed overlay.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Web

### `command-palette` Command Palette
- **Chinese name**: 命令面板
- **Definition**: Searchable command launcher (often opened with ⌘K).
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Desktop/Web

### `coach-mark` Coach Mark / Instructional Overlay
- **Chinese name**: 引导蒙层
- **Definition**: Highlights UI elements with first-run instructional copy.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `spotlight`

### `spotlight` Spotlight Tour
- **Chinese name**: 聚光引导
- **Definition**: Step-by-step masked tour focusing one control at a time.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General
  - Often confused with: `coach-mark`

### `badge` Badge
- **Chinese name**: 角标
- **Definition**: Small count or status marker attached to an icon or entry.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General

### `overflow-menu` Overflow Menu
- **Chinese name**: 溢出菜单
- **Definition**: Stashes secondary actions behind a More menu.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: General

### `action-sheet` Action Sheet
- **Chinese name**: 操作列表
- **Definition**: Mobile bottom menu listing related or mutually exclusive actions.
- **Category**: 4. Disclosure, Overlays & Attention
  - Platforms: Mobile
  - Often confused with: `bottom-sheet`


## 5. Browsing, Scrolling & Loading More {#scrolling}

### `pagination` Pagination
- **Chinese name**: 分页
- **Definition**: Split a long list into fixed-size pages.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Web
  - Often confused with: `infinite-scroll`

### `infinite-scroll` Infinite Scroll
- **Chinese name**: 无限滚动
- **Definition**: Automatically load the next batch near the bottom.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Web/Mobile
  - Often confused with: `load-more`

### `load-more` Load More
- **Chinese name**: 加载更多
- **Definition**: User explicitly triggers loading the next batch.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: General
  - Often confused with: `infinite-scroll`

### `virtual-list` Virtual Scroll / Windowing
- **Chinese name**: 虚拟列表
- **Definition**: Render only near-viewport rows for very long lists.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Web/Desktop

### `pull-to-refresh` Pull to Refresh
- **Chinese name**: 下拉刷新
- **Definition**: Pull down at the top of a list to refetch data.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Mobile

### `scroll-snap` Scroll Snap
- **Chinese name**: 滚动吸附
- **Definition**: Align to predefined snap points after scrolling (e.g. full-screen pages).
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: General

### `sticky-header` Sticky Header
- **Chinese name**: 粘性头
- **Definition**: Keep a header or toolbar pinned to the viewport while scrolling.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: General

### `scrollspy` Scrollspy
- **Chinese name**: 滚动监听导航
- **Definition**: Highlight TOC items based on the section currently in view.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Web

### `carousel` Carousel / Horizontal Pager
- **Chinese name**: 轮播 / 横滑
- **Definition**: Horizontally page through cards or slides.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: General

### `parallax` Parallax Scroll
- **Chinese name**: 视差滚动
- **Definition**: Layers scroll at different rates to suggest depth.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: Web

### `scroll-restoration` Scroll Restoration
- **Chinese name**: 保留滚动位置
- **Definition**: Restore prior scroll position when returning to a list.
- **Category**: 5. Browsing, Scrolling & Loading More
  - Platforms: General


## 6. Search, Filter & Discovery {#search}

### `instant-search` Instant Search
- **Chinese name**: 即时搜索
- **Definition**: Results update nearly immediately as the user types.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General
  - Often confused with: `debounced-search`

### `debounced-search` Debounced Search
- **Chinese name**: 防抖搜索
- **Definition**: Wait until typing pauses before requesting, reducing load.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General
  - Often confused with: `instant-search`

### `autocomplete` Autocomplete
- **Chinese name**: 自动完成
- **Definition**: Suggest completions of words or phrases from typed input.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General
  - Often confused with: `combobox`

### `faceted-search` Faceted Search / Filters
- **Chinese name**: 分面筛选
- **Definition**: Cross-filter results by multiple attribute dimensions.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `sort-control` Sort Control
- **Chinese name**: 排序
- **Definition**: Change the ordering of a result set.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `range-filter` Range Filter
- **Chinese name**: 范围筛选
- **Definition**: Filter by a numeric or date interval.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `search-suggestions` Search Suggestions
- **Chinese name**: 搜索建议
- **Definition**: Show popular, corrected, or related query suggestions.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `recent-searches` Recent Searches
- **Chinese name**: 最近搜索
- **Definition**: Recall recent queries for quick reuse.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `empty-results` Empty Results Guidance
- **Chinese name**: 空结果引导
- **Definition**: When nothing matches, suggest rewrites or broader criteria.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: General

### `discovery-feed` Discovery Feed / For You
- **Chinese name**: 浏览式发现
- **Definition**: Browse a recommendation stream without an explicit query.
- **Category**: 6. Search, Filter & Discovery
  - Platforms: Mobile/Web


## 7. Selection, Bulk Actions & Data Manipulation {#selection}

### `single-select` Single Select
- **Chinese name**: 单选
- **Definition**: Only one item may be selected at a time.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `multi-select` Multi-select
- **Chinese name**: 多选
- **Definition**: Select multiple items for bulk operations.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `marquee-select` Marquee / Rubber-band Select
- **Chinese name**: 框选
- **Definition**: Drag a rectangle to select objects inside it.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Desktop

### `select-all` Select All
- **Chinese name**: 全选
- **Definition**: Select every item in the current scope in one action.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `bulk-action-bar` Bulk Action Bar
- **Chinese name**: 批量操作栏
- **Definition**: Toolbar of actions that appears for multiple selected items.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `drag-reorder` Drag-and-drop Reorder
- **Chinese name**: 拖拽排序
- **Definition**: Drag list items to change their order.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `kanban-dnd` Kanban Drag-and-drop
- **Chinese name**: 看板拖拽
- **Definition**: Drag cards across columns to change status or grouping.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Web/Desktop

### `table-sort` Table Column Sort
- **Chinese name**: 表格列排序
- **Definition**: Click a column header to sort by that column.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Web/Desktop

### `column-resize` Column Resize
- **Chinese name**: 列宽调整
- **Definition**: Drag a table column boundary to change width.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Desktop/Web

### `frozen-columns` Frozen / Sticky Columns
- **Chinese name**: 冻结列
- **Definition**: Keep key columns visible while scrolling horizontally.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Web/Desktop

### `master-detail` Master–Detail
- **Chinese name**: 主从明细
- **Definition**: Selecting in a master list shows details in a paired pane.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Desktop/Web

### `inline-edit` Inline Edit
- **Chinese name**: 内联编辑
- **Definition**: Edit directly in a list or table cell without a separate form page.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General

### `show-more` Show More / Truncation Expand
- **Chinese name**: 展示更多 / 截断展开
- **Definition**: Truncate long content and expand on demand.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General
  - Often confused with: `accordion`

### `split-pane` Resizable Split Pane
- **Chinese name**: 可调整分栏
- **Definition**: Drag a splitter to resize adjacent panes.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: Desktop/Web

### `accordion` Accordion / Collapse
- **Chinese name**: 手风琴 / 折叠面板
- **Definition**: Expandable/collapsible sections, often one open at a time.
- **Category**: 7. Selection, Bulk Actions & Data Manipulation
  - Platforms: General
  - Often confused with: `show-more`


## 8. Forms, Validation & Submission {#forms}

### `multi-step-form` Multi-step Form
- **Chinese name**: 分步表单
- **Definition**: Split a long form into steps to reduce cognitive load.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General
  - Often confused with: `wizard`

### `inline-validation` Inline Validation
- **Chinese name**: 内联校验
- **Definition**: Show field errors on blur or while typing.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General
  - Often confused with: `submit-validation`

### `submit-validation` Validate on Submit
- **Chinese name**: 提交时校验
- **Definition**: Validate only on submit and summarize errors.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General
  - Often confused with: `inline-validation`

### `disabled-submit` Disabled Submit Strategy
- **Chinese name**: 禁用提交策略
- **Definition**: Disable submit until the form is valid (trade-off with discoverability).
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General

### `autosave` Autosave
- **Chinese name**: 自动保存
- **Definition**: Quietly save on an interval or on change to reduce data loss.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General
  - Often confused with: `draft`

### `draft` Draft
- **Chinese name**: 草稿
- **Definition**: Explicitly save unfinished work to resume later.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General
  - Often confused with: `autosave`

### `confirm-submit` Confirm before Submit
- **Chinese name**: 确认提交
- **Definition**: Reconfirm impactful consequences before submitting.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General

### `prevent-double-submit` Prevent Double Submit
- **Chinese name**: 防重复提交
- **Definition**: Lock the button or use tokens while submitting to avoid duplicate requests.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General

### `captcha` CAPTCHA / Bot Check
- **Chinese name**: 验证码 / 人机验证
- **Definition**: Verify the actor is human or a trusted client.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: Web

### `step-up-auth` Step-up Authentication
- **Chinese name**: 二次验证
- **Definition**: Require extra auth (OTP, biometrics) before sensitive actions.
- **Category**: 8. Forms, Validation & Submission
  - Platforms: General


## 9. System Status & Feedback {#feedback}

### `spinner` Spinner / Activity Indicator
- **Chinese name**: 加载转圈
- **Definition**: Indicates busy state of indeterminate duration.
- **Category**: 9. System Status & Feedback
  - Platforms: General
  - Often confused with: `skeleton`

### `skeleton` Skeleton Screen
- **Chinese name**: 骨架屏
- **Definition**: Placeholder outlines reduce layout jump while loading.
- **Category**: 9. System Status & Feedback
  - Platforms: General
  - Often confused with: `spinner`

### `progress-determinate` Determinate Progress
- **Chinese name**: 确定进度
- **Definition**: Progress bar showing an estimable completion ratio.
- **Category**: 9. System Status & Feedback
  - Platforms: General
  - Often confused with: `progress-indeterminate`

### `progress-indeterminate` Indeterminate Progress
- **Chinese name**: 不确定进度
- **Definition**: Shows activity without a percentage.
- **Category**: 9. System Status & Feedback
  - Platforms: General
  - Often confused with: `progress-determinate`

### `optimistic-ui` Optimistic UI
- **Chinese name**: 乐观更新
- **Definition**: Update UI first, confirm with server later; roll back on failure.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `empty-state` Empty State
- **Chinese name**: 空状态
- **Definition**: Explain why there is no data and offer a next action.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `error-state` Error State
- **Chinese name**: 错误态
- **Definition**: Show failure reason and recovery actions.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `success-feedback` Success Feedback
- **Chinese name**: 成功反馈
- **Definition**: Clearly confirm that an action completed successfully.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `undo-redo` Undo / Redo
- **Chinese name**: 撤销 / 重做
- **Definition**: Revert or reapply recent edit operations.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `retry` Retry
- **Chinese name**: 重试
- **Definition**: Offer a way to re-issue a failed request.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `offline-banner` Offline Indicator
- **Chinese name**: 离线提示
- **Definition**: Inform the user when offline and limit or queue actions.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `syncing` Syncing Indicator
- **Chinese name**: 同步中
- **Definition**: Indicates local and remote data are syncing.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `disabled-visible` Visible Disabled State
- **Chinese name**: 禁用态可见性
- **Definition**: Control is unavailable but visible, ideally with a reason.
- **Category**: 9. System Status & Feedback
  - Platforms: General

### `readonly-state` Read-only State
- **Chinese name**: 只读态
- **Definition**: Field is viewable but not editable.
- **Category**: 9. System Status & Feedback
  - Platforms: General
  - Often confused with: `disabled-visible`


## 10. Motion & Transitions {#motion}

### `page-transition` Page Transition
- **Chinese name**: 页面过渡
- **Definition**: Enter/exit animation on route change to support spatial mental model.
- **Category**: 10. Motion & Transitions
  - Platforms: General

### `shared-element` Shared Element Transition
- **Chinese name**: 共享元素过渡
- **Definition**: Continuously morph the same element across two screens.
- **Category**: 10. Motion & Transitions
  - Platforms: Mobile/Web

### `crossfade` Crossfade
- **Chinese name**: 交叉淡入
- **Definition**: Old content fades out while new content fades in.
- **Category**: 10. Motion & Transitions
  - Platforms: General

### `stagger` Staggered Entrance
- **Chinese name**: 错落入场
- **Definition**: List items appear with sequential delay to guide attention.
- **Category**: 10. Motion & Transitions
  - Platforms: General

### `microinteraction` Microinteraction
- **Chinese name**: 微交互
- **Definition**: Polished feedback for small actions (like, ripple, springy switch).
- **Category**: 10. Motion & Transitions
  - Platforms: General

### `reduced-motion` Prefers-reduced-motion
- **Chinese name**: 减少动效偏好
- **Definition**: Honor OS reduced-motion settings with subtler or instant changes.
- **Category**: 10. Motion & Transitions
  - Platforms: General

### `view-transitions` View Transitions API Pattern
- **Chinese name**: View Transitions
- **Definition**: Use the browser View Transitions API for document-level transitions.
- **Category**: 10. Motion & Transitions
  - Platforms: Web


## 11. Media & Data Visualization {#media}

### `image-pinch-lightbox` Image Pinch / Lightbox Zoom
- **Chinese name**: 图片捏合 / 灯箱
- **Definition**: Zoom into image details.
- **Category**: 11. Media & Data Visualization
  - Platforms: General

### `before-after-slider` Before/After Slider
- **Chinese name**: 前后对比滑杆
- **Definition**: Drag a divider to compare two images.
- **Category**: 11. Media & Data Visualization
  - Platforms: Web

### `hotspot` Hotspot
- **Chinese name**: 热区
- **Definition**: Clickable annotated points on an image or scene.
- **Category**: 11. Media & Data Visualization
  - Platforms: General

### `video-scrub` Video Scrubbing
- **Chinese name**: 视频 scrub
- **Definition**: Drag the timeline to preview frames quickly.
- **Category**: 11. Media & Data Visualization
  - Platforms: General

### `map-pan-zoom` Map Pan / Zoom / Markers
- **Chinese name**: 地图平移缩放
- **Definition**: Pan and zoom a map and interact with markers.
- **Category**: 11. Media & Data Visualization
  - Platforms: General

### `chart-brush` Chart Brush / Zoom
- **Chinese name**: 图表刷选
- **Definition**: Drag a range on a chart to zoom or filter.
- **Category**: 11. Media & Data Visualization
  - Platforms: Web/Desktop

### `chart-tooltip` Chart Tooltip
- **Chinese name**: 图表 Tooltip
- **Definition**: Hover or tap a data point to show precise values.
- **Category**: 11. Media & Data Visualization
  - Platforms: General

### `sparkline-drilldown` Sparkline Drill-down
- **Chinese name**: 迷你图下钻
- **Definition**: Click a sparkline to open a detailed view.
- **Category**: 11. Media & Data Visualization
  - Platforms: Web


## 12. Collaboration, Realtime & Social {#collab}

### `typing-indicator` Typing Indicator
- **Chinese name**: 输入中指示
- **Definition**: Shows that the other party is typing.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General

### `presence` Presence
- **Chinese name**: 在线状态
- **Definition**: Shows online, away, busy, or similar user status.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General

### `collaborative-cursors` Collaborative Cursors
- **Chinese name**: 协同光标
- **Definition**: Live display of other collaborators' cursors and selections.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: Web/Desktop

### `anchored-comment` Anchored Comment
- **Chinese name**: 评论锚点
- **Definition**: Comments bound to a specific place in a doc or design.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General

### `mention` Mention (@)
- **Chinese name**: @提及
- **Definition**: Use @ to notify and link a user or entity.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General

### `like-save-share` Like / Save / Share
- **Chinese name**: 点赞 / 收藏 / 分享
- **Definition**: Lightweight social feedback and distribution actions.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General

### `conflict-merge-ui` Conflict Merge UI
- **Chinese name**: 冲突合并 UI
- **Definition**: Surface and help resolve concurrent edit conflicts.
- **Category**: 12. Collaboration, Realtime & Social
  - Platforms: General


## 13. AI & Intelligent Assistance {#ai}

### `ghost-text` Ghost Text Completion
- **Chinese name**: 幽灵文本补全
- **Definition**: Faint suggested text the user can accept (e.g. with Tab).
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: Desktop/Web

### `streaming-output` Streaming Output
- **Chinese name**: 流式输出
- **Definition**: Model response appears token-by-token to reduce perceived wait.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General

### `stop-generation` Stop Generation
- **Chinese name**: 停止生成
- **Definition**: User interrupts an in-progress streaming generation.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General

### `suggestion-chips` Suggestion Chips
- **Chinese name**: 建议芯片
- **Definition**: Tappable recommended follow-ups or shortcut prompts.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General

### `tool-call-confirm` Tool Call Confirmation
- **Chinese name**: 工具调用确认
- **Definition**: Ask the user to confirm before an agent calls an external tool.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General
  - Often confused with: `human-approval`

### `human-approval` Human-in-the-loop Approval
- **Chinese name**: 人机审批
- **Definition**: Critical side-effect steps require human approval to proceed.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General
  - Often confused with: `tool-call-confirm`

### `citation-expand` Citation / Source Expand
- **Chinese name**: 引用溯源展开
- **Definition**: Expand source snippets that ground the answer.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General

### `prompt-edit-retry` Edit Prompt & Retry
- **Chinese name**: 提示词编辑重试
- **Definition**: Edit the last prompt and regenerate.
- **Category**: 13. AI & Intelligent Assistance
  - Platforms: General


## 14. Accessibility & Inclusive Interaction {#a11y}

### `focus-trap` Focus Trap
- **Chinese name**: 焦点陷阱
- **Definition**: While a modal is open, keep Tab cycling inside the dialog.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: Web/Desktop

### `skip-link` Skip Link
- **Chinese name**: 跳过链接
- **Definition**: Let keyboard users skip repeated nav to main content.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: Web

### `live-region` ARIA Live Region
- **Chinese name**: 活区播报
- **Definition**: Dynamic updates announced automatically by screen readers.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: Web

### `keyboard-equivalent` Keyboard Equivalent
- **Chinese name**: 键盘等价操作
- **Definition**: Everything doable with a pointer has a keyboard path.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: Desktop/Web

### `touch-target-size` Touch Target Size
- **Chinese name**: 触控目标尺寸
- **Definition**: Ensure hit areas and spacing are large enough to reduce mistaps.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: Mobile

### `high-contrast` High Contrast Support
- **Chinese name**: 高对比
- **Definition**: Remain usable under high-contrast or forced-colors modes.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: General

### `rtl-gestures` RTL Mirrored Gestures
- **Chinese name**: RTL 镜像手势
- **Definition**: Mirror directional gestures in right-to-left layouts.
- **Category**: 14. Accessibility & Inclusive Interaction
  - Platforms: General


## 15. Cross-platform & System-level {#crossplatform}

### `window-chrome` Window Chrome
- **Chinese name**: 窗口与标题栏
- **Definition**: Desktop window minimize/maximize/close and drag regions.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Desktop

### `menu-bar` Menu Bar
- **Chinese name**: 菜单栏
- **Definition**: Hierarchical command menus at the top of a desktop app.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Desktop

### `dock-taskbar` Dock / Taskbar
- **Chinese name**: Dock / 任务栏
- **Definition**: System area for pinned apps and switching.
- **Category**: 15. Cross-platform & System-level
  - Platforms: System

### `multi-window` Multi-window
- **Chinese name**: 多窗口
- **Definition**: Same app opens multiple independent windows.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Desktop

### `drag-out-file` Drag Out to Filesystem
- **Chinese name**: 拖出文件
- **Definition**: Drag from the app to the desktop or a folder to export a file.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Desktop

### `share-sheet` System Share Sheet
- **Chinese name**: 系统分享表
- **Definition**: Invoke the OS share sheet to send content to other apps.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Mobile

### `permission-prompt` Permission Prompt
- **Chinese name**: 权限请求
- **Definition**: OS dialog requesting camera, notifications, or other sensitive permissions.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Mobile/Desktop

### `biometric-prompt` Biometric Prompt
- **Chinese name**: 生物识别提示
- **Definition**: Fingerprint/face local authentication UI.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Mobile/Desktop

### `home-widget` Home Screen Widget
- **Chinese name**: 桌面小组件
- **Definition**: Lightweight info and actions on the home screen.
- **Category**: 15. Cross-platform & System-level
  - Platforms: Mobile

### `notification-actions` Notification Actions
- **Chinese name**: 通知操作
- **Definition**: Act on a notification inline (reply, complete, etc.).
- **Category**: 15. Cross-platform & System-level
  - Platforms: System

### `responsive-pattern-shift` Responsive Pattern Shift
- **Chinese name**: 响应式模式降级
- **Definition**: On narrow screens, shift patterns (e.g. modal → full-screen sheet).
- **Category**: 15. Cross-platform & System-level
  - Platforms: General


---

*Interactpedia content baseline*
