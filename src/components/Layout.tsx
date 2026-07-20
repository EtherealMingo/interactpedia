import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden>
            I
          </span>
          Interactpedia
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
            速查
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            目录
          </NavLink>
          <NavLink
            to="/practice"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            练习
          </NavLink>
          <a
            href="/docs/ui-interaction-catalog.zh.md"
            className={styles.docLink}
            target="_blank"
            rel="noreferrer"
          >
            全景文档
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
