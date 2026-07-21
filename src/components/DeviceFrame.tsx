import type { ReactNode } from 'react'
import type { Pattern } from '../content/types'
import styles from './DeviceFrame.module.css'

export type DeviceKind = 'phone' | 'desktop'
export type DeviceSize = 'sm' | 'md' | 'lg'

/** Only clearly mobile-native interactions use the phone shell; everything else is desktop. */
const PHONE_IDS = new Set([
  'bottom-sheet',
  'pull-to-refresh',
  'swipe-action',
  'otp-input',
  'card-stack',
])

export function deviceForPattern(pattern: Pattern): DeviceKind {
  return PHONE_IDS.has(pattern.id) ? 'phone' : 'desktop'
}

export function DeviceFrame({
  kind,
  size = 'md',
  children,
  label,
}: {
  kind: DeviceKind
  size?: DeviceSize
  children: ReactNode
  label?: string
}) {
  if (kind === 'phone') {
    return (
      <div className={`${styles.phone} ${styles[`size_${size}`]}`} data-device="phone">
        <div className={styles.phoneBezel}>
          <div className={styles.notch} aria-hidden />
          <div className={styles.phoneScreen}>
            <div className={styles.stage}>{children}</div>
          </div>
        </div>
        {label && <span className={styles.deviceLabel}>{label}</span>}
      </div>
    )
  }

  return (
    <div className={`${styles.desktop} ${styles[`size_${size}`]}`} data-device="desktop">
      <div className={styles.desktopChrome}>
        <div className={styles.traffic} aria-hidden>
          <i />
          <i />
          <i />
        </div>
        <div className={styles.urlBar}>
          <span>{label ?? 'interactpedia.app'}</span>
        </div>
      </div>
      <div className={styles.desktopScreen}>
        <div className={styles.stage}>{children}</div>
      </div>
    </div>
  )
}
