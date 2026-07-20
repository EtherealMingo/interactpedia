/**
 * Vibehub missing items → pattern entries + demo registry keys
 * Run: node scripts/generate-vibehub-patterns.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Already covered by existing Interactpedia demos — skip */
const skip = new Set([
  'tabs', 'breadcrumb', 'switch', 'upload', 'collapse', 'popover', 'tour', 'empty',
  'drawer', 'message', 'modal', 'progress', 'skeleton', 'steps', 'button-morph',
  'shared-element', 'parallax', 'sticky-pin', 'split-pane',
])

function slug(en) {
  return en
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const raw = [
  // 组件 missing
  ['按钮', 'Button', 'component', '用于开始一个即时操作'],
  ['图标按钮', 'Icon Button', 'component', '仅用图标表达的紧凑操作'],
  ['锚点', 'Anchor', 'component', '跳转到页面内指定位置'],
  ['下拉菜单', 'Dropdown', 'component', '收纳更多操作的下拉菜单'],
  ['导航菜单', 'Menu', 'component', '为页面提供导航的菜单'],
  ['页头', 'Page Header', 'component', '介绍页面信息并承载操作'],
  ['分页', 'Pagination', 'component', '分隔长列表并按页加载'],
  ['输入框', 'Input', 'component', '通过键盘输入内容'],
  ['复选框', 'Checkbox', 'component', '在一组选项中多项选择'],
  ['单选按钮', 'Radio', 'component', '在一组选项中单项选择'],
  ['滑块', 'Slider', 'component', '在数值区间内滑动取值'],
  ['下拉选择', 'Select', 'component', '从下拉列表中选择一项'],
  ['日期选择器', 'Date Picker', 'component', '选择或输入一个日期'],
  ['时间选择器', 'Time Picker', 'component', '选择或输入一个时间'],
  ['数字输入框', 'Input Number', 'component', '输入范围内的数值'],
  ['评分', 'Rate', 'component', '对事物进行星级评价'],
  ['颜色选择器', 'Color Picker', 'component', '选取并应用一个颜色'],
  ['级联选择', 'Cascader', 'component', '从关联数据中逐级选择'],
  ['自动完成', 'AutoComplete', 'component', '输入时给出补全建议'],
  ['穿梭框', 'Transfer', 'component', '在两栏之间搬移数据'],
  ['表单', 'Form', 'component', '收集、校验并提交数据'],
  ['头像', 'Avatar', 'component', '用来标识用户或事物'],
  ['文字提示', 'Tooltip', 'component', '悬停时给出简短说明'],
  ['内容卡片', 'Card', 'component', '承载单组信息的容器'],
  ['徽标数', 'Badge', 'component', '在图标角上展示提醒数'],
  ['日历', 'Calendar', 'component', '按日期展示数据或日程'],
  ['走马灯', 'Carousel', 'component', '循环播放一组内容'],
  ['评论', 'Comment', 'component', '展示一条评论及作者'],
  ['描述列表', 'Descriptions', 'component', '成组展示多项只读信息'],
  ['图片', 'Image', 'component', '展示图片并支持预览'],
  ['列表', 'List', 'component', '展示一列结构相同的数据'],
  ['二维码', 'QR Code', 'component', '生成可扫码的二维码'],
  ['分段控制器', 'Segmented', 'component', '在几个选项间快速切换'],
  ['统计数值', 'Statistic', 'component', '突出展示一个关键数值'],
  ['表格', 'Table', 'component', '展示行列结构的数据'],
  ['时间轴', 'Timeline', 'component', '按时间顺序展示一系列事件'],
  ['树形控件', 'Tree', 'component', '展示可展开收起的层级数据'],
  ['警告提示', 'Alert', 'component', '以横条形式给出重要提示'],
  ['通知提醒框', 'Notification', 'component', '在角落展示较复杂的通知'],
  ['气泡确认框', 'Popconfirm', 'component', '操作前的就地二次确认'],
  ['结果', 'Result', 'component', '反馈一组操作的处理结果'],
  ['加载中', 'Spin', 'component', '内容加载中的等待提示'],
  // 动画 missing
  ['淡入淡出', 'Fade', 'animation', '让元素柔和地出现或消失'],
  ['滑入', 'Slide In', 'animation', '元素带方向地滑入视图'],
  ['放大进场', 'Scale In', 'animation', '元素由小放大地登场'],
  ['弹性弹出', 'Spring In', 'animation', '带回弹的活泼弹出'],
  ['模糊渐显', 'Blur In', 'animation', '由模糊到清晰地浮现'],
  ['错落进场', 'Stagger', 'animation', '一组元素错落依次登场'],
  ['遮罩揭示', 'Clip Reveal', 'animation', '用遮罩擦除式揭示内容'],
  ['悬停抬升', 'Hover Lift', 'animation', '悬停时抬起反馈可点击'],
  ['点击涟漪', 'Ripple', 'animation', '点击处扩散的水波反馈'],
  ['点赞爆裂', 'Like Burst', 'animation', '点赞时的爆裂强调'],
  ['磁吸按钮', 'Magnetic', 'animation', '按钮轻微吸附指针'],
  ['错误抖动', 'Shake', 'animation', '出错时抖动以提示'],
  ['对勾描绘', 'Checkmark Draw', 'animation', '成功后描绘出对勾'],
  ['旋转圈', 'Spinner', 'animation', '表示正在加载或处理'],
  ['微光扫过', 'Shimmer', 'animation', '加载时的微光扫过占位'],
  ['进度条动画', 'Progress Bar Anim', 'animation', '进度填充的过渡动画'],
  ['跳动的点', 'Bouncing Dots', 'animation', '三点跳动表示等待'],
  ['脉冲', 'Pulse', 'animation', '节奏性缩放或透明度变化'],
  ['页面切换', 'Page Transition', 'animation', '路由/页面间的过渡'],
  ['容器变形', 'Container Transform', 'animation', '容器形态连续变形'],
  ['交叉淡化', 'Crossfade', 'animation', '旧出新入同时淡化'],
  ['滑动转场', 'Slide Transition', 'animation', '页面横向或纵向滑动切换'],
  ['滚动渐显', 'Scroll Reveal', 'animation', '滚入视口时渐显'],
  ['滚动进度', 'Scroll Progress', 'animation', '随滚动更新的进度指示'],
  ['横向滚动', 'Horizontal Scroll', 'animation', '横向滚动画廊或章节'],
  ['滚动叙事', 'Scrollytelling', 'animation', '滚动驱动的叙事推进'],
  ['脉冲发光', 'Pulse Glow', 'animation', '光晕脉冲吸引注意'],
  ['弹跳', 'Bounce', 'animation', '弹跳强调出现或点击'],
  ['摇摆', 'Wiggle', 'animation', '轻微左右摇摆提示'],
  ['闪烁高亮', 'Flash', 'animation', '短暂闪烁以强调变更'],
  ['角标动画', 'Badge Pop', 'animation', '角标弹出或跳动'],
  ['流动渐变', 'Animated Gradient', 'animation', '渐变色持续流动'],
  ['漂浮元素', 'Floating', 'animation', '元素缓慢上下漂浮'],
  ['跑马灯', 'Marquee', 'animation', '文字或内容循环滚动'],
  ['流体', 'Blob', 'animation', '有机流体形状变形'],
  ['呼吸待机', 'Breathing', 'animation', '缓慢呼吸式缩放'],
  ['打字机', 'Typewriter', 'animation', '文字逐字打出'],
  ['文字解码', 'Text Scramble', 'animation', '乱码逐渐解码成文字'],
  ['逐字进场', 'Split Text', 'animation', '按字/词错落入场'],
  ['渐变流动文字', 'Gradient Text', 'animation', '文字上的流动渐变'],
  ['数字滚动', 'Count Up', 'animation', '数字从旧值滚到新值'],
  ['翻转', 'Flip', 'animation', '卡片或文字翻转'],
  ['立方体旋转', 'Cube Rotation', 'animation', '立方体面旋转切换'],
  // 布局 missing
  ['顶部导航栏', 'Navbar', 'layout', '页面顶部的主导航栏'],
  ['圣杯布局', 'Holy Grail', 'layout', '头-侧-主-脚的经典分区'],
  ['卡片网格', 'Card Grid', 'layout', '等分或自适应卡片网格'],
  ['单列堆叠', 'Single Column', 'layout', '内容垂直单列排布'],
  ['侧边栏布局', 'Sidebar', 'layout', '侧栏导航 + 主内容区'],
  ['列表-详情', 'List-Detail', 'layout', '左侧列表右侧详情'],
  ['仪表盘网格', 'Dashboard Grid', 'layout', '仪表盘多模块网格'],
  ['英雄区', 'Hero', 'layout', '首屏大标题与主视觉区'],
  ['瀑布流', 'Masonry', 'layout', '不等高卡片瀑布排布'],
  ['居中容器', 'Centered', 'layout', '内容水平垂直居中'],
  ['图文左右', 'Media Object', 'layout', '媒体与文字左右对齐'],
  // 令牌
  ['色彩', 'Color', 'tokens', '品牌与语义色彩令牌'],
  ['字体排版', 'Typography', 'tokens', '字号字重行高令牌'],
  ['间距', 'Spacing', 'tokens', '内外边距尺度令牌'],
  ['圆角', 'Radius', 'tokens', '圆角半径令牌'],
  ['阴影', 'Shadow', 'tokens', '海拔阴影令牌'],
  ['断点', 'Breakpoint', 'tokens', '响应式断点令牌'],
  // SVG
  ['路径自绘', 'Line Draw', 'svg', '路径描边自绘动画'],
  ['手写签名', 'Signature', 'svg', '手写笔迹呈现'],
  ['行进虚线', 'Marching Ants', 'svg', '虚线沿路径行进'],
  ['图标描边', 'Icon Trace', 'svg', '图标描边勾勒'],
  ['霓虹辉光', 'Neon Glow', 'svg', '霓虹发光描边'],
  ['融合黏滞', 'Gooey', 'svg', '图形融合黏滞效果'],
  ['颗粒噪点', 'Grain', 'svg', '颗粒噪点纹理'],
  ['液态扭曲', 'Liquid', 'svg', '液态扭曲变形'],
  ['线性渐变', 'Linear', 'svg', 'SVG 线性渐变填充'],
  ['径向渐变', 'Radial', 'svg', 'SVG 径向渐变填充'],
  ['流动渐变SVG', 'Animated Gradient SVG', 'svg', 'SVG 流动渐变'],
  ['进度环', 'Progress Ring', 'svg', '环形进度指示'],
  ['仪表盘', 'Gauge', 'svg', '半圆仪表读数'],
  ['环形图', 'Donut', 'svg', '环形占比图'],
  ['迷你折线', 'Sparkline', 'svg', '迷你趋势折线'],
  ['流体形状', 'Blob Shape', 'svg', '有机流体 SVG 形状'],
  ['波浪分隔', 'Wave Divider', 'svg', '波浪形区块分隔'],
  ['波浪下划线', 'Squiggle', 'svg', '波浪下划线装饰'],
]

const patterns = []
for (const [zh, en, cat, summary] of raw) {
  const id = slug(en)
  if (skip.has(id)) continue
  patterns.push({
    id,
    nameZh: zh,
    nameEn: en,
    category: cat,
    summary,
    definition: `${zh}（${en}）是 Vibehub 速查中的效果项：${summary}。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。`,
    whenToUse: [`需要展示或复用「${zh}」这一常见 UI/动效形态时`, '向产品/设计对齐命名与预期效果时'],
    whenNotToUse: ['与业务语义不符时强行套用', '无障碍或性能约束下应简化的场景'],
    variants: ['默认态', '强调/激活态', '减弱动效降级'],
    related: [],
    collab: {
      states: ['idle', 'active', 'done'],
      api: ['多为前端表现层；若绑定数据需明确数据源与刷新时机'],
      productNotes: [`对外文档使用标准名：${zh} / ${en}`, '复制「复制给 AI」文案可快速复现'],
    },
    confuseWith: [],
  })
}

const file = `import type { Pattern } from './types'

/** Replicated from vibehub.xin/cheatsheet — items we previously lacked */
export const vibehubPatterns: Pattern[] = ${JSON.stringify(patterns, null, 2)}
`

mkdirSync(join(root, 'src/content'), { recursive: true })
writeFileSync(join(root, 'src/content/patterns-vibehub.ts'), file, 'utf8')
writeFileSync(
  join(root, 'scripts/vibehub-ids.json'),
  JSON.stringify(patterns.map((p) => p.id), null, 2),
  'utf8',
)
console.log(`Wrote ${patterns.length} vibehub patterns`)
