import styles from "./spinner.module.css";

export default function Spinner() {
  return (
    <div className={styles.sk_circle}>
      <div className={`${styles.sk_circle1} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle2} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle3} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle4} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle5} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle6} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle7} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle8} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle9} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle10} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle11} ${styles.sk_child}`}></div>
      <div className={`${styles.sk_circle12} ${styles.sk_child}`}></div>
    </div>
  );
}
