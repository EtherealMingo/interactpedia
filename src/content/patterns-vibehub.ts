import type { Pattern } from './types'

/** Replicated from vibehub.xin/cheatsheet — items we previously lacked */
export const vibehubPatterns: Pattern[] = [
  {
    "id": "button",
    "nameZh": "按钮",
    "nameEn": "Button",
    "category": "component",
    "summary": "用于开始一个即时操作",
    "definition": "按钮（Button）是 Vibehub 速查中的效果项：用于开始一个即时操作。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「按钮」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：按钮 / Button",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "icon-button",
    "nameZh": "图标按钮",
    "nameEn": "Icon Button",
    "category": "component",
    "summary": "仅用图标表达的紧凑操作",
    "definition": "图标按钮（Icon Button）是 Vibehub 速查中的效果项：仅用图标表达的紧凑操作。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「图标按钮」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：图标按钮 / Icon Button",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "anchor",
    "nameZh": "锚点",
    "nameEn": "Anchor",
    "category": "component",
    "summary": "跳转到页面内指定位置",
    "definition": "锚点（Anchor）是 Vibehub 速查中的效果项：跳转到页面内指定位置。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「锚点」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：锚点 / Anchor",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "dropdown",
    "nameZh": "下拉菜单",
    "nameEn": "Dropdown",
    "category": "component",
    "summary": "收纳更多操作的下拉菜单",
    "definition": "下拉菜单（Dropdown）是 Vibehub 速查中的效果项：收纳更多操作的下拉菜单。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「下拉菜单」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：下拉菜单 / Dropdown",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "menu",
    "nameZh": "导航菜单",
    "nameEn": "Menu",
    "category": "component",
    "summary": "为页面提供导航的菜单",
    "definition": "导航菜单（Menu）是 Vibehub 速查中的效果项：为页面提供导航的菜单。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「导航菜单」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：导航菜单 / Menu",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "page-header",
    "nameZh": "页头",
    "nameEn": "Page Header",
    "category": "component",
    "summary": "介绍页面信息并承载操作",
    "definition": "页头（Page Header）是 Vibehub 速查中的效果项：介绍页面信息并承载操作。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「页头」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：页头 / Page Header",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "pagination",
    "nameZh": "分页",
    "nameEn": "Pagination",
    "category": "component",
    "summary": "分隔长列表并按页加载",
    "definition": "分页（Pagination）是 Vibehub 速查中的效果项：分隔长列表并按页加载。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「分页」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：分页 / Pagination",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "input",
    "nameZh": "输入框",
    "nameEn": "Input",
    "category": "component",
    "summary": "通过键盘输入内容",
    "definition": "输入框（Input）是 Vibehub 速查中的效果项：通过键盘输入内容。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「输入框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：输入框 / Input",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "checkbox",
    "nameZh": "复选框",
    "nameEn": "Checkbox",
    "category": "component",
    "summary": "在一组选项中多项选择",
    "definition": "复选框（Checkbox）是 Vibehub 速查中的效果项：在一组选项中多项选择。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「复选框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：复选框 / Checkbox",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "radio",
    "nameZh": "单选按钮",
    "nameEn": "Radio",
    "category": "component",
    "summary": "在一组选项中单项选择",
    "definition": "单选按钮（Radio）是 Vibehub 速查中的效果项：在一组选项中单项选择。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「单选按钮」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：单选按钮 / Radio",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "slider",
    "nameZh": "滑块",
    "nameEn": "Slider",
    "category": "component",
    "summary": "在数值区间内滑动取值",
    "definition": "滑块（Slider）是 Vibehub 速查中的效果项：在数值区间内滑动取值。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滑块」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滑块 / Slider",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "select",
    "nameZh": "下拉选择",
    "nameEn": "Select",
    "category": "component",
    "summary": "从下拉列表中选择一项",
    "definition": "下拉选择（Select）是 Vibehub 速查中的效果项：从下拉列表中选择一项。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「下拉选择」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：下拉选择 / Select",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "date-picker",
    "nameZh": "日期选择器",
    "nameEn": "Date Picker",
    "category": "component",
    "summary": "选择或输入一个日期",
    "definition": "日期选择器（Date Picker）是 Vibehub 速查中的效果项：选择或输入一个日期。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「日期选择器」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：日期选择器 / Date Picker",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "time-picker",
    "nameZh": "时间选择器",
    "nameEn": "Time Picker",
    "category": "component",
    "summary": "选择或输入一个时间",
    "definition": "时间选择器（Time Picker）是 Vibehub 速查中的效果项：选择或输入一个时间。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「时间选择器」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：时间选择器 / Time Picker",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "input-number",
    "nameZh": "数字输入框",
    "nameEn": "Input Number",
    "category": "component",
    "summary": "输入范围内的数值",
    "definition": "数字输入框（Input Number）是 Vibehub 速查中的效果项：输入范围内的数值。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「数字输入框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：数字输入框 / Input Number",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "rate",
    "nameZh": "评分",
    "nameEn": "Rate",
    "category": "component",
    "summary": "对事物进行星级评价",
    "definition": "评分（Rate）是 Vibehub 速查中的效果项：对事物进行星级评价。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「评分」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：评分 / Rate",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "color-picker",
    "nameZh": "颜色选择器",
    "nameEn": "Color Picker",
    "category": "component",
    "summary": "选取并应用一个颜色",
    "definition": "颜色选择器（Color Picker）是 Vibehub 速查中的效果项：选取并应用一个颜色。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「颜色选择器」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：颜色选择器 / Color Picker",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "cascader",
    "nameZh": "级联选择",
    "nameEn": "Cascader",
    "category": "component",
    "summary": "从关联数据中逐级选择",
    "definition": "级联选择（Cascader）是 Vibehub 速查中的效果项：从关联数据中逐级选择。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「级联选择」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：级联选择 / Cascader",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "autocomplete",
    "nameZh": "自动完成",
    "nameEn": "AutoComplete",
    "category": "component",
    "summary": "输入时给出补全建议",
    "definition": "自动完成（AutoComplete）是 Vibehub 速查中的效果项：输入时给出补全建议。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「自动完成」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：自动完成 / AutoComplete",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "transfer",
    "nameZh": "穿梭框",
    "nameEn": "Transfer",
    "category": "component",
    "summary": "在两栏之间搬移数据",
    "definition": "穿梭框（Transfer）是 Vibehub 速查中的效果项：在两栏之间搬移数据。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「穿梭框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：穿梭框 / Transfer",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "form",
    "nameZh": "表单",
    "nameEn": "Form",
    "category": "component",
    "summary": "收集、校验并提交数据",
    "definition": "表单（Form）是 Vibehub 速查中的效果项：收集、校验并提交数据。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「表单」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：表单 / Form",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "avatar",
    "nameZh": "头像",
    "nameEn": "Avatar",
    "category": "component",
    "summary": "用来标识用户或事物",
    "definition": "头像（Avatar）是 Vibehub 速查中的效果项：用来标识用户或事物。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「头像」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：头像 / Avatar",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "tooltip",
    "nameZh": "文字提示",
    "nameEn": "Tooltip",
    "category": "component",
    "summary": "悬停时给出简短说明",
    "definition": "文字提示（Tooltip）是 Vibehub 速查中的效果项：悬停时给出简短说明。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「文字提示」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：文字提示 / Tooltip",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "card",
    "nameZh": "内容卡片",
    "nameEn": "Card",
    "category": "component",
    "summary": "承载单组信息的容器",
    "definition": "内容卡片（Card）是 Vibehub 速查中的效果项：承载单组信息的容器。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「内容卡片」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：内容卡片 / Card",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "badge",
    "nameZh": "徽标数",
    "nameEn": "Badge",
    "category": "component",
    "summary": "在图标角上展示提醒数",
    "definition": "徽标数（Badge）是 Vibehub 速查中的效果项：在图标角上展示提醒数。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「徽标数」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：徽标数 / Badge",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "calendar",
    "nameZh": "日历",
    "nameEn": "Calendar",
    "category": "component",
    "summary": "按日期展示数据或日程",
    "definition": "日历（Calendar）是 Vibehub 速查中的效果项：按日期展示数据或日程。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「日历」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：日历 / Calendar",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "carousel",
    "nameZh": "走马灯",
    "nameEn": "Carousel",
    "category": "component",
    "summary": "循环播放一组内容",
    "definition": "走马灯（Carousel）是 Vibehub 速查中的效果项：循环播放一组内容。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「走马灯」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：走马灯 / Carousel",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "comment",
    "nameZh": "评论",
    "nameEn": "Comment",
    "category": "component",
    "summary": "展示一条评论及作者",
    "definition": "评论（Comment）是 Vibehub 速查中的效果项：展示一条评论及作者。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「评论」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：评论 / Comment",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "descriptions",
    "nameZh": "描述列表",
    "nameEn": "Descriptions",
    "category": "component",
    "summary": "成组展示多项只读信息",
    "definition": "描述列表（Descriptions）是 Vibehub 速查中的效果项：成组展示多项只读信息。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「描述列表」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：描述列表 / Descriptions",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "image",
    "nameZh": "图片",
    "nameEn": "Image",
    "category": "component",
    "summary": "展示图片并支持预览",
    "definition": "图片（Image）是 Vibehub 速查中的效果项：展示图片并支持预览。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「图片」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：图片 / Image",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "list",
    "nameZh": "列表",
    "nameEn": "List",
    "category": "component",
    "summary": "展示一列结构相同的数据",
    "definition": "列表（List）是 Vibehub 速查中的效果项：展示一列结构相同的数据。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「列表」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：列表 / List",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "qr-code",
    "nameZh": "二维码",
    "nameEn": "QR Code",
    "category": "component",
    "summary": "生成可扫码的二维码",
    "definition": "二维码（QR Code）是 Vibehub 速查中的效果项：生成可扫码的二维码。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「二维码」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：二维码 / QR Code",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "segmented",
    "nameZh": "分段控制器",
    "nameEn": "Segmented",
    "category": "component",
    "summary": "在几个选项间快速切换",
    "definition": "分段控制器（Segmented）是 Vibehub 速查中的效果项：在几个选项间快速切换。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「分段控制器」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：分段控制器 / Segmented",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "statistic",
    "nameZh": "统计数值",
    "nameEn": "Statistic",
    "category": "component",
    "summary": "突出展示一个关键数值",
    "definition": "统计数值（Statistic）是 Vibehub 速查中的效果项：突出展示一个关键数值。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「统计数值」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：统计数值 / Statistic",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "table",
    "nameZh": "表格",
    "nameEn": "Table",
    "category": "component",
    "summary": "展示行列结构的数据",
    "definition": "表格（Table）是 Vibehub 速查中的效果项：展示行列结构的数据。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「表格」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：表格 / Table",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "timeline",
    "nameZh": "时间轴",
    "nameEn": "Timeline",
    "category": "component",
    "summary": "按时间顺序展示一系列事件",
    "definition": "时间轴（Timeline）是 Vibehub 速查中的效果项：按时间顺序展示一系列事件。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「时间轴」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：时间轴 / Timeline",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "tree",
    "nameZh": "树形控件",
    "nameEn": "Tree",
    "category": "component",
    "summary": "展示可展开收起的层级数据",
    "definition": "树形控件（Tree）是 Vibehub 速查中的效果项：展示可展开收起的层级数据。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「树形控件」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：树形控件 / Tree",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "alert",
    "nameZh": "警告提示",
    "nameEn": "Alert",
    "category": "component",
    "summary": "以横条形式给出重要提示",
    "definition": "警告提示（Alert）是 Vibehub 速查中的效果项：以横条形式给出重要提示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「警告提示」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：警告提示 / Alert",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "notification",
    "nameZh": "通知提醒框",
    "nameEn": "Notification",
    "category": "component",
    "summary": "在角落展示较复杂的通知",
    "definition": "通知提醒框（Notification）是 Vibehub 速查中的效果项：在角落展示较复杂的通知。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「通知提醒框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：通知提醒框 / Notification",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "popconfirm",
    "nameZh": "气泡确认框",
    "nameEn": "Popconfirm",
    "category": "component",
    "summary": "操作前的就地二次确认",
    "definition": "气泡确认框（Popconfirm）是 Vibehub 速查中的效果项：操作前的就地二次确认。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「气泡确认框」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：气泡确认框 / Popconfirm",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "result",
    "nameZh": "结果",
    "nameEn": "Result",
    "category": "component",
    "summary": "反馈一组操作的处理结果",
    "definition": "结果（Result）是 Vibehub 速查中的效果项：反馈一组操作的处理结果。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「结果」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：结果 / Result",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "spin",
    "nameZh": "加载中",
    "nameEn": "Spin",
    "category": "component",
    "summary": "内容加载中的等待提示",
    "definition": "加载中（Spin）是 Vibehub 速查中的效果项：内容加载中的等待提示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「加载中」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：加载中 / Spin",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "fade",
    "nameZh": "淡入淡出",
    "nameEn": "Fade",
    "category": "animation",
    "summary": "让元素柔和地出现或消失",
    "definition": "淡入淡出（Fade）是 Vibehub 速查中的效果项：让元素柔和地出现或消失。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「淡入淡出」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：淡入淡出 / Fade",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "slide-in",
    "nameZh": "滑入",
    "nameEn": "Slide In",
    "category": "animation",
    "summary": "元素带方向地滑入视图",
    "definition": "滑入（Slide In）是 Vibehub 速查中的效果项：元素带方向地滑入视图。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滑入」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滑入 / Slide In",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "scale-in",
    "nameZh": "放大进场",
    "nameEn": "Scale In",
    "category": "animation",
    "summary": "元素由小放大地登场",
    "definition": "放大进场（Scale In）是 Vibehub 速查中的效果项：元素由小放大地登场。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「放大进场」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：放大进场 / Scale In",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "spring-in",
    "nameZh": "弹性弹出",
    "nameEn": "Spring In",
    "category": "animation",
    "summary": "带回弹的活泼弹出",
    "definition": "弹性弹出（Spring In）是 Vibehub 速查中的效果项：带回弹的活泼弹出。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「弹性弹出」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：弹性弹出 / Spring In",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "blur-in",
    "nameZh": "模糊渐显",
    "nameEn": "Blur In",
    "category": "animation",
    "summary": "由模糊到清晰地浮现",
    "definition": "模糊渐显（Blur In）是 Vibehub 速查中的效果项：由模糊到清晰地浮现。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「模糊渐显」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：模糊渐显 / Blur In",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "stagger",
    "nameZh": "错落进场",
    "nameEn": "Stagger",
    "category": "animation",
    "summary": "一组元素错落依次登场",
    "definition": "错落进场（Stagger）是 Vibehub 速查中的效果项：一组元素错落依次登场。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「错落进场」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：错落进场 / Stagger",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "clip-reveal",
    "nameZh": "遮罩揭示",
    "nameEn": "Clip Reveal",
    "category": "animation",
    "summary": "用遮罩擦除式揭示内容",
    "definition": "遮罩揭示（Clip Reveal）是 Vibehub 速查中的效果项：用遮罩擦除式揭示内容。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「遮罩揭示」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：遮罩揭示 / Clip Reveal",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "hover-lift",
    "nameZh": "悬停抬升",
    "nameEn": "Hover Lift",
    "category": "animation",
    "summary": "悬停时抬起反馈可点击",
    "definition": "悬停抬升（Hover Lift）是 Vibehub 速查中的效果项：悬停时抬起反馈可点击。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「悬停抬升」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：悬停抬升 / Hover Lift",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "ripple",
    "nameZh": "点击涟漪",
    "nameEn": "Ripple",
    "category": "animation",
    "summary": "点击处扩散的水波反馈",
    "definition": "点击涟漪（Ripple）是 Vibehub 速查中的效果项：点击处扩散的水波反馈。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「点击涟漪」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：点击涟漪 / Ripple",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "like-burst",
    "nameZh": "点赞爆裂",
    "nameEn": "Like Burst",
    "category": "animation",
    "summary": "点赞时的爆裂强调",
    "definition": "点赞爆裂（Like Burst）是 Vibehub 速查中的效果项：点赞时的爆裂强调。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「点赞爆裂」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：点赞爆裂 / Like Burst",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "magnetic",
    "nameZh": "磁吸按钮",
    "nameEn": "Magnetic",
    "category": "animation",
    "summary": "按钮轻微吸附指针",
    "definition": "磁吸按钮（Magnetic）是 Vibehub 速查中的效果项：按钮轻微吸附指针。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「磁吸按钮」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：磁吸按钮 / Magnetic",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "shake",
    "nameZh": "错误抖动",
    "nameEn": "Shake",
    "category": "animation",
    "summary": "出错时抖动以提示",
    "definition": "错误抖动（Shake）是 Vibehub 速查中的效果项：出错时抖动以提示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「错误抖动」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：错误抖动 / Shake",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "checkmark-draw",
    "nameZh": "对勾描绘",
    "nameEn": "Checkmark Draw",
    "category": "animation",
    "summary": "成功后描绘出对勾",
    "definition": "对勾描绘（Checkmark Draw）是 Vibehub 速查中的效果项：成功后描绘出对勾。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「对勾描绘」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：对勾描绘 / Checkmark Draw",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "spinner",
    "nameZh": "旋转圈",
    "nameEn": "Spinner",
    "category": "animation",
    "summary": "表示正在加载或处理",
    "definition": "旋转圈（Spinner）是 Vibehub 速查中的效果项：表示正在加载或处理。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「旋转圈」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：旋转圈 / Spinner",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "shimmer",
    "nameZh": "微光扫过",
    "nameEn": "Shimmer",
    "category": "animation",
    "summary": "加载时的微光扫过占位",
    "definition": "微光扫过（Shimmer）是 Vibehub 速查中的效果项：加载时的微光扫过占位。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「微光扫过」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：微光扫过 / Shimmer",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "progress-bar-anim",
    "nameZh": "进度条动画",
    "nameEn": "Progress Bar Anim",
    "category": "animation",
    "summary": "进度填充的过渡动画",
    "definition": "进度条动画（Progress Bar Anim）是 Vibehub 速查中的效果项：进度填充的过渡动画。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「进度条动画」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：进度条动画 / Progress Bar Anim",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "bouncing-dots",
    "nameZh": "跳动的点",
    "nameEn": "Bouncing Dots",
    "category": "animation",
    "summary": "三点跳动表示等待",
    "definition": "跳动的点（Bouncing Dots）是 Vibehub 速查中的效果项：三点跳动表示等待。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「跳动的点」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：跳动的点 / Bouncing Dots",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "pulse",
    "nameZh": "脉冲",
    "nameEn": "Pulse",
    "category": "animation",
    "summary": "节奏性缩放或透明度变化",
    "definition": "脉冲（Pulse）是 Vibehub 速查中的效果项：节奏性缩放或透明度变化。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「脉冲」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：脉冲 / Pulse",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "page-transition",
    "nameZh": "页面切换",
    "nameEn": "Page Transition",
    "category": "animation",
    "summary": "路由/页面间的过渡",
    "definition": "页面切换（Page Transition）是 Vibehub 速查中的效果项：路由/页面间的过渡。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「页面切换」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：页面切换 / Page Transition",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "container-transform",
    "nameZh": "容器变形",
    "nameEn": "Container Transform",
    "category": "animation",
    "summary": "容器形态连续变形",
    "definition": "容器变形（Container Transform）是 Vibehub 速查中的效果项：容器形态连续变形。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「容器变形」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：容器变形 / Container Transform",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "crossfade",
    "nameZh": "交叉淡化",
    "nameEn": "Crossfade",
    "category": "animation",
    "summary": "旧出新入同时淡化",
    "definition": "交叉淡化（Crossfade）是 Vibehub 速查中的效果项：旧出新入同时淡化。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「交叉淡化」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：交叉淡化 / Crossfade",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "slide-transition",
    "nameZh": "滑动转场",
    "nameEn": "Slide Transition",
    "category": "animation",
    "summary": "页面横向或纵向滑动切换",
    "definition": "滑动转场（Slide Transition）是 Vibehub 速查中的效果项：页面横向或纵向滑动切换。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滑动转场」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滑动转场 / Slide Transition",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "scroll-reveal",
    "nameZh": "滚动渐显",
    "nameEn": "Scroll Reveal",
    "category": "animation",
    "summary": "滚入视口时渐显",
    "definition": "滚动渐显（Scroll Reveal）是 Vibehub 速查中的效果项：滚入视口时渐显。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滚动渐显」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滚动渐显 / Scroll Reveal",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "scroll-progress",
    "nameZh": "滚动进度",
    "nameEn": "Scroll Progress",
    "category": "animation",
    "summary": "随滚动更新的进度指示",
    "definition": "滚动进度（Scroll Progress）是 Vibehub 速查中的效果项：随滚动更新的进度指示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滚动进度」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滚动进度 / Scroll Progress",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "horizontal-scroll",
    "nameZh": "横向滚动",
    "nameEn": "Horizontal Scroll",
    "category": "animation",
    "summary": "横向滚动画廊或章节",
    "definition": "横向滚动（Horizontal Scroll）是 Vibehub 速查中的效果项：横向滚动画廊或章节。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「横向滚动」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：横向滚动 / Horizontal Scroll",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "scrollytelling",
    "nameZh": "滚动叙事",
    "nameEn": "Scrollytelling",
    "category": "animation",
    "summary": "滚动驱动的叙事推进",
    "definition": "滚动叙事（Scrollytelling）是 Vibehub 速查中的效果项：滚动驱动的叙事推进。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「滚动叙事」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：滚动叙事 / Scrollytelling",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "pulse-glow",
    "nameZh": "脉冲发光",
    "nameEn": "Pulse Glow",
    "category": "animation",
    "summary": "光晕脉冲吸引注意",
    "definition": "脉冲发光（Pulse Glow）是 Vibehub 速查中的效果项：光晕脉冲吸引注意。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「脉冲发光」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：脉冲发光 / Pulse Glow",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "bounce",
    "nameZh": "弹跳",
    "nameEn": "Bounce",
    "category": "animation",
    "summary": "弹跳强调出现或点击",
    "definition": "弹跳（Bounce）是 Vibehub 速查中的效果项：弹跳强调出现或点击。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「弹跳」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：弹跳 / Bounce",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "wiggle",
    "nameZh": "摇摆",
    "nameEn": "Wiggle",
    "category": "animation",
    "summary": "轻微左右摇摆提示",
    "definition": "摇摆（Wiggle）是 Vibehub 速查中的效果项：轻微左右摇摆提示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「摇摆」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：摇摆 / Wiggle",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "flash",
    "nameZh": "闪烁高亮",
    "nameEn": "Flash",
    "category": "animation",
    "summary": "短暂闪烁以强调变更",
    "definition": "闪烁高亮（Flash）是 Vibehub 速查中的效果项：短暂闪烁以强调变更。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「闪烁高亮」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：闪烁高亮 / Flash",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "badge-pop",
    "nameZh": "角标动画",
    "nameEn": "Badge Pop",
    "category": "animation",
    "summary": "角标弹出或跳动",
    "definition": "角标动画（Badge Pop）是 Vibehub 速查中的效果项：角标弹出或跳动。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「角标动画」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：角标动画 / Badge Pop",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "animated-gradient",
    "nameZh": "流动渐变",
    "nameEn": "Animated Gradient",
    "category": "animation",
    "summary": "渐变色持续流动",
    "definition": "流动渐变（Animated Gradient）是 Vibehub 速查中的效果项：渐变色持续流动。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「流动渐变」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：流动渐变 / Animated Gradient",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "floating",
    "nameZh": "漂浮元素",
    "nameEn": "Floating",
    "category": "animation",
    "summary": "元素缓慢上下漂浮",
    "definition": "漂浮元素（Floating）是 Vibehub 速查中的效果项：元素缓慢上下漂浮。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「漂浮元素」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：漂浮元素 / Floating",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "marquee",
    "nameZh": "跑马灯",
    "nameEn": "Marquee",
    "category": "animation",
    "summary": "文字或内容循环滚动",
    "definition": "跑马灯（Marquee）是 Vibehub 速查中的效果项：文字或内容循环滚动。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「跑马灯」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：跑马灯 / Marquee",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "blob",
    "nameZh": "流体",
    "nameEn": "Blob",
    "category": "animation",
    "summary": "有机流体形状变形",
    "definition": "流体（Blob）是 Vibehub 速查中的效果项：有机流体形状变形。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「流体」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：流体 / Blob",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "breathing",
    "nameZh": "呼吸待机",
    "nameEn": "Breathing",
    "category": "animation",
    "summary": "缓慢呼吸式缩放",
    "definition": "呼吸待机（Breathing）是 Vibehub 速查中的效果项：缓慢呼吸式缩放。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「呼吸待机」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：呼吸待机 / Breathing",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "typewriter",
    "nameZh": "打字机",
    "nameEn": "Typewriter",
    "category": "animation",
    "summary": "文字逐字打出",
    "definition": "打字机（Typewriter）是 Vibehub 速查中的效果项：文字逐字打出。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「打字机」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：打字机 / Typewriter",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "text-scramble",
    "nameZh": "文字解码",
    "nameEn": "Text Scramble",
    "category": "animation",
    "summary": "乱码逐渐解码成文字",
    "definition": "文字解码（Text Scramble）是 Vibehub 速查中的效果项：乱码逐渐解码成文字。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「文字解码」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：文字解码 / Text Scramble",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "split-text",
    "nameZh": "逐字进场",
    "nameEn": "Split Text",
    "category": "animation",
    "summary": "按字/词错落入场",
    "definition": "逐字进场（Split Text）是 Vibehub 速查中的效果项：按字/词错落入场。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「逐字进场」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：逐字进场 / Split Text",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "gradient-text",
    "nameZh": "渐变流动文字",
    "nameEn": "Gradient Text",
    "category": "animation",
    "summary": "文字上的流动渐变",
    "definition": "渐变流动文字（Gradient Text）是 Vibehub 速查中的效果项：文字上的流动渐变。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「渐变流动文字」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：渐变流动文字 / Gradient Text",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "count-up",
    "nameZh": "数字滚动",
    "nameEn": "Count Up",
    "category": "animation",
    "summary": "数字从旧值滚到新值",
    "definition": "数字滚动（Count Up）是 Vibehub 速查中的效果项：数字从旧值滚到新值。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「数字滚动」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：数字滚动 / Count Up",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "flip",
    "nameZh": "翻转",
    "nameEn": "Flip",
    "category": "animation",
    "summary": "卡片或文字翻转",
    "definition": "翻转（Flip）是 Vibehub 速查中的效果项：卡片或文字翻转。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「翻转」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：翻转 / Flip",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "cube-rotation",
    "nameZh": "立方体旋转",
    "nameEn": "Cube Rotation",
    "category": "animation",
    "summary": "立方体面旋转切换",
    "definition": "立方体旋转（Cube Rotation）是 Vibehub 速查中的效果项：立方体面旋转切换。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「立方体旋转」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：立方体旋转 / Cube Rotation",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "navbar",
    "nameZh": "顶部导航栏",
    "nameEn": "Navbar",
    "category": "layout",
    "summary": "页面顶部的主导航栏",
    "definition": "顶部导航栏（Navbar）是 Vibehub 速查中的效果项：页面顶部的主导航栏。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「顶部导航栏」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：顶部导航栏 / Navbar",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "holy-grail",
    "nameZh": "圣杯布局",
    "nameEn": "Holy Grail",
    "category": "layout",
    "summary": "头-侧-主-脚的经典分区",
    "definition": "圣杯布局（Holy Grail）是 Vibehub 速查中的效果项：头-侧-主-脚的经典分区。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「圣杯布局」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：圣杯布局 / Holy Grail",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "card-grid",
    "nameZh": "卡片网格",
    "nameEn": "Card Grid",
    "category": "layout",
    "summary": "等分或自适应卡片网格",
    "definition": "卡片网格（Card Grid）是 Vibehub 速查中的效果项：等分或自适应卡片网格。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「卡片网格」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：卡片网格 / Card Grid",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "single-column",
    "nameZh": "单列堆叠",
    "nameEn": "Single Column",
    "category": "layout",
    "summary": "内容垂直单列排布",
    "definition": "单列堆叠（Single Column）是 Vibehub 速查中的效果项：内容垂直单列排布。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「单列堆叠」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：单列堆叠 / Single Column",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "sidebar",
    "nameZh": "侧边栏布局",
    "nameEn": "Sidebar",
    "category": "layout",
    "summary": "侧栏导航 + 主内容区",
    "definition": "侧边栏布局（Sidebar）是 Vibehub 速查中的效果项：侧栏导航 + 主内容区。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「侧边栏布局」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：侧边栏布局 / Sidebar",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "list-detail",
    "nameZh": "列表-详情",
    "nameEn": "List-Detail",
    "category": "layout",
    "summary": "左侧列表右侧详情",
    "definition": "列表-详情（List-Detail）是 Vibehub 速查中的效果项：左侧列表右侧详情。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「列表-详情」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：列表-详情 / List-Detail",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "dashboard-grid",
    "nameZh": "仪表盘网格",
    "nameEn": "Dashboard Grid",
    "category": "layout",
    "summary": "仪表盘多模块网格",
    "definition": "仪表盘网格（Dashboard Grid）是 Vibehub 速查中的效果项：仪表盘多模块网格。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「仪表盘网格」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：仪表盘网格 / Dashboard Grid",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "hero",
    "nameZh": "英雄区",
    "nameEn": "Hero",
    "category": "layout",
    "summary": "首屏大标题与主视觉区",
    "definition": "英雄区（Hero）是 Vibehub 速查中的效果项：首屏大标题与主视觉区。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「英雄区」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：英雄区 / Hero",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "masonry",
    "nameZh": "瀑布流",
    "nameEn": "Masonry",
    "category": "layout",
    "summary": "不等高卡片瀑布排布",
    "definition": "瀑布流（Masonry）是 Vibehub 速查中的效果项：不等高卡片瀑布排布。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「瀑布流」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：瀑布流 / Masonry",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "centered",
    "nameZh": "居中容器",
    "nameEn": "Centered",
    "category": "layout",
    "summary": "内容水平垂直居中",
    "definition": "居中容器（Centered）是 Vibehub 速查中的效果项：内容水平垂直居中。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「居中容器」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：居中容器 / Centered",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "media-object",
    "nameZh": "图文左右",
    "nameEn": "Media Object",
    "category": "layout",
    "summary": "媒体与文字左右对齐",
    "definition": "图文左右（Media Object）是 Vibehub 速查中的效果项：媒体与文字左右对齐。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「图文左右」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：图文左右 / Media Object",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "color",
    "nameZh": "色彩",
    "nameEn": "Color",
    "category": "tokens",
    "summary": "品牌与语义色彩令牌",
    "definition": "色彩（Color）是 Vibehub 速查中的效果项：品牌与语义色彩令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「色彩」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：色彩 / Color",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "typography",
    "nameZh": "字体排版",
    "nameEn": "Typography",
    "category": "tokens",
    "summary": "字号字重行高令牌",
    "definition": "字体排版（Typography）是 Vibehub 速查中的效果项：字号字重行高令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「字体排版」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：字体排版 / Typography",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "spacing",
    "nameZh": "间距",
    "nameEn": "Spacing",
    "category": "tokens",
    "summary": "内外边距尺度令牌",
    "definition": "间距（Spacing）是 Vibehub 速查中的效果项：内外边距尺度令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「间距」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：间距 / Spacing",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "radius",
    "nameZh": "圆角",
    "nameEn": "Radius",
    "category": "tokens",
    "summary": "圆角半径令牌",
    "definition": "圆角（Radius）是 Vibehub 速查中的效果项：圆角半径令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「圆角」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：圆角 / Radius",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "shadow",
    "nameZh": "阴影",
    "nameEn": "Shadow",
    "category": "tokens",
    "summary": "海拔阴影令牌",
    "definition": "阴影（Shadow）是 Vibehub 速查中的效果项：海拔阴影令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「阴影」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：阴影 / Shadow",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "breakpoint",
    "nameZh": "断点",
    "nameEn": "Breakpoint",
    "category": "tokens",
    "summary": "响应式断点令牌",
    "definition": "断点（Breakpoint）是 Vibehub 速查中的效果项：响应式断点令牌。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「断点」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：断点 / Breakpoint",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "line-draw",
    "nameZh": "路径自绘",
    "nameEn": "Line Draw",
    "category": "svg",
    "summary": "路径描边自绘动画",
    "definition": "路径自绘（Line Draw）是 Vibehub 速查中的效果项：路径描边自绘动画。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「路径自绘」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：路径自绘 / Line Draw",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "signature",
    "nameZh": "手写签名",
    "nameEn": "Signature",
    "category": "svg",
    "summary": "手写笔迹呈现",
    "definition": "手写签名（Signature）是 Vibehub 速查中的效果项：手写笔迹呈现。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「手写签名」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：手写签名 / Signature",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "marching-ants",
    "nameZh": "行进虚线",
    "nameEn": "Marching Ants",
    "category": "svg",
    "summary": "虚线沿路径行进",
    "definition": "行进虚线（Marching Ants）是 Vibehub 速查中的效果项：虚线沿路径行进。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「行进虚线」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：行进虚线 / Marching Ants",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "icon-trace",
    "nameZh": "图标描边",
    "nameEn": "Icon Trace",
    "category": "svg",
    "summary": "图标描边勾勒",
    "definition": "图标描边（Icon Trace）是 Vibehub 速查中的效果项：图标描边勾勒。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「图标描边」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：图标描边 / Icon Trace",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "neon-glow",
    "nameZh": "霓虹辉光",
    "nameEn": "Neon Glow",
    "category": "svg",
    "summary": "霓虹发光描边",
    "definition": "霓虹辉光（Neon Glow）是 Vibehub 速查中的效果项：霓虹发光描边。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「霓虹辉光」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：霓虹辉光 / Neon Glow",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "gooey",
    "nameZh": "融合黏滞",
    "nameEn": "Gooey",
    "category": "svg",
    "summary": "图形融合黏滞效果",
    "definition": "融合黏滞（Gooey）是 Vibehub 速查中的效果项：图形融合黏滞效果。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「融合黏滞」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：融合黏滞 / Gooey",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "grain",
    "nameZh": "颗粒噪点",
    "nameEn": "Grain",
    "category": "svg",
    "summary": "颗粒噪点纹理",
    "definition": "颗粒噪点（Grain）是 Vibehub 速查中的效果项：颗粒噪点纹理。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「颗粒噪点」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：颗粒噪点 / Grain",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "liquid",
    "nameZh": "液态扭曲",
    "nameEn": "Liquid",
    "category": "svg",
    "summary": "液态扭曲变形",
    "definition": "液态扭曲（Liquid）是 Vibehub 速查中的效果项：液态扭曲变形。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「液态扭曲」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：液态扭曲 / Liquid",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "linear",
    "nameZh": "线性渐变",
    "nameEn": "Linear",
    "category": "svg",
    "summary": "SVG 线性渐变填充",
    "definition": "线性渐变（Linear）是 Vibehub 速查中的效果项：SVG 线性渐变填充。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「线性渐变」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：线性渐变 / Linear",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "radial",
    "nameZh": "径向渐变",
    "nameEn": "Radial",
    "category": "svg",
    "summary": "SVG 径向渐变填充",
    "definition": "径向渐变（Radial）是 Vibehub 速查中的效果项：SVG 径向渐变填充。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「径向渐变」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：径向渐变 / Radial",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "animated-gradient-svg",
    "nameZh": "流动渐变SVG",
    "nameEn": "Animated Gradient SVG",
    "category": "svg",
    "summary": "SVG 流动渐变",
    "definition": "流动渐变SVG（Animated Gradient SVG）是 Vibehub 速查中的效果项：SVG 流动渐变。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「流动渐变SVG」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：流动渐变SVG / Animated Gradient SVG",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "progress-ring",
    "nameZh": "进度环",
    "nameEn": "Progress Ring",
    "category": "svg",
    "summary": "环形进度指示",
    "definition": "进度环（Progress Ring）是 Vibehub 速查中的效果项：环形进度指示。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「进度环」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：进度环 / Progress Ring",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "gauge",
    "nameZh": "仪表盘",
    "nameEn": "Gauge",
    "category": "svg",
    "summary": "半圆仪表读数",
    "definition": "仪表盘（Gauge）是 Vibehub 速查中的效果项：半圆仪表读数。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「仪表盘」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：仪表盘 / Gauge",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "donut",
    "nameZh": "环形图",
    "nameEn": "Donut",
    "category": "svg",
    "summary": "环形占比图",
    "definition": "环形图（Donut）是 Vibehub 速查中的效果项：环形占比图。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「环形图」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：环形图 / Donut",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "sparkline",
    "nameZh": "迷你折线",
    "nameEn": "Sparkline",
    "category": "svg",
    "summary": "迷你趋势折线",
    "definition": "迷你折线（Sparkline）是 Vibehub 速查中的效果项：迷你趋势折线。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「迷你折线」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：迷你折线 / Sparkline",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "blob-shape",
    "nameZh": "流体形状",
    "nameEn": "Blob Shape",
    "category": "svg",
    "summary": "有机流体 SVG 形状",
    "definition": "流体形状（Blob Shape）是 Vibehub 速查中的效果项：有机流体 SVG 形状。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「流体形状」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：流体形状 / Blob Shape",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "wave-divider",
    "nameZh": "波浪分隔",
    "nameEn": "Wave Divider",
    "category": "svg",
    "summary": "波浪形区块分隔",
    "definition": "波浪分隔（Wave Divider）是 Vibehub 速查中的效果项：波浪形区块分隔。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「波浪分隔」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：波浪分隔 / Wave Divider",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  },
  {
    "id": "squiggle",
    "nameZh": "波浪下划线",
    "nameEn": "Squiggle",
    "category": "svg",
    "summary": "波浪下划线装饰",
    "definition": "波浪下划线（Squiggle）是 Vibehub 速查中的效果项：波浪下划线装饰。本页提供可操作/可观察的复刻演示，便于统一叫法与交给 AI 复现。",
    "whenToUse": [
      "需要展示或复用「波浪下划线」这一常见 UI/动效形态时",
      "向产品/设计对齐命名与预期效果时"
    ],
    "whenNotToUse": [
      "与业务语义不符时强行套用",
      "无障碍或性能约束下应简化的场景"
    ],
    "variants": [
      "默认态",
      "强调/激活态",
      "减弱动效降级"
    ],
    "related": [],
    "collab": {
      "states": [
        "idle",
        "active",
        "done"
      ],
      "api": [
        "多为前端表现层；若绑定数据需明确数据源与刷新时机"
      ],
      "productNotes": [
        "对外文档使用标准名：波浪下划线 / Squiggle",
        "复制「复制给 AI」文案可快速复现"
      ]
    },
    "confuseWith": []
  }
]
