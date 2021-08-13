// @ts-ignore
import { Grid, makeStyles } from "@material-ui/core"
import { Chats } from "./component/Chats"
import { MessageChat } from "./component/MessageChat/MessageChat.js"

const useStyles = makeStyles({
  app: {
    fontFamily: "Roboto, Helvetica, sans-serif",
  },
})

export function App() {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <Grid container={true}>
        <Grid item={true} xs={12} md={3}>
          <Chats />
        </Grid>
        <Grid item={true} xs={12} md={9}>
          <MessageChat />
        </Grid>
      </Grid>
    </div>
  )
}