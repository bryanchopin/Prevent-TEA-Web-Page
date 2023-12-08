import styles from "./backgroundPatron.module.css";

export default function BackgroundPatron1({ patron }) {
  if (patron === 1) {
    return (
      <section>
        <div className={styles.area}>
          <ul className={styles.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  } else if (patron === 2) {
    return (
      <section>
        <div className={styles.area}>
          <ul className={styles.circlesBack}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    );
  }
}
