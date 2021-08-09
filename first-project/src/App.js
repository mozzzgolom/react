// @ts-ignore
import styles from "./App.module.sass";
//import { Message } from "./component/Message";
import { MessageChat } from "./component/MessageChat/MessageChat.js"

export function App() {
  return (
    <div className={styles.app}>
      <MessageChat />
    </div>
  )
}