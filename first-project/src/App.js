import { useState, useEffect } from "react";
// @ts-ignore
import styles from "./style/App.sass";
import { Message } from "./Message";



export function App() {
  const [messageList, setMessageList] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const sendMessage = () => {
    // @ts-ignore
    setMessageList((messages) => [
      ...messages,
      { text, author: author || "Anonymous", id: Date.now() },
    ]);
  };

  useEffect(() => {
    if (
      messageList.length &&
      // @ts-ignore
      messageList[messageList.length - 1].author !== "Valli"
    ) {
      setTimeout(() => {
        // @ts-ignore
        setMessageList((messages) => [
          ...messages,
          { text: `${text}`, author: "Valli", id: Date.now() },
        ]);
      }, 2000);

      setText("");
    }
  }, [messageList]);

  return (
    <>
      <div className={styles.app}>
        {messageList.map((message) => (
          // @ts-ignore
          <Message message={message} key={message.id} />
        ))}
      </div>
      <div className={styles.messageForm}>
        <input
          type="text"
          className="author-input"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <input
          type="text"
          className="message-input"
          placeholder="Your Message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button className="message-send" onClick={sendMessage}>
          Send
        </button>
      </div>
    </>
  );
}