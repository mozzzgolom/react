import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  makeStyles,
} from "@material-ui/core"
import { Group } from "@material-ui/icons"
import { Link, useParams } from "react-router-dom"
import { Profile } from ".."
import { useSelector } from "react-redux"
import { getConversations } from "../../store/conversations-list"
import { getAllMessages } from "../../store/message-list"

const useStyles = makeStyles({
  wrapper: {
    height: "100vh",
    boxSizing: "border-box",
    border: "1px solid #BDBDBD",
  },
})

export const Chats = () => {
  const classes = useStyles()
  const { roomId } = useParams()
  const conversations = useSelector(getConversations)
  const allMessages = useSelector(getAllMessages)

  return (
    <div className={classes.wrapper}>
      <Profile />
      <List component="nav">
        {conversations.map((chat) => {
          const { author, message, date } =
            allMessages[chat.id][allMessages[chat.id].length - 1]

          const messageText =
            (author + message).length > 30
              ? message.slice(0, 30 - author.length) + "..."
              : message

          return (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className={classes.chatBlock}
            >
              <ListItem button={true} selected={roomId === chat.id}>
                <ListItemAvatar>
                  <Avatar>
                    <Group />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <span className={classes.chatTitle}>{chat.title}</span>
                  }
                  secondary={
                    <>
                      {`${author}: ${messageText}`}
                      <br />
                      <sub>{date}</sub>
                    </>
                  }
                />
              </ListItem>
            </Link>
          )
        })}
      </List>
    </div>
  )
}