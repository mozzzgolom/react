import styles from './style/Message.css'

export function Message(props) {
  return(
    <div className={styles.message}>
      <p>{props.text}</p>
    </div>
  )
}