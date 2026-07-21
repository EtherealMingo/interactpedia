import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

export function Layout() {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <NavLink to="/" className={styles.brand}>
          interactpedia
        </NavLink>
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Index
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Catalog
          </NavLink>
          <NavLink
            to="/practice"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Practice
          </NavLink>
          <a
            href="/docs/ui-interaction-catalog.zh.md"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
