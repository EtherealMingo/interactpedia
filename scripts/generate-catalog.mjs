/**
 * Generates aligned bilingual UI interaction catalog markdown files.
 * Run: node scripts/generate-catalog.mjs
 */

const categories = [
  { id: "primitives", zh: "1. 输入原语", en: "1. Input Primitives" },
  { id: "controls", zh: "2. 基础控件与其标准交互", en: "2. Basic Controls & Standard Interactions" },
  { id: "navigation", zh: "3. 导航与寻路", en: "3. Navigation & Wayfinding" },
  { id: "overlays", zh: "4. 揭示、叠加与注意力", en: "4. Disclosure, Overlays & Attention" },
  { id: "scrolling", zh: "5. 浏览、滚动与加载更多", en: "5. Browsing, Scrolling & Loading More" },
  { id: "search", zh: "6. 搜索、筛选与发现", en: "6. Search, Filter & Discovery" },
  { id: "selection", zh: "7. 选择、批量与数据操控", en: "7. Selection, Bulk Actions & Data Manipulation" },
  { id: "forms", zh: "8. 表单、校验与提交流程", en: "8. Forms, Validation & Submission" },
  { id: "feedback", zh: "9. 系统状态与反馈", en: "9. System Status & Feedback" },
  { id: "motion", zh: "10. 动效与过渡", en: "10. Motion & Transitions" },
  { id: "media", zh: "11. 媒体与数据可视化交互", en: "11. Media & Data Visualization" },
  { id: "collab", zh: "12. 协作、实时与社交", en: "12. Collaboration, Realtime & Social" },
  { id: "ai", zh: "13. AI / 智能辅助交互", en: "13. AI & Intelligent Assistance" },
  { id: "a11y", zh: "14. 无障碍与包容性交互", en: "14. Accessibility & Inclusive Interaction" },
  { id: "crossplatform", zh: "15. 跨端与系统级", en: "15. Cross-platform & System-level" },
];

