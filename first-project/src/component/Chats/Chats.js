import {
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    makeStyles,
  } from "@material-ui/core"
  import { Group } from "@material-ui/icons"
  import { useState } from "react"
  
  const useStyles = makeStyles({
    wrapper: {
      height: "100vh",
      boxSizing: "border-box",
      border: "1px solid #BDBDBD",
    },
  })
  
  export const Chats = () => {
    const classes = useStyles()
  
    const [chat, setChat] = useState([
      { id: "1", name: "Work" },
      { id: "2", name: "Friends" },
      { id: "3", name: "Family" },
    ])
  
    return (
      <List component="nav" className={classes.wrapper}>
        {chat.map((chat) => {
          return (
            <ListItem key={chat.id} button={true}>
              <ListItemAvatar>
                <Avatar>
                  <Group />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={chat.name} />
            </ListItem>
          )
        })}
      </List>
    )
  }