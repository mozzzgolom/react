  
import {
  Paper,
  TextField,
  InputAdornment,
  makeStyles,
  Icon
  } from "@material-ui/core"
  import { Send } from "@material-ui/icons"
  import { useRef, useCallback, useEffect } from "react" 
  import { useSelector } from "react-redux"
  
  
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
  
  export const MessageChat = ({
    messages,
    currentInput,
    handleInput,
    sendMessage,
  }) => {
    const classes = useStyles()
  
    const messageList = useRef(null)

     const userName = useSelector((state) => state.user.name)
  
    const handlePressInput = ({ code }) => {
      if (code === "Enter") {
        handleSendMessage()
      }
    }
  
    const handleSendMessage = () => {
      if (currentInput)
        sendMessage({
          message: currentInput,
          author: userName,
        })
    }
  
    const handleScrollBottom = useCallback(() => {
      if (messageList.current) {
        messageList.current.scrollTo(0, messageList.current.scrollHeight)
      }
    }, [messageList])
  
    useEffect(() => {
      handleScrollBottom()
    }, [handleScrollBottom])
  
    return (
    <div className={classes.wrapper}>
      <div ref={messageList} className={classes.messageList}>
        {messages.map((message) => (
          <MessageChat message={message} key={message.id} />
        ))}
      </div>

      <Paper elevation={3} className={classes.messageForm}>
        <TextField
          type="text"
          className={classes.messageInput}
          fullWidth={true}
          placeholder="Write your message..."
          value={currentInput}
          onChange={(e) => handleInput(e)}
          onKeyPress={handlePressInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Icon
                  className={classes.sendButton}
                  onClick={handleSendMessage}
                  color="primary"
                >
                  <Send />
                </Icon>
              </InputAdornment>
            ),
          }}
        />
      </Paper>
    </div>
    )
  }