/** @type {Array<{id:string,cat:string,zh:string,en:string,aliases?:string[],defZh:string,defEn:string,confuse?:string,platform?:string}>} */
const entries = [
  // —— 1. primitives ——
  { id: "click", cat: "primitives", zh: "点击", en: "Click / Tap", defZh: "用指针或手指按下并松开以激活目标。", defEn: "Press and release a pointer or finger to activate a target.", platform: "通用" },
  { id: "double-click", cat: "primitives", zh: "双击", en: "Double-click / Double-tap", defZh: "短时间内连续两次点击，常用于打开或进入编辑。", defEn: "Two rapid clicks/taps, often to open or enter edit mode.", confuse: "long-press", platform: "通用" },
  { id: "long-press", cat: "primitives", zh: "长按", en: "Long Press / Press and Hold", defZh: "按住超过阈值阈值以呼出菜单或进入选择模式。", defEn: "Hold beyond a threshold to open a menu or enter selection mode.", confuse: "double-click", platform: "移动/触控" },
  { id: "right-click", cat: "primitives", zh: "右键 / 呼出菜单", en: "Right-click / Context Menu Gesture", defZh: "次要指针键或等效手势打开上下文菜单。", defEn: "Secondary pointer button or equivalent gesture opens a context menu.", platform: "桌面/Web" },
  { id: "hover", cat: "primitives", zh: "悬停", en: "Hover / Mouseover", defZh: "指针停留在目标上触发预览、高亮或工具提示（触控端通常无此态）。", defEn: "Pointer rests on a target to reveal preview, highlight, or tooltip (often absent on touch).", platform: "桌面/Web" },
  { id: "focus", cat: "primitives", zh: "聚焦", en: "Focus", defZh: "键盘或辅助技术将输入焦点移到可交互元素上。", defEn: "Keyboard or AT moves input focus onto an interactive element.", platform: "通用" },
  { id: "drag", cat: "primitives", zh: "拖拽", en: "Drag", defZh: "按下后移动指针/手指以移动对象或划定区域。", defEn: "Press and move to relocate an object or define a region.", platform: "通用" },
  { id: "drop", cat: "primitives", zh: "投放", en: "Drop", defZh: "在拖拽结束时将对象释放到目标区域。", defEn: "Release a dragged object onto a drop target.", confuse: "drag", platform: "通用" },
  { id: "scroll-pan", cat: "primitives", zh: "滚动 / 平移", en: "Scroll / Pan", defZh: "移动视口以查看超出可见区域的内容。", defEn: "Move the viewport to reveal content beyond the visible area.", platform: "通用" },
  { id: "swipe", cat: "primitives", zh: "轻扫", en: "Swipe", defZh: "快速单向滑动，常用于切换、删除或返回。", defEn: "A quick directional slide, often to switch, delete, or go back.", confuse: "fling", platform: "移动" },
  { id: "fling", cat: "primitives", zh: "抛甩", en: "Fling", defZh: "带惯性的快速滑动，内容在松手后继续滑动。", defEn: "A fast swipe with inertia so content keeps moving after release.", confuse: "swipe", platform: "移动" },
  { id: "pinch-zoom", cat: "primitives", zh: "捏合缩放", en: "Pinch to Zoom", defZh: "双指开合改变内容缩放级别。", defEn: "Two-finger spread/pinch changes zoom level.", platform: "触控" },
  { id: "rotate-gesture", cat: "primitives", zh: "双指旋转", en: "Two-finger Rotate", defZh: "双指相对旋转以旋转对象或视图。", defEn: "Two fingers rotate relative to each other to rotate an object or view.", platform: "触控" },
  { id: "multi-touch", cat: "primitives", zh: "多指手势", en: "Multi-touch Gesture", defZh: "同时使用两根以上手指完成特定系统或应用手势。", defEn: "Two or more fingers used together for a system or app gesture.", platform: "触控" },
  { id: "force-touch", cat: "primitives", zh: "力触控", en: "Force Touch / 3D Touch", defZh: "按压力度分级触发 Peek/Pop 等快捷预览（平台依赖）。", defEn: "Pressure-sensitive press for Peek/Pop-style previews (platform-dependent).", platform: "部分设备" },
  { id: "stylus", cat: "primitives", zh: "触控笔交互", en: "Stylus / Pen Input", defZh: "用数位笔书写、点选、压感与侧键操作。", defEn: "Pen input for writing, tapping, pressure, and barrel-button actions.", platform: "平板/桌面" },
  { id: "keyboard-typing", cat: "primitives", zh: "键盘键入", en: "Keyboard Typing", defZh: "通过物理或屏幕键盘输入文本。", defEn: "Enter text via physical or on-screen keyboard.", platform: "通用" },
  { id: "keyboard-shortcut", cat: "primitives", zh: "键盘快捷键", en: "Keyboard Shortcut", defZh: "组合键直接触发命令，提升效率用户操作速度。", defEn: "Key combinations that invoke commands for power users.", platform: "桌面/Web" },
  { id: "arrow-key-nav", cat: "primitives", zh: "方向键浏览", en: "Arrow-key Navigation", defZh: "用方向键在列表、网格、菜单或画布中移动焦点。", defEn: "Move focus across lists, grids, menus, or canvas with arrow keys.", platform: "桌面/Web" },
  { id: "space-activate", cat: "primitives", zh: "空格激活", en: "Space to Activate", defZh: "焦点在控件上时用空格（或 Enter）激活，符合键盘操作惯例。", defEn: "Activate a focused control with Space (or Enter), per keyboard conventions.", platform: "桌面/Web" },
  { id: "ime-composition", cat: "primitives", zh: "IME 组合输入", en: "IME Composition", defZh: "中日韩等输入法在确认前处于组合态，需特殊处理校验与搜索。", defEn: "CJK IMEs stay in composition before commit; validation/search must handle this.", platform: "通用" },
  { id: "voice-input", cat: "primitives", zh: "语音输入", en: "Voice Input", defZh: "通过语音转写填充字段或触发命令。", defEn: "Speech-to-text fills fields or triggers commands.", platform: "通用" },
  { id: "gamepad", cat: "primitives", zh: "手柄 / 遥控", en: "Gamepad / Remote Control", defZh: "用游戏手柄或电视遥控进行焦点移动与确认。", defEn: "Navigate and confirm with a gamepad or TV remote.", platform: "TV/游戏" },
  { id: "eye-tracking", cat: "primitives", zh: "眼球追踪", en: "Eye Tracking", defZh: "用视线移动指针或选择目标（辅助或专用设备）。", defEn: "Gaze moves a pointer or selects targets (AT or specialized devices).", platform: "专用" },
  { id: "camera-gesture", cat: "primitives", zh: "相机手势", en: "Camera / Mid-air Gesture", defZh: "摄像头识别挥手等空中手势以控制系统（部分设备）。", defEn: "Camera-recognized mid-air gestures control the system (some devices).", platform: "专用" },

  // —— 2. controls ——
  { id: "button", cat: "controls", zh: "按钮", en: "Button", defZh: "单击触发一个动作的基础控件。", defEn: "A control that triggers an action on activation.", platform: "通用" },
  { id: "split-button", cat: "controls", zh: "分裂按钮", en: "Split Button", defZh: "主操作与下拉次要选项组合在同一控件。", defEn: "Primary action plus a dropdown of secondary options in one control.", confuse: "button", platform: "桌面/Web" },
  { id: "fab", cat: "controls", zh: "浮动操作按钮", en: "Floating Action Button (FAB)", aliases: ["FAB"], defZh: "悬浮在内容之上的主操作入口，常见于移动端。", defEn: "A primary action floating above content, common on mobile.", platform: "移动" },
  { id: "icon-button", cat: "controls", zh: "图标按钮", en: "Icon Button", defZh: "仅用图标表达动作，需有无障碍名称。", defEn: "Action expressed only by an icon; needs an accessible name.", platform: "通用" },
  { id: "link", cat: "controls", zh: "链接", en: "Link / Hyperlink", defZh: "导航到另一资源或页面位置，语义上不同于按钮。", defEn: "Navigates to another resource or in-page location; not a button semantically.", confuse: "button", platform: "Web" },
  { id: "text-field", cat: "controls", zh: "文本框", en: "Text Field / Textbox", defZh: "单行文本输入控件。", defEn: "Single-line text input control.", platform: "通用" },
  { id: "password-field", cat: "controls", zh: "密码框", en: "Password Field", defZh: "掩码显示的敏感文本输入，常带显示/隐藏切换。", defEn: "Masked sensitive text input, often with show/hide toggle.", platform: "通用" },
  { id: "otp-input", cat: "controls", zh: "验证码分位输入", en: "OTP / PIN Input", defZh: "多格一位一格的验证码输入，支持自动填充与焦点跳转。", defEn: "Multi-cell one-digit OTP/PIN entry with autofill and focus advance.", platform: "通用" },
  { id: "search-field", cat: "controls", zh: "搜索框", en: "Search Field", defZh: "专用于查询的输入框，常带清除与提交图标。", defEn: "Input dedicated to queries, often with clear and submit affordances.", platform: "通用" },
  { id: "textarea", cat: "controls", zh: "多行输入", en: "Textarea / Multiline Input", defZh: "可换行的较长文本输入区域。", defEn: "Multi-line text entry area.", platform: "通用" },
  { id: "checkbox", cat: "controls", zh: "复选框", en: "Checkbox", defZh: "独立开关某选项，可多选；可有不确定态。", defEn: "Toggle an option independently; supports multi-select and indeterminate.", confuse: "toggle", platform: "通用" },
  { id: "radio", cat: "controls", zh: "单选按钮", en: "Radio Button", defZh: "互斥选项组中只能选一项。", defEn: "Exactly one choice within a mutually exclusive group.", confuse: "segmented-control", platform: "通用" },
  { id: "toggle", cat: "controls", zh: "开关", en: "Toggle / Switch", aliases: ["Switch"], defZh: "立即生效的开/关状态控件，适合设置项。", defEn: "Immediate on/off control, suited to settings.", confuse: "checkbox", platform: "通用" },
  { id: "slider", cat: "controls", zh: "滑块", en: "Slider / Range", defZh: "在连续或离散范围内拖动选择数值。", defEn: "Drag to pick a value in a continuous or discrete range.", platform: "通用" },
  { id: "stepper", cat: "controls", zh: "步进器", en: "Input Stepper", defZh: "用增减按钮以固定步长调整数值。", defEn: "Increment/decrement a value by a fixed step.", confuse: "slider", platform: "通用" },
  { id: "select", cat: "controls", zh: "下拉选择", en: "Select / Dropdown List", defZh: "从预置列表中选择一项（或多项）。", defEn: "Choose one (or more) options from a predefined list.", confuse: "combobox", platform: "通用" },
  { id: "listbox", cat: "controls", zh: "列表框", en: "Listbox", defZh: "常显列表中选择一项或多项，可不折叠。", defEn: "Select one or more items from an often persistently visible list.", platform: "桌面/Web" },
  { id: "combobox", cat: "controls", zh: "组合框", en: "Combobox", defZh: "可输入又可从列表选择的混合控件。", defEn: "Hybrid control: type freely and/or pick from a list.", confuse: "select", platform: "通用" },
  { id: "segmented-control", cat: "controls", zh: "分段控件", en: "Segmented Control / Segmented Button", defZh: "一组互斥分段，用于视图或模式切换。", defEn: "Mutually exclusive segments for view or mode switching.", confuse: "tabs", platform: "通用" },
  { id: "date-picker", cat: "controls", zh: "日期选择器", en: "Date Picker", defZh: "通过日历或滚轮选择日期。", defEn: "Pick a date via calendar or wheels.", platform: "通用" },
  { id: "time-picker", cat: "controls", zh: "时间选择器", en: "Time Picker", defZh: "选择时分秒或时段。", defEn: "Pick hours, minutes, seconds, or a time period.", platform: "通用" },
  { id: "color-picker", cat: "controls", zh: "颜色选择器", en: "Color Picker", defZh: "通过色板、光谱或输入值选择颜色。", defEn: "Choose a color via swatches, spectrum, or numeric input.", platform: "通用" },
  { id: "file-picker", cat: "controls", zh: "文件选择", en: "File Picker", defZh: "通过系统对话框选择本地文件。", defEn: "Select local files via a system dialog.", confuse: "drag-drop-upload", platform: "通用" },
  { id: "drag-drop-upload", cat: "controls", zh: "拖放上传", en: "Drag-and-drop Upload", defZh: "将文件拖入放置区以上传。", defEn: "Drop files onto a dropzone to upload.", confuse: "file-picker", platform: "桌面/Web" },
  { id: "chip-input", cat: "controls", zh: "标签 / 芯片输入", en: "Chip / Tag Input", defZh: "将多项以芯片形式加入可编辑字段（如收件人）。", defEn: "Add multiple values as chips in an editable field (e.g. recipients).", platform: "通用" },
  { id: "rating", cat: "controls", zh: "评分", en: "Rating Control", defZh: "用星级等离散等级评价。", defEn: "Rate with discrete levels such as stars.", platform: "通用" },
  { id: "knob", cat: "controls", zh: "旋钮", en: "Knob / Virtual Knob", defZh: "旋转式连续控制，常见于音频等专业界面。", defEn: "Rotary continuous control, common in audio UIs.", confuse: "slider", platform: "专用" },
  { id: "wheel-picker", cat: "controls", zh: "滚轮选择器", en: "Wheel Picker", defZh: "滚动圆柱列表选择值，常见于移动端日期时间。", defEn: "Scroll a cylindrical list to pick a value; common for mobile date/time.", platform: "移动" },

  // —— 3. navigation ——
  { id: "top-nav", cat: "navigation", zh: "顶部导航栏", en: "Top Navigation Bar", defZh: "页面顶部的主导航或工具栏区域。", defEn: "Primary navigation or toolbar region at the top of a page.", platform: "通用" },
  { id: "bottom-nav", cat: "navigation", zh: "底部导航栏", en: "Bottom Navigation / Tab Bar", defZh: "移动端底部固定的主要目的地切换。", defEn: "Fixed bottom destinations for primary mobile sections.", confuse: "tabs", platform: "移动" },
  { id: "sidebar", cat: "navigation", zh: "侧边栏", en: "Sidebar", defZh: "侧向常驻或可折叠的导航与工具区。", defEn: "Side region for navigation and tools, persistent or collapsible.", platform: "桌面/Web" },
  { id: "nav-rail", cat: "navigation", zh: "导航轨", en: "Navigation Rail", defZh: "窄竖条图标导航，介于底栏与侧栏之间。", defEn: "Narrow vertical icon navigation between bottom bar and sidebar.", platform: "平板/桌面" },
  { id: "hamburger-menu", cat: "navigation", zh: "汉堡菜单", en: "Hamburger Menu", defZh: "折叠导航入口，点击展开抽屉或菜单。", defEn: "Collapsed nav entry that opens a drawer or menu.", platform: "移动/Web" },
  { id: "mega-menu", cat: "navigation", zh: "巨型菜单", en: "Mega Menu", defZh: "大面积多列展示的站点级导航面板。", defEn: "Large multi-column site-level navigation panel.", platform: "Web" },
  { id: "tabs", cat: "navigation", zh: "标签页", en: "Tabs", defZh: "同一视图内切换相关面板，通常保留上下文。", defEn: "Switch related panels in place, usually keeping context.", confuse: "segmented-control", platform: "通用" },
  { id: "breadcrumb", cat: "navigation", zh: "面包屑", en: "Breadcrumb", defZh: "显示当前位置的层级路径并支持回退。", defEn: "Shows hierarchical path to the current location with back links.", platform: "Web/桌面" },
  { id: "anchor-link", cat: "navigation", zh: "锚点 / 页内跳转", en: "Anchor Link / Jump Link", defZh: "跳转到同一页面内的目标区块。", defEn: "Jump to a target section within the same page.", platform: "Web" },
  { id: "back-to-top", cat: "navigation", zh: "返回顶部", en: "Back to Top", defZh: "长页快速滚回页首的快捷控件。", defEn: "Shortcut control to scroll a long page back to the top.", platform: "Web/移动" },
  { id: "wizard", cat: "navigation", zh: "步进向导", en: "Wizard / Stepper Flow", defZh: "将复杂任务拆成有序步骤引导完成。", defEn: "Break a complex task into ordered guided steps.", confuse: "tabs", platform: "通用" },
  { id: "tree-nav", cat: "navigation", zh: "树形导航", en: "Tree Navigation", defZh: "可展开的层级节点导航，常见于文件与设置。", defEn: "Expandable hierarchical node navigation for files and settings.", platform: "桌面/Web" },
  { id: "pagination-nav", cat: "navigation", zh: "分页导航", en: "Pagination Navigation", defZh: "通过页码或上一页/下一页在结果集间移动。", defEn: "Move through a result set via page numbers or prev/next.", confuse: "infinite-scroll", platform: "Web" },
  { id: "history-back-forward", cat: "navigation", zh: "历史前进 / 后退", en: "History Back / Forward", defZh: "沿浏览器或应用导航历史移动。", defEn: "Move along browser or in-app navigation history.", platform: "通用" },
  { id: "deep-link", cat: "navigation", zh: "深链与 URL 状态", en: "Deep Link / URL State", defZh: "用 URL 表达可分享的应用状态与入口。", defEn: "Encode shareable app state and entry points in the URL.", platform: "Web/移动" },
  { id: "app-switcher", cat: "navigation", zh: "应用切换器", en: "App Switcher", defZh: "系统级在近期应用或窗口间切换。", defEn: "System-level switching among recent apps or windows.", platform: "系统" },

  // —— 4. overlays ——
  { id: "modal", cat: "overlays", zh: "模态对话框", en: "Modal Dialog", defZh: "阻断背景交互、要求用户先处理的对话框。", defEn: "Blocks background interaction until the user addresses it.", confuse: "non-modal", platform: "通用" },
  { id: "non-modal", cat: "overlays", zh: "非模态面板", en: "Non-modal Overlay / Panel", defZh: "浮层出现时仍可与背景交互。", defEn: "Overlay that still allows interacting with the background.", confuse: "modal", platform: "通用" },
  { id: "confirm-dialog", cat: "overlays", zh: "确认对话框", en: "Confirm Dialog", defZh: "在破坏性或重要操作前要求明确确认。", defEn: "Requires explicit confirmation before a destructive or important action.", confuse: "alert-dialog", platform: "通用" },
  { id: "alert-dialog", cat: "overlays", zh: "警告对话框", en: "Alert Dialog", defZh: "传达必须知悉的信息，通常只有确认。", defEn: "Communicates must-know information, often with a single acknowledge action.", confuse: "confirm-dialog", platform: "通用" },
  { id: "drawer", cat: "overlays", zh: "抽屉", en: "Drawer / Side Sheet", defZh: "从屏幕边缘滑出的面板，承载导航或详情。", defEn: "Panel sliding from a screen edge for nav or details.", confuse: "bottom-sheet", platform: "通用" },
  { id: "bottom-sheet", cat: "overlays", zh: "底部动作条 / Sheet", en: "Bottom Sheet", defZh: "从底部升起的面板，适合移动端操作与详情。", defEn: "Panel rising from the bottom for mobile actions and details.", confuse: "drawer", platform: "移动" },
  { id: "popover", cat: "overlays", zh: "弹出层", en: "Popover", defZh: "锚定在触发元素旁的轻量浮层内容。", defEn: "Lightweight floating content anchored to a trigger.", confuse: "tooltip", platform: "通用" },
  { id: "tooltip", cat: "overlays", zh: "工具提示", en: "Tooltip", defZh: "悬停或聚焦时显示的简短说明，通常不可承载复杂交互。", defEn: "Brief hint on hover/focus; usually not for complex interaction.", confuse: "popover", platform: "桌面/Web" },
  { id: "toast", cat: "overlays", zh: "吐司提示", en: "Toast", aliases: ["Snackbar"], defZh: "短暂出现的轻量反馈，可带或不带操作（跨平台命名不一）。", defEn: "Brief lightweight feedback, with or without an action (naming varies by platform).", confuse: "banner", platform: "通用" },
  { id: "snackbar", cat: "overlays", zh: "Snackbar", en: "Snackbar", defZh: "Material 风格的短暂反馈条，常可带 Undo 等操作。", defEn: "Material-style brief feedback bar, often with an action like Undo.", confuse: "toast", platform: "Android/Web" },
  { id: "banner", cat: "overlays", zh: "横幅提示", en: "Banner", defZh: "页面内较持久的状态或公告条，需用户留意或操作。", defEn: "In-page persistent status or announcement bar requiring attention.", confuse: "toast", platform: "通用" },
  { id: "lightbox", cat: "overlays", zh: "灯箱", en: "Lightbox", defZh: "在暗色遮罩上放大展示媒体内容。", defEn: "Enlarged media on a dimmed overlay.", platform: "Web" },
  { id: "command-palette", cat: "overlays", zh: "命令面板", en: "Command Palette", defZh: "可搜索的命令启动器（常由 ⌘K 打开）。", defEn: "Searchable command launcher (often opened with ⌘K).", platform: "桌面/Web" },
  { id: "coach-mark", cat: "overlays", zh: "引导蒙层", en: "Coach Mark / Instructional Overlay", defZh: "高亮界面元素并附带首次使用说明。", defEn: "Highlights UI elements with first-run instructional copy.", confuse: "spotlight", platform: "通用" },
  { id: "spotlight", cat: "overlays", zh: "聚光引导", en: "Spotlight Tour", defZh: "分步遮罩聚焦单一控件的产品导览。", defEn: "Step-by-step masked tour focusing one control at a time.", confuse: "coach-mark", platform: "通用" },
  { id: "badge", cat: "overlays", zh: "角标", en: "Badge", defZh: "附着在图标或入口上的数量/状态小标记。", defEn: "Small count or status marker attached to an icon or entry.", platform: "通用" },
  { id: "overflow-menu", cat: "overlays", zh: "溢出菜单", en: "Overflow Menu", defZh: "将次要操作收纳到「更多」菜单中。", defEn: "Stashes secondary actions behind a More menu.", platform: "通用" },
  { id: "action-sheet", cat: "overlays", zh: "操作列表", en: "Action Sheet", defZh: "移动端列出一组互斥或相关操作的底部菜单。", defEn: "Mobile bottom menu listing related or mutually exclusive actions.", confuse: "bottom-sheet", platform: "移动" },

  // —— 5. scrolling ——
  { id: "pagination", cat: "scrolling", zh: "分页", en: "Pagination", defZh: "将长列表分成固定大小的页。", defEn: "Split a long list into fixed-size pages.", confuse: "infinite-scroll", platform: "Web" },
  { id: "infinite-scroll", cat: "scrolling", zh: "无限滚动", en: "Infinite Scroll", defZh: "接近底部时自动加载下一批内容。", defEn: "Automatically load the next batch near the bottom.", confuse: "load-more", platform: "Web/移动" },
  { id: "load-more", cat: "scrolling", zh: "加载更多", en: "Load More", defZh: "用户主动点击/触达控件再加载下一批。", defEn: "User explicitly triggers loading the next batch.", confuse: "infinite-scroll", platform: "通用" },
  { id: "virtual-list", cat: "scrolling", zh: "虚拟列表", en: "Virtual Scroll / Windowing", defZh: "只渲染可视附近的行以支撑超长列表性能。", defEn: "Render only near-viewport rows for very long lists.", platform: "Web/桌面" },
  { id: "pull-to-refresh", cat: "scrolling", zh: "下拉刷新", en: "Pull to Refresh", defZh: "在列表顶部下拉以重新获取数据。", defEn: "Pull down at the top of a list to refetch data.", platform: "移动" },
  { id: "scroll-snap", cat: "scrolling", zh: "滚动吸附", en: "Scroll Snap", defZh: "滚动结束后对齐到预设停靠点（如全屏页）。", defEn: "Align to predefined snap points after scrolling (e.g. full-screen pages).", platform: "通用" },
  { id: "sticky-header", cat: "scrolling", zh: "粘性头", en: "Sticky Header", defZh: "滚动时标题或工具栏固定在视口边缘。", defEn: "Keep a header or toolbar pinned to the viewport while scrolling.", platform: "通用" },
  { id: "scrollspy", cat: "scrolling", zh: "滚动监听导航", en: "Scrollspy", defZh: "根据当前可见区块高亮对应目录项。", defEn: "Highlight TOC items based on the section currently in view.", platform: "Web" },
  { id: "carousel", cat: "scrolling", zh: "轮播 / 横滑", en: "Carousel / Horizontal Pager", defZh: "水平切换一组卡片或幻灯片。", defEn: "Horizontally page through cards or slides.", platform: "通用" },
  { id: "parallax", cat: "scrolling", zh: "视差滚动", en: "Parallax Scroll", defZh: "多层以不同速率滚动营造深度感。", defEn: "Layers scroll at different rates to suggest depth.", platform: "Web" },
  { id: "scroll-restoration", cat: "scrolling", zh: "保留滚动位置", en: "Scroll Restoration", defZh: "返回列表时恢复先前滚动位置。", defEn: "Restore prior scroll position when returning to a list.", platform: "通用" },

  // —— 6. search ——
  { id: "instant-search", cat: "search", zh: "即时搜索", en: "Instant Search", defZh: "输入时几乎立即更新结果。", defEn: "Results update nearly immediately as the user types.", confuse: "debounced-search", platform: "通用" },
  { id: "debounced-search", cat: "search", zh: "防抖搜索", en: "Debounced Search", defZh: "停止输入一段时间后再发请求，降低压力。", defEn: "Wait until typing pauses before requesting, reducing load.", confuse: "instant-search", platform: "通用" },
  { id: "autocomplete", cat: "search", zh: "自动完成", en: "Autocomplete", defZh: "根据已输入内容建议补全词或短语。", defEn: "Suggest completions of words or phrases from typed input.", confuse: "combobox", platform: "通用" },
  { id: "faceted-search", cat: "search", zh: "分面筛选", en: "Faceted Search / Filters", defZh: "按多个属性维度交叉过滤结果。", defEn: "Cross-filter results by multiple attribute dimensions.", platform: "通用" },
  { id: "sort-control", cat: "search", zh: "排序", en: "Sort Control", defZh: "改变结果集的排列顺序。", defEn: "Change the ordering of a result set.", platform: "通用" },
  { id: "range-filter", cat: "search", zh: "范围筛选", en: "Range Filter", defZh: "按数值或日期区间过滤。", defEn: "Filter by a numeric or date interval.", platform: "通用" },
  { id: "search-suggestions", cat: "search", zh: "搜索建议", en: "Search Suggestions", defZh: "展示热门、纠错或相关查询建议。", defEn: "Show popular, corrected, or related query suggestions.", platform: "通用" },
  { id: "recent-searches", cat: "search", zh: "最近搜索", en: "Recent Searches", defZh: "回忆用户近期查询以便快速重用。", defEn: "Recall recent queries for quick reuse.", platform: "通用" },
  { id: "empty-results", cat: "search", zh: "空结果引导", en: "Empty Results Guidance", defZh: "无匹配时提供改写建议或放宽条件。", defEn: "When nothing matches, suggest rewrites or broader criteria.", platform: "通用" },
  { id: "discovery-feed", cat: "search", zh: "浏览式发现", en: "Discovery Feed / For You", defZh: "无明确查询时的推荐流浏览。", defEn: "Browse a recommendation stream without an explicit query.", platform: "移动/Web" },

  // —— 7. selection ——
  { id: "single-select", cat: "selection", zh: "单选", en: "Single Select", defZh: "一次只能选中一项。", defEn: "Only one item may be selected at a time.", platform: "通用" },
  { id: "multi-select", cat: "selection", zh: "多选", en: "Multi-select", defZh: "可同时选中多项以进行批量操作。", defEn: "Select multiple items for bulk operations.", platform: "通用" },
  { id: "marquee-select", cat: "selection", zh: "框选", en: "Marquee / Rubber-band Select", defZh: "拖出矩形区域选中范围内对象。", defEn: "Drag a rectangle to select objects inside it.", platform: "桌面" },
  { id: "select-all", cat: "selection", zh: "全选", en: "Select All", defZh: "一键选中当前范围全部项。", defEn: "Select every item in the current scope in one action.", platform: "通用" },
  { id: "bulk-action-bar", cat: "selection", zh: "批量操作栏", en: "Bulk Action Bar", defZh: "选中后出现的针对多项的操作工具条。", defEn: "Toolbar of actions that appears for multiple selected items.", platform: "通用" },
  { id: "drag-reorder", cat: "selection", zh: "拖拽排序", en: "Drag-and-drop Reorder", defZh: "拖动列表项改变顺序。", defEn: "Drag list items to change their order.", platform: "通用" },
  { id: "kanban-dnd", cat: "selection", zh: "看板拖拽", en: "Kanban Drag-and-drop", defZh: "在列之间拖动卡片改变状态或分组。", defEn: "Drag cards across columns to change status or grouping.", platform: "Web/桌面" },
  { id: "table-sort", cat: "selection", zh: "表格列排序", en: "Table Column Sort", defZh: "点击表头按该列排序。", defEn: "Click a column header to sort by that column.", platform: "Web/桌面" },
  { id: "column-resize", cat: "selection", zh: "列宽调整", en: "Column Resize", defZh: "拖动表格列边界改变宽度。", defEn: "Drag a table column boundary to change width.", platform: "桌面/Web" },
  { id: "frozen-columns", cat: "selection", zh: "冻结列", en: "Frozen / Sticky Columns", defZh: "水平滚动时固定关键列可见。", defEn: "Keep key columns visible while scrolling horizontally.", platform: "Web/桌面" },
  { id: "master-detail", cat: "selection", zh: "主从明细", en: "Master–Detail", defZh: "左侧/上方列表选中后右侧/下方显示详情。", defEn: "Selecting in a master list shows details in a paired pane.", platform: "桌面/Web" },
  { id: "inline-edit", cat: "selection", zh: "内联编辑", en: "Inline Edit", defZh: "在列表或表格单元格内直接编辑，无需跳转表单页。", defEn: "Edit directly in a list or table cell without a separate form page.", platform: "通用" },
  { id: "show-more", cat: "selection", zh: "展示更多 / 截断展开", en: "Show More / Truncation Expand", defZh: "先截断长内容，按需展开全文。", defEn: "Truncate long content and expand on demand.", confuse: "accordion", platform: "通用" },
  { id: "split-pane", cat: "selection", zh: "可调整分栏", en: "Resizable Split Pane", defZh: "拖动分割线调整相邻面板大小。", defEn: "Drag a splitter to resize adjacent panes.", platform: "桌面/Web" },
  { id: "accordion", cat: "selection", zh: "手风琴 / 折叠面板", en: "Accordion / Collapse", defZh: "可展开收起的分段内容块，常一次只开一项。", defEn: "Expandable/collapsible sections, often one open at a time.", confuse: "show-more", platform: "通用" },

  // —— 8. forms ——
  { id: "multi-step-form", cat: "forms", zh: "分步表单", en: "Multi-step Form", defZh: "将长表单拆成多步减少认知负担。", defEn: "Split a long form into steps to reduce cognitive load.", confuse: "wizard", platform: "通用" },
  { id: "inline-validation", cat: "forms", zh: "内联校验", en: "Inline Validation", defZh: "在字段失焦或输入过程中即时提示错误。", defEn: "Show field errors on blur or while typing.", confuse: "submit-validation", platform: "通用" },
  { id: "submit-validation", cat: "forms", zh: "提交时校验", en: "Validate on Submit", defZh: "仅在用户提交时统一校验并汇总错误。", defEn: "Validate only on submit and summarize errors.", confuse: "inline-validation", platform: "通用" },
  { id: "disabled-submit", cat: "forms", zh: "禁用提交策略", en: "Disabled Submit Strategy", defZh: "表单未满足条件时禁用提交按钮（需权衡可发现性）。", defEn: "Disable submit until the form is valid (trade-off with discoverability).", platform: "通用" },
  { id: "autosave", cat: "forms", zh: "自动保存", en: "Autosave", defZh: "静默定期或按变更保存，降低丢稿风险。", defEn: "Quietly save on an interval or on change to reduce data loss.", confuse: "draft", platform: "通用" },
  { id: "draft", cat: "forms", zh: "草稿", en: "Draft", defZh: "显式保存未完成内容供稍后继续。", defEn: "Explicitly save unfinished work to resume later.", confuse: "autosave", platform: "通用" },
  { id: "confirm-submit", cat: "forms", zh: "确认提交", en: "Confirm before Submit", defZh: "提交前再次确认关键影响。", defEn: "Reconfirm impactful consequences before submitting.", platform: "通用" },
  { id: "prevent-double-submit", cat: "forms", zh: "防重复提交", en: "Prevent Double Submit", defZh: "提交中锁定按钮或令牌，避免重复请求。", defEn: "Lock the button or use tokens while submitting to avoid duplicate requests.", platform: "通用" },
  { id: "captcha", cat: "forms", zh: "验证码 / 人机验证", en: "CAPTCHA / Bot Check", defZh: "验证操作者为人类或可信客户端。", defEn: "Verify the actor is human or a trusted client.", platform: "Web" },
  { id: "step-up-auth", cat: "forms", zh: "二次验证", en: "Step-up Authentication", defZh: "敏感操作前要求额外认证（OTP、生物识别等）。", defEn: "Require extra auth (OTP, biometrics) before sensitive actions.", platform: "通用" },

  // —— 9. feedback ——
  { id: "spinner", cat: "feedback", zh: "加载转圈", en: "Spinner / Activity Indicator", defZh: "表示不确定时长的忙碌状态。", defEn: "Indicates busy state of indeterminate duration.", confuse: "skeleton", platform: "通用" },
  { id: "skeleton", cat: "feedback", zh: "骨架屏", en: "Skeleton Screen", defZh: "用内容占位轮廓降低加载时的布局跳动感。", defEn: "Placeholder outlines reduce layout jump while loading.", confuse: "spinner", platform: "通用" },
  { id: "progress-determinate", cat: "feedback", zh: "确定进度", en: "Determinate Progress", defZh: "显示可预估完成比例的进度条。", defEn: "Progress bar showing an estimable completion ratio.", confuse: "progress-indeterminate", platform: "通用" },
  { id: "progress-indeterminate", cat: "feedback", zh: "不确定进度", en: "Indeterminate Progress", defZh: "知悉进行中但无法给出百分比。", defEn: "Shows activity without a percentage.", confuse: "progress-determinate", platform: "通用" },
  { id: "optimistic-ui", cat: "feedback", zh: "乐观更新", en: "Optimistic UI", defZh: "先更新界面再等待服务器确认，失败则回滚。", defEn: "Update UI first, confirm with server later; roll back on failure.", platform: "通用" },
  { id: "empty-state", cat: "feedback", zh: "空状态", en: "Empty State", defZh: "无数据时解释原因并给出下一步行动。", defEn: "Explain why there is no data and offer a next action.", platform: "通用" },
  { id: "error-state", cat: "feedback", zh: "错误态", en: "Error State", defZh: "展示失败原因与可恢复操作。", defEn: "Show failure reason and recovery actions.", platform: "通用" },
  { id: "success-feedback", cat: "feedback", zh: "成功反馈", en: "Success Feedback", defZh: "明确告知操作已成功完成。", defEn: "Clearly confirm that an action completed successfully.", platform: "通用" },
  { id: "undo-redo", cat: "feedback", zh: "撤销 / 重做", en: "Undo / Redo", defZh: "允许回退或重放最近的编辑操作。", defEn: "Revert or reapply recent edit operations.", platform: "通用" },
  { id: "retry", cat: "feedback", zh: "重试", en: "Retry", defZh: "失败后提供再次发起请求的入口。", defEn: "Offer a way to re-issue a failed request.", platform: "通用" },
  { id: "offline-banner", cat: "feedback", zh: "离线提示", en: "Offline Indicator", defZh: "网络不可用时告知用户并限制或排队操作。", defEn: "Inform the user when offline and limit or queue actions.", platform: "通用" },
  { id: "syncing", cat: "feedback", zh: "同步中", en: "Syncing Indicator", defZh: "表示本地与远端数据正在同步。", defEn: "Indicates local and remote data are syncing.", platform: "通用" },
  { id: "disabled-visible", cat: "feedback", zh: "禁用态可见性", en: "Visible Disabled State", defZh: "控件不可用但仍可见，并尽量说明原因。", defEn: "Control is unavailable but visible, ideally with a reason.", platform: "通用" },
  { id: "readonly-state", cat: "feedback", zh: "只读态", en: "Read-only State", defZh: "可查看但不可编辑的字段呈现。", defEn: "Field is viewable but not editable.", confuse: "disabled-visible", platform: "通用" },

  // —— 10. motion ——
  { id: "page-transition", cat: "motion", zh: "页面过渡", en: "Page Transition", defZh: "路由切换时的进入/退出动画，帮助建立空间感。", defEn: "Enter/exit animation on route change to support spatial mental model.", platform: "通用" },
  { id: "shared-element", cat: "motion", zh: "共享元素过渡", en: "Shared Element Transition", defZh: "同一元素在两屏之间连续变形迁移。", defEn: "Continuously morph the same element across two screens.", platform: "移动/Web" },
  { id: "crossfade", cat: "motion", zh: "交叉淡入", en: "Crossfade", defZh: "旧内容淡出同时新内容淡入。", defEn: "Old content fades out while new content fades in.", platform: "通用" },
  { id: "stagger", cat: "motion", zh: "错落入场", en: "Staggered Entrance", defZh: "列表项依次延迟出现，引导视线。", defEn: "List items appear with sequential delay to guide attention.", platform: "通用" },
  { id: "microinteraction", cat: "motion", zh: "微交互", en: "Microinteraction", defZh: "对小动作的精致反馈（点赞、涟漪、开关弹性等）。", defEn: "Polished feedback for small actions (like, ripple, springy switch).", platform: "通用" },
  { id: "reduced-motion", cat: "motion", zh: "减少动效偏好", en: "Prefers-reduced-motion", defZh: "尊重系统减少动画设置，提供弱动效或瞬切。", defEn: "Honor OS reduced-motion settings with subtler or instant changes.", platform: "通用" },
  { id: "view-transitions", cat: "motion", zh: "View Transitions", en: "View Transitions API Pattern", defZh: "利用浏览器 View Transitions 做文档级过渡。", defEn: "Use the browser View Transitions API for document-level transitions.", platform: "Web" },

  // —— 11. media ——
  { id: "image-pinch-lightbox", cat: "media", zh: "图片捏合 / 灯箱", en: "Image Pinch / Lightbox Zoom", defZh: "放大查看图片细节。", defEn: "Zoom into image details.", platform: "通用" },
  { id: "before-after-slider", cat: "media", zh: "前后对比滑杆", en: "Before/After Slider", defZh: "拖动分割线对比两张图。", defEn: "Drag a divider to compare two images.", platform: "Web" },
  { id: "hotspot", cat: "media", zh: "热区", en: "Hotspot", defZh: "在图像或场景上可点击的标注点。", defEn: "Clickable annotated points on an image or scene.", platform: "通用" },
  { id: "video-scrub", cat: "media", zh: "视频 scrub", en: "Video Scrubbing", defZh: "拖动进度条快速预览帧。", defEn: "Drag the timeline to preview frames quickly.", platform: "通用" },
  { id: "map-pan-zoom", cat: "media", zh: "地图平移缩放", en: "Map Pan / Zoom / Markers", defZh: "平移、缩放地图并与标记交互。", defEn: "Pan and zoom a map and interact with markers.", platform: "通用" },
  { id: "chart-brush", cat: "media", zh: "图表刷选", en: "Chart Brush / Zoom", defZh: "在图表上拖选区间以放大或过滤。", defEn: "Drag a range on a chart to zoom or filter.", platform: "Web/桌面" },
  { id: "chart-tooltip", cat: "media", zh: "图表 Tooltip", en: "Chart Tooltip", defZh: "悬停或点选数据点显示精确值。", defEn: "Hover or tap a data point to show precise values.", platform: "通用" },
  { id: "sparkline-drilldown", cat: "media", zh: "迷你图下钻", en: "Sparkline Drill-down", defZh: "点击迷你趋势图进入详细视图。", defEn: "Click a sparkline to open a detailed view.", platform: "Web" },

  // —— 12. collab ——
  { id: "typing-indicator", cat: "collab", zh: "输入中指示", en: "Typing Indicator", defZh: "显示对方正在输入。", defEn: "Shows that the other party is typing.", platform: "通用" },
  { id: "presence", cat: "collab", zh: "在线状态", en: "Presence", defZh: "显示用户在线、离开或忙碌等状态。", defEn: "Shows online, away, busy, or similar user status.", platform: "通用" },
  { id: "collaborative-cursors", cat: "collab", zh: "协同光标", en: "Collaborative Cursors", defZh: "实时显示其他协作者的光标与选区。", defEn: "Live display of other collaborators' cursors and selections.", platform: "Web/桌面" },
  { id: "anchored-comment", cat: "collab", zh: "评论锚点", en: "Anchored Comment", defZh: "评论绑定到文档或设计稿的具体位置。", defEn: "Comments bound to a specific place in a doc or design.", platform: "通用" },
  { id: "mention", cat: "collab", zh: "@提及", en: "Mention (@)", defZh: "用 @ 通知并链接到某用户或实体。", defEn: "Use @ to notify and link a user or entity.", platform: "通用" },
  { id: "like-save-share", cat: "collab", zh: "点赞 / 收藏 / 分享", en: "Like / Save / Share", defZh: "轻量社交反馈与传播动作。", defEn: "Lightweight social feedback and distribution actions.", platform: "通用" },
  { id: "conflict-merge-ui", cat: "collab", zh: "冲突合并 UI", en: "Conflict Merge UI", defZh: "展示并协助解决并发编辑冲突。", defEn: "Surface and help resolve concurrent edit conflicts.", platform: "通用" },

  // —— 13. ai ——
  { id: "ghost-text", cat: "ai", zh: "幽灵文本补全", en: "Ghost Text Completion", defZh: "以淡色预填建议文本，Tab 接受。", defEn: "Faint suggested text the user can accept (e.g. with Tab).", platform: "桌面/Web" },
  { id: "streaming-output", cat: "ai", zh: "流式输出", en: "Streaming Output", defZh: "模型响应逐字/逐块出现，缩短感知等待。", defEn: "Model response appears token-by-token to reduce perceived wait.", platform: "通用" },
  { id: "stop-generation", cat: "ai", zh: "停止生成", en: "Stop Generation", defZh: "用户中断正在流式输出的生成。", defEn: "User interrupts an in-progress streaming generation.", platform: "通用" },
  { id: "suggestion-chips", cat: "ai", zh: "建议芯片", en: "Suggestion Chips", defZh: "可点击的推荐追问或快捷指令。", defEn: "Tappable recommended follow-ups or shortcut prompts.", platform: "通用" },
  { id: "tool-call-confirm", cat: "ai", zh: "工具调用确认", en: "Tool Call Confirmation", defZh: "代理调用外部工具前请用户确认。", defEn: "Ask the user to confirm before an agent calls an external tool.", confuse: "human-approval", platform: "通用" },
  { id: "human-approval", cat: "ai", zh: "人机审批", en: "Human-in-the-loop Approval", defZh: "关键副作用步骤必须经人批准后继续。", defEn: "Critical side-effect steps require human approval to proceed.", confuse: "tool-call-confirm", platform: "通用" },
  { id: "citation-expand", cat: "ai", zh: "引用溯源展开", en: "Citation / Source Expand", defZh: "展开回答所依据的来源片段。", defEn: "Expand source snippets that ground the answer.", platform: "通用" },
  { id: "prompt-edit-retry", cat: "ai", zh: "提示词编辑重试", en: "Edit Prompt & Retry", defZh: "修改上次提示并重新生成。", defEn: "Edit the last prompt and regenerate.", platform: "通用" },

  // —— 14. a11y ——
  { id: "focus-trap", cat: "a11y", zh: "焦点陷阱", en: "Focus Trap", defZh: "模态打开时将 Tab 循环限制在对话框内。", defEn: "While a modal is open, keep Tab cycling inside the dialog.", platform: "Web/桌面" },
  { id: "skip-link", cat: "a11y", zh: "跳过链接", en: "Skip Link", defZh: "键盘用户可跳过重复导航直达主内容。", defEn: "Let keyboard users skip repeated nav to main content.", platform: "Web" },
  { id: "live-region", cat: "a11y", zh: "活区播报", en: "ARIA Live Region", defZh: "动态更新由屏幕阅读器自动朗读。", defEn: "Dynamic updates announced automatically by screen readers.", platform: "Web" },
  { id: "keyboard-equivalent", cat: "a11y", zh: "键盘等价操作", en: "Keyboard Equivalent", defZh: "指针可完成的操作均有键盘路径。", defEn: "Everything doable with a pointer has a keyboard path.", platform: "桌面/Web" },
  { id: "touch-target-size", cat: "a11y", zh: "触控目标尺寸", en: "Touch Target Size", defZh: "保证可点区域足够大、间距足够，降低误触。", defEn: "Ensure hit areas and spacing are large enough to reduce mistaps.", platform: "移动" },
  { id: "high-contrast", cat: "a11y", zh: "高对比", en: "High Contrast Support", defZh: "在高对比或强制颜色模式下保持可用。", defEn: "Remain usable under high-contrast or forced-colors modes.", platform: "通用" },
  { id: "rtl-gestures", cat: "a11y", zh: "RTL 镜像手势", en: "RTL Mirrored Gestures", defZh: "在从右到左布局中镜像滑动等方向性手势。", defEn: "Mirror directional gestures in right-to-left layouts.", platform: "通用" },

  // —— 15. crossplatform ——
  { id: "window-chrome", cat: "crossplatform", zh: "窗口与标题栏", en: "Window Chrome", defZh: "桌面窗口的最小化、最大化、关闭与拖动区域。", defEn: "Desktop window minimize/maximize/close and drag regions.", platform: "桌面" },
  { id: "menu-bar", cat: "crossplatform", zh: "菜单栏", en: "Menu Bar", defZh: "桌面应用顶部的分层命令菜单。", defEn: "Hierarchical command menus at the top of a desktop app.", platform: "桌面" },
  { id: "dock-taskbar", cat: "crossplatform", zh: "Dock / 任务栏", en: "Dock / Taskbar", defZh: "系统级应用驻留与切换区。", defEn: "System area for pinned apps and switching.", platform: "系统" },
  { id: "multi-window", cat: "crossplatform", zh: "多窗口", en: "Multi-window", defZh: "同一应用打开多个独立窗口并行工作。", defEn: "Same app opens multiple independent windows.", platform: "桌面" },
  { id: "drag-out-file", cat: "crossplatform", zh: "拖出文件", en: "Drag Out to Filesystem", defZh: "从应用拖到桌面或文件夹以导出文件。", defEn: "Drag from the app to the desktop or a folder to export a file.", platform: "桌面" },
  { id: "share-sheet", cat: "crossplatform", zh: "系统分享表", en: "System Share Sheet", defZh: "调用系统分享面板将内容发给其他应用。", defEn: "Invoke the OS share sheet to send content to other apps.", platform: "移动" },
  { id: "permission-prompt", cat: "crossplatform", zh: "权限请求", en: "Permission Prompt", defZh: "系统弹窗请求相机、通知等敏感权限。", defEn: "OS dialog requesting camera, notifications, or other sensitive permissions.", platform: "移动/桌面" },
  { id: "biometric-prompt", cat: "crossplatform", zh: "生物识别提示", en: "Biometric Prompt", defZh: "指纹/面容等本地认证 UI。", defEn: "Fingerprint/face local authentication UI.", platform: "移动/桌面" },
  { id: "home-widget", cat: "crossplatform", zh: "桌面小组件", en: "Home Screen Widget", defZh: "主屏上的轻量信息与快捷操作模块。", defEn: "Lightweight info and actions on the home screen.", platform: "移动" },
  { id: "notification-actions", cat: "crossplatform", zh: "通知操作", en: "Notification Actions", defZh: "在通知上直接执行回复、完成等快捷操作。", defEn: "Act on a notification inline (reply, complete, etc.).", platform: "系统" },
  { id: "responsive-pattern-shift", cat: "crossplatform", zh: "响应式模式降级", en: "Responsive Pattern Shift", defZh: "窄屏将模态等模式降级为全屏 Sheet 等更合适形态。", defEn: "On narrow screens, shift patterns (e.g. modal → full-screen sheet).", platform: "通用" },
];

