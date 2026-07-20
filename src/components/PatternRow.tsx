import { Link } from 'react-router-dom'
import type { Pattern } from '../content/types'
import { CATEGORIES } from '../content/types'
import styles from './PatternRow.module.css'

export function PatternRow({ pattern, index }: { pattern: Pattern; index: number }) {
  const cat = CATEGORIES.find((c) => c.id === pattern.category)
  return (
    <Link
      to={`/pattern/${pattern.id}`}
      className={`${styles.row} fade-up`}
      style={{ animationDelay: `${Math.min(index, 8) * 0.04}s` }}
    >
      <div>
        <div className={styles.title}>
          <span>{pattern.nameZh}</span>
          <span className={styles.en}>{pattern.nameEn}</span>
        </div>
        <p className={styles.summary}>{pattern.summary}</p>
      </div>
      <span className={styles.cat}>{cat?.label}</span>
    </Link>
  )
}
