import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CATEGORIES, type CategoryId, type Pattern } from '../content/types'
import { getPattern, patterns, searchPatterns } from '../content/patterns'
import { getExtras } from '../content/extras'
import { demoMap } from '../demos'
import { DeviceFrame, deviceForPattern } from './DeviceFrame'
import styles from './PatternExplorer.module.css'

function patternsByCategory(filterQ: string) {
  return CATEGORIES.map((c) => ({
    ...c,
    items: searchPatterns(filterQ, c.id),
  })).filter((c) => c.items.length > 0)
}

export function PatternExplorer({
  brandTitle = 'Interactpedia',
  brandSub = '交互速查',
}: {
  brandTitle?: string
  brandSub?: string
}) {
  const [params, setParams] = useSearchParams()
  const selectedId = params.get('id') ?? patterns[0]?.id ?? ''
  const [q, setQ] = useState('')
  const [openCats, setOpenCats] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    for (const c of CATEGORIES) initial[c.id] = true
    return initial
  })
  const [copied, setCopied] = useState(false)

  const groups = useMemo(() => patternsByCategory(q), [q])
  const pattern = getPattern(selectedId) ?? patterns[0]
  const Demo = pattern ? demoMap[pattern.id] : undefined
  const cat = pattern ? CATEGORIES.find((c) => c.id === pattern.category) : undefined
  const extras = pattern ? getExtras(pattern) : null

  const related = (pattern?.related ?? [])
    .map((rid) => getPattern(rid))
    .filter((p): p is Pattern => Boolean(p))
  const confuse = (pattern?.confuseWith ?? [])
    .map((c) => ({ ...c, target: getPattern(c.id) }))
    .filter((c) => c.target)

  useEffect(() => {
    if (!params.get('id') && patterns[0]) {
      const p = new URLSearchParams(params)
      p.set('id', patterns[0].id)
      setParams(p, { replace: true })
    }
  }, [params, setParams])

  useEffect(() => {
    if (!pattern) return
    setOpenCats((prev) => ({ ...prev, [pattern.category]: true }))
  }, [pattern])

  const select = (id: string) => {
    const p = new URLSearchParams(params)
    p.set('id', id)
    setParams(p)
    setCopied(false)
  }

  const toggleCat = (id: CategoryId) => {
    setOpenCats((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const copyPrompt = async () => {
    if (!pattern) return
    const text = [
      `交互名称：${pattern.nameZh}（${pattern.nameEn}）`,
      `定义：${pattern.definition}`,
      `适用：${pattern.whenToUse.join('；')}`,
      `注意：${pattern.whenNotToUse.join('；')}`,
      `请按以上交互实现 UI，并保持可访问性。`,
    ].join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  if (!pattern || !extras) {
    return <p className={styles.empty}>暂无词条</p>
  }

  return (
    <div className={styles.page}>
      <aside className={styles.menu} aria-label="二级目录">
        <div className={styles.brandBlock}>
          <p className={styles.eyebrow}>{brandSub}</p>
          <p className={styles.brandLine}>{brandTitle}</p>
        </div>

        <input
          className={styles.search}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="筛选目录…"
          aria-label="筛选目录"
        />

        <nav className={styles.tree}>
          {groups.map((group) => {
            const expanded = openCats[group.id] !== false
            return (
              <div key={group.id} className={styles.group}>
                <button
                  type="button"
                  className={styles.groupBtn}
                  aria-expanded={expanded}
                  onClick={() => toggleCat(group.id)}
                >
                  <span className={styles.chevron} data-open={expanded}>
                    ▸
                  </span>
                  <span className={styles.groupLabel}>{group.label}</span>
                  <span className={styles.badge}>{group.items.length}</span>
                </button>
                {expanded && (
                  <ul className={styles.subList}>
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className={
                            item.id === pattern.id ? styles.subItemOn : styles.subItem
                          }
                          onClick={() => select(item.id)}
                        >
                          {item.nameZh}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
          {groups.length === 0 && <p className={styles.menuEmpty}>无匹配目录</p>}
        </nav>
      </aside>

      <section className={styles.stage} aria-label="当前交互">
        {/* Vibehub-style effect card: preview on top, meta footer */}
        <article className={styles.effectCard} key={pattern.id}>
          <div className={styles.preview}>
            <DeviceFrame kind={deviceForPattern(pattern)} size="lg">
              {Demo ? <Demo /> : <p className={styles.noDemo}>暂无演示</p>}
            </DeviceFrame>
          </div>
          <footer className={styles.meta}>
            <div className={styles.metaMain}>
              <h1 className={styles.title}>
                {pattern.nameZh}
                <span className={styles.en}>{pattern.nameEn}</span>
              </h1>
              <p className={styles.desc}>{pattern.summary}</p>
            </div>
            <div className={styles.metaSide}>
              <span className={styles.catTag}>{cat?.label}</span>
              <button type="button" className={styles.copyBtn} onClick={copyPrompt}>
                {copied ? '已复制' : '复制给 AI'}
              </button>
            </div>
          </footer>
        </article>

        <div className={styles.docs}>
          <section>
            <h2>是什么</h2>
            <p>{pattern.definition}</p>
          </section>

          <div className={styles.docGrid}>
            <section>
              <h2>何时用</h2>
              <ul>
                {pattern.whenToUse.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>何时不用</h2>
              <ul>
                {pattern.whenNotToUse.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          </div>

          <section>
            <h2>真实场景</h2>
            <ul>
              {extras.scenarios.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2>常见变体</h2>
            <ul className={styles.chips}>
              {pattern.variants.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <section className={styles.collab}>
            <h2>产研协作</h2>
            <h3>状态机</h3>
            <p className={styles.stateFlow}>{pattern.collab.states.join(' → ')}</p>
            <h3>接口 / 时序</h3>
            <ul>
              {pattern.collab.api.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3>产品注意</h3>
            <ul>
              {pattern.collab.productNotes.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3>实现提示</h3>
            <ul>
              {extras.implTips.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <div className={styles.docGrid}>
            <section>
              <h2>无障碍</h2>
              <ul>
                {extras.a11y.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2>常见坑</h2>
              <ul>
                {extras.pitfalls.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          </div>

          {confuse.length > 0 && (
            <section>
              <h2>易混淆对比</h2>
              <ul>
                {confuse.map((c) => (
                  <li key={c.id}>
                    <button type="button" className={styles.textLink} onClick={() => select(c.id)}>
                      {c.target!.nameZh}
                    </button>
                    <span> — {c.note}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section>
              <h2>相关词条</h2>
              <div className={styles.related}>
                {related.map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    className={styles.relatedBtn}
                    onClick={() => select(r.id)}
                  >
                    {r.nameZh}
                  </button>
                ))}
              </div>
            </section>
          )}

          <p className={styles.more}>
            <code>id: {pattern.id}</code>
            {' · '}
            <Link to={`/pattern/${pattern.id}`}>独立词条页</Link>
            {' · '}
            <a href="/docs/ui-interaction-catalog.zh.md" target="_blank" rel="noreferrer">
              全景文档
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