function formatZhEntry(e) {
  const aliases = e.aliases?.length ? `；别名：${e.aliases.join("、")}` : "";
  const confuse = e.confuse ? `\n  - 易混淆：\`${e.confuse}\`` : "";
  const platform = e.platform ? `\n  - 适用端：${e.platform}` : "";
  return `### \`${e.id}\` ${e.zh}
- **英文名**：${e.en}${aliases}
- **定义**：${e.defZh}
- **大类**：${categories.find((c) => c.id === e.cat)?.zh ?? e.cat}${platform}${confuse}
`;
}

function formatEnEntry(e) {
  const aliases = e.aliases?.length ? `; aliases: ${e.aliases.join(", ")}` : "";
  const confuse = e.confuse ? `\n  - Often confused with: \`${e.confuse}\`` : "";
  const platform = e.platform
    ? `\n  - Platforms: ${
        { 通用: "General", 移动: "Mobile", "桌面/Web": "Desktop/Web", Web: "Web", "移动/触控": "Mobile/Touch", 触控: "Touch", "桌面/触控": "Desktop/Touch", "平板/桌面": "Tablet/Desktop", "部分设备": "Some devices", 专用: "Specialized", "TV/游戏": "TV/Gaming", "Android/Web": "Android/Web", "移动/Web": "Mobile/Web", "Web/移动": "Web/Mobile", "Web/桌面": "Web/Desktop", "桌面": "Desktop", 系统: "System", "移动/桌面": "Mobile/Desktop" }[
          e.platform
        ] ?? e.platform
      }`
    : "";
  return `### \`${e.id}\` ${e.en}
- **Chinese name**: ${e.zh}${aliases}
- **Definition**: ${e.defEn}
- **Category**: ${categories.find((c) => c.id === e.cat)?.en ?? e.cat}${platform}${confuse}
`;
}

