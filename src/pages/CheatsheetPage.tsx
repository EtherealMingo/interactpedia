import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, type CategoryId, type Pattern } from '../content/types'
import { patterns, searchPatterns } from '../content/patterns'
import { demoMap } from '../demos'
import styles from './CheatsheetPage.module.css'

function copyPrompt(pattern: Pattern) {
  const text = [
    `交互名称：${pattern.nameZh}（${pattern.nameEn}）`,
    `定义：${pattern.definition}`,
    `适用：${pattern.whenToUse.join('；')}`,
    `注意：${pattern.whenNotToUse.join('；')}`,
    `请按以上交互实现 UI，并保持可访问性。`,
  ].join('\n')
  return navigator.clipboard.writeText(text)
}

function EffectCard({ pattern }: { pattern: Pattern }) {
  const Demo = demoMap[pattern.id]
  const [copied, setCopied] = useState(false)
  const cat = CATEGORIES.find((c) => c.id === pattern.category)

  const onCopy = async () => {
    try {
      await copyPrompt(pattern)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <article className={styles.card} id={pattern.id}>
      <div className={styles.preview}>
        <div className={styles.previewInner}>
          {Demo ? <Demo /> : <p className={styles.noDemo}>暂无演示</p>}
        </div>
      </div>
      <footer className={styles.meta}>
        <div className={styles.metaText}>
          <h3 className={styles.name}>
            <Link to={`/catalog?id=${pattern.id}`}>{pattern.nameZh}</Link>
            <span className={styles.en}>{pattern.nameEn}</span>
          </h3>
          <p className={styles.summary}>{pattern.summary}</p>
        </div>
        <div className={styles.metaActions}>
          {cat && <span className={styles.tag}>{cat.label}</span>}
          <button type="button" className={styles.copyBtn} onClick={onCopy}>
            {copied ? '已复制' : '复制给 AI'}
          </button>
        </div>
      </footer>
    </article>
  )
}

export function CheatsheetPage() {
  const [q, setQ] = useState('')
  const [catFilter, setCatFilter] = useState<CategoryId | 'all'>('all')

  const groups = useMemo(() => {
    return CATEGORIES.map((c) => ({
      ...c,
      items: searchPatterns(q, c.id),
    })).filter((c) => c.items.length > 0)
  }, [q])

  const visibleGroups = useMemo(() => {
    if (catFilter === 'all') return groups
    return groups.filter((g) => g.id === catFilter)
  }, [groups, catFilter])

  const total = useMemo(
    () => visibleGroups.reduce((n, g) => n + g.items.length, 0),
    [visibleGroups],
  )

  const filterChips = useMemo(() => {
    const base = [{ id: 'all' as const, label: '全部', count: patterns.length }]
    return [
      ...base,
      ...CATEGORIES.map((c) => ({
        id: c.id,
        label: c.label,
        count: searchPatterns('', c.id).length,
      })).filter((c) => c.count > 0),
    ]
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>UI 速查 · QUICK REFERENCE</p>
        <h1 className={styles.title}>组件、动画与布局，一屏速览。</h1>
        <p className={styles.lead}>
          按分类铺开全部可演示效果，点名称进目录看加深说明，或复制给 AI 复现。
        </p>
        <input
          className={styles.search}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜索名称、别名、英文…"
          aria-label="搜索效果"
        />
        <div className={styles.chips} role="tablist" aria-label="分类筛选">
          {filterChips.map((chip) => (
            <button
              key={chip.id}
              type="button"
              role="tab"
              aria-selected={catFilter === chip.id}
              className={catFilter === chip.id ? styles.chipOn : styles.chip}
              onClick={() => setCatFilter(chip.id)}
            >
              {chip.label}
              <span className={styles.chipCount}>{chip.count}</span>
            </button>
          ))}
        </div>
        <p className={styles.count}>{total} 项</p>
      </header>

      <div className={styles.sections}>
        {visibleGroups.map((group) => (
          <section key={group.id} className={styles.section} id={`cat-${group.id}`}>
            <div className={styles.sectionHead}>
              <h2>{group.label}</h2>
              <p>{group.blurb}</p>
            </div>
            <div className={styles.grid}>
              {group.items.map((item) => (
                <EffectCard key={item.id} pattern={item} />
              ))}
            </div>
          </section>
        ))}
        {visibleGroups.length === 0 && <p className={styles.empty}>无匹配效果</p>}
      </div>
    </div>
  )
}
