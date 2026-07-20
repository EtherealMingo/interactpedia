import { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIES, type Pattern } from '../content/types'
import { patterns } from '../content/patterns'
import { demoMap } from '../demos'
import styles from './PracticePage.module.css'

type Round = {
  answer: Pattern
  choices: Pattern[]
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRound(pool: Pattern[], avoidId?: string): Round {
  const candidates = avoidId ? pool.filter((p) => p.id !== avoidId) : pool
  const answer = candidates[Math.floor(Math.random() * candidates.length)] ?? pool[0]
  const sameCat = pool.filter((p) => p.category === answer.category && p.id !== answer.id)
  const others = pool.filter((p) => p.id !== answer.id && p.category !== answer.category)
  const distractors = shuffle([...shuffle(sameCat).slice(0, 2), ...shuffle(others)]).slice(0, 3)
  // ensure 3 unique distractors
  const seen = new Set([answer.id])
  const unique: Pattern[] = []
  for (const p of [...distractors, ...shuffle(others), ...shuffle(sameCat)]) {
    if (seen.has(p.id)) continue
    seen.add(p.id)
    unique.push(p)
    if (unique.length === 3) break
  }
  return { answer, choices: shuffle([answer, ...unique]) }
}

export function PracticePage() {
  const pool = useMemo(() => patterns.filter((p) => Boolean(demoMap[p.id])), [])
  const [round, setRound] = useState<Round>(() => pickRound(pool))
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ correct: 0, total: 0, streak: 0 })

  const Demo = demoMap[round.answer.id]
  const cat = CATEGORIES.find((c) => c.id === round.answer.category)
  const revealed = picked !== null
  const isCorrect = picked === round.answer.id

  const next = useCallback(() => {
    setRound(pickRound(pool, round.answer.id))
    setPicked(null)
  }, [pool, round.answer.id])

  const choose = (id: string) => {
    if (picked) return
    setPicked(id)
    const ok = id === round.answer.id
    setScore((s) => ({
      correct: s.correct + (ok ? 1 : 0),
      total: s.total + 1,
      streak: ok ? s.streak + 1 : 0,
    }))
  }

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>名称练习 · NAME DRILL</p>
        <h1 className={styles.title}>看效果，选名称</h1>
        <p className={styles.lead}>
          先观察演示，再从四个选项里选出正确叫法。练的是统一命名，不是答题技巧。
        </p>
        <div className={styles.stats}>
          <span>
            正确 <strong>{score.correct}</strong> / {score.total}
          </span>
          <span>
            连对 <strong>{score.streak}</strong>
          </span>
          {score.total > 0 && (
            <span>
              准确率{' '}
              <strong>{Math.round((score.correct / score.total) * 100)}%</strong>
            </span>
          )}
        </div>
      </header>

      <div className={styles.board}>
        <article className={styles.previewCard}>
          <div className={styles.preview}>
            <div className={styles.previewInner} key={round.answer.id}>
              {Demo ? <Demo /> : <p>暂无演示</p>}
            </div>
          </div>
          <p className={styles.hint}>
            {revealed
              ? isCorrect
                ? '答对了。记住这个叫法，继续下一题。'
                : '不对。对照正确答案再看一遍演示。'
              : '观察交互行为，选出它的标准名称。'}
          </p>
        </article>

        <section className={styles.quiz} aria-label="名称选项">
          <h2 className={styles.qTitle}>这是什么？</h2>
          <ul className={styles.choices}>
            {round.choices.map((c, i) => {
              let cls = styles.choice
              if (revealed) {
                if (c.id === round.answer.id) cls = styles.choiceCorrect
                else if (c.id === picked) cls = styles.choiceWrong
                else cls = styles.choiceDim
              }
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    className={cls}
                    onClick={() => choose(c.id)}
                    disabled={revealed}
                  >
                    <span className={styles.idx}>{String.fromCharCode(65 + i)}</span>
                    <span className={styles.choiceText}>
                      <strong>{c.nameZh}</strong>
                      <em>{c.nameEn}</em>
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {revealed && (
            <div className={styles.reveal}>
              <p className={styles.answerLine}>
                正确答案：
                <strong>
                  {round.answer.nameZh}
                  <span> · {round.answer.nameEn}</span>
                </strong>
                {cat && <span className={styles.tag}>{cat.label}</span>}
              </p>
              <p className={styles.summary}>{round.answer.summary}</p>
              <div className={styles.actions}>
                <button type="button" className={styles.nextBtn} onClick={next}>
                  下一题
                </button>
                <Link className={styles.detailLink} to={`/catalog?id=${round.answer.id}`}>
                  去目录看加深说明
                </Link>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
