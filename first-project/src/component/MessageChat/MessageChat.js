  
import {
    TextField,
    InputAdornment,
    IconButton,
    makeStyles,
  } from "@material-ui/core"
  import { Send } from "@material-ui/icons"
  import { useState, useEffect } from "react"
  import { Message } from "../Message/Message"
  
  const useStyles = makeStyles({
    messageChat: {
      display: "flex",
      flexDirection: "column",
      marginRight: "33%",
    },
    messageForm: {
      minWidth: "400px",
      padding: "5px",
      position: "fixed",
      bottom: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "transparent",
    },
    messageInput: {
      backgroundColor: "#e0f2f1",
    },
  })
  
  export const MessageChat = () => {
    const classes = useStyles()
  
    const [message, setMessage] = useState([])
    const [value, setValue] = useState("")
  
    const sendMessage = () => {
      setMessage((messages) => [
        ...messages,
        { value, author: "User", id: Date.now() },
      ])
  
      setValue("")
    }
  
    useEffect(() => {
      if (
        message.length &&
        message[message.length - 1].author !== "Valli"
      ) {
        setTimeout(() => {
          setMessage((messages) => [
            ...messages,
            { value: "Hello from Valli!", author: "Valli", id: Date.now() },
          ])
        }, 2000)
      }
    }, [message])
  
    return (
      <>
        <div className={classes.messageChat}>
          {message.map((message) => (
            <Message message={message} key={message.id} />
          ))}
        </div>
  
        <div className={classes.messageForm}>
          <TextField autoFocus
            type="text"
            className={classes.messageInput}
            fullWidth={true}
            label="Your Message"
            variant="filled"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={sendMessage} color="primary">
                    <Send />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </>
    )
  }