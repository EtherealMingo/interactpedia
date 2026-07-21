import { Link, useParams } from 'react-router-dom'
import { getPattern } from '../content/patterns'
import { CATEGORIES } from '../content/types'
import { demoMap } from '../demos'
import { DeviceFrame, deviceForPattern } from '../components/DeviceFrame'
import styles from './PatternDetailPage.module.css'

export function PatternDetailPage() {
  const { id } = useParams()
  const pattern = id ? getPattern(id) : undefined

  if (!pattern) {
    return (
      <div className={styles.missing}>
        <h1>未找到词条</h1>
        <p>
          <Link to="/catalog">返回目录</Link>
        </p>
      </div>
    )
  }

  const Demo = demoMap[pattern.id]
  const cat = CATEGORIES.find((c) => c.id === pattern.category)
  const related = pattern.related
    .map((rid) => getPattern(rid))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
  const confuse = pattern.confuseWith
    .map((c) => ({ ...c, pattern: getPattern(c.id) }))
    .filter((c) => c.pattern)

  return (
    <article className={styles.page}>
      <nav className={styles.crumb}>
        <Link to="/catalog">目录</Link>
        <span>/</span>
        <span>{pattern.nameZh}</span>
      </nav>

      <header className={styles.header}>
        <p className={styles.cat}>{cat?.label}</p>
        <h1>
          {pattern.nameZh}
          <span className={styles.en}>{pattern.nameEn}</span>
        </h1>
        {pattern.aliases && (
          <p className={styles.alias}>别名：{pattern.aliases.join('、')}</p>
        )}
        <p className={styles.summary}>{pattern.summary}</p>
        <code className={styles.id}>id: {pattern.id}</code>
      </header>

      <div className={styles.grid}>
        <section className={styles.demoPane} aria-label="现场演示">
          <h2>Live Demo</h2>
          <div className={styles.demoFrame}>
            <DeviceFrame kind={deviceForPattern(pattern)} size="md">
              {Demo ? <Demo /> : <p>暂无演示</p>}
            </DeviceFrame>
          </div>
        </section>

        <div className={styles.copy}>
          <section>
            <h2>是什么</h2>
            <p>{pattern.definition}</p>
          </section>

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

          <section>
            <h2>常见变体</h2>
            <ul>
              {pattern.variants.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <section className={styles.collab}>
            <h2>产研协作</h2>
            <h3>状态要点</h3>
            <ul>
              {pattern.collab.states.map((t) => (
                <li key={t}>
                  <code>{t}</code>
                </li>
              ))}
            </ul>
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
          </section>

          {confuse.length > 0 && (
            <section>
              <h2>易混淆对比</h2>
              <ul>
                {confuse.map((c) => (
                  <li key={c.id}>
                    <Link to={`/pattern/${c.id}`}>{c.pattern!.nameZh}</Link>
                    <span className={styles.note}> — {c.note}</span>
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
                  <Link key={r.id} to={`/pattern/${r.id}`}>
                    {r.nameZh}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}
