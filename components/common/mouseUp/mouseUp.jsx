import styles from './mouseUp.module.css'

export default function MouseUp(){
  return(
    <div className={styles.scroll_downs}>
      <div className={styles.mousey}>
      <div className={styles.scroller}></div>
      </div>
    </div>  
  )
}