function buildZh() {
  const toc = categories.map((c) => `- [${c.zh}](#${c.id})`).join("\n");
  let body = "";
  for (const cat of categories) {
    body += `\n## ${cat.zh} {#${cat.id}}\n\n`;
    for (const e of entries.filter((x) => x.cat === cat.id)) {
      body += formatZhEntry(e) + "\n";
    }
  }
  return `# UI 交互形式全景

> 版本：1.0 · 条目数：${entries.length} · 与 [English version](./ui-interaction-catalog.en.md) 条目 \`id\` 完全对齐

## 0. 怎么读这份清单

- 区分三层：**输入原语**（指点、滑动）≠ **界面控件**（按钮、开关）≠ **交互模式**（无限滚动、乐观更新）。
- 同一概念跨平台命名可能不同（如 Toast vs Snackbar）；条目中保留常用别名。
- 不存在权威「绝对全集」；本清单按当代 Web / 移动 / 桌面 / 无障碍 / 协作 / AI 产品常见形态尽量铺全，可继续增补。
- 每条含稳定 \`id\`、中文名、英文名、一句话定义、大类；部分含适用端与易混淆对象。

## 目录

${toc}
${body}
---

*Interactpedia · 交互百科内容基线*
`;
}

function buildEn() {
  const toc = categories.map((c) => `- [${c.en}](#${c.id})`).join("\n");
  let body = "";
  for (const cat of categories) {
    body += `\n## ${cat.en} {#${cat.id}}\n\n`;
    for (const e of entries.filter((x) => x.cat === cat.id)) {
      body += formatEnEntry(e) + "\n";
    }
  }
  return `# UI Interaction Patterns — Full Catalog

> Version 1.0 · ${entries.length} entries · IDs aligned with the [Chinese version](./ui-interaction-catalog.zh.md)

## 0. How to read this catalog

- Three layers: **input primitives** (tap, swipe) ≠ **controls** (button, switch) ≠ **interaction patterns** (infinite scroll, optimistic UI).
- Cross-platform naming differs (Toast vs Snackbar); aliases are noted where common.
- There is no single authoritative “complete set.” This catalog aims to cover common Web / mobile / desktop / a11y / collaboration / AI product patterns and can grow.
- Each entry has a stable \`id\`, English name, Chinese name, one-line definition, and category; some include platform and “often confused with.”

## Contents

${toc}
${body}
---

*Interactpedia content baseline*
`;
}

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const docs = join(root, "docs");
mkdirSync(docs, { recursive: true });
writeFileSync(join(docs, "ui-interaction-catalog.zh.md"), buildZh(), "utf8");
writeFileSync(join(docs, "ui-interaction-catalog.en.md"), buildEn(), "utf8");
console.log(`Wrote ${entries.length} entries to docs/ (zh + en)`);
