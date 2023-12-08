import styles from "./backgroundCircular.module.css";

export default function BackgroundCircular({patron}) {
  if (patron === 1) {
    return(
        <section className={styles['ripple-background']}>
        <div className={`${styles.circle} ${styles.xxlargeLeft} ${styles.shade1}`}></div>
        <div className={`${styles.circle} ${styles.xlargeLeft} ${styles.shade2}`}></div>
        <div className={`${styles.circle} ${styles.largeLeft} ${styles.shade3}`}></div>
        <div className={`${styles.circle} ${styles.mediumLeft} ${styles.shade4}`}></div>
        <div className={`${styles.circle} ${styles.smallLeft} ${styles.shade5}`}></div>
      </section>
    )
  }else if (patron === 2) {
    return(
      <section className={styles['ripple-background']}>
      <div className={`${styles.circle} ${styles.xxlargeRight} ${styles.shade1}`}></div>
      <div className={`${styles.circle} ${styles.xlargeRight} ${styles.shade2}`}></div>
      <div className={`${styles.circle} ${styles.largeRight} ${styles.shade3}`}></div>
      <div className={`${styles.circle} ${styles.mediumRight} ${styles.shade4}`}></div>
      <div className={`${styles.circle} ${styles.smallRight} ${styles.shade5}`}></div>
    </section>
  )
  }
}