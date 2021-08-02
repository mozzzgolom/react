import styles from './style/App.css';
import {Message} from './Message.js'



export function App() {
  return (
    <div className={styles.app}>
      <Message text="Hello World" />
    </div>
  );
}