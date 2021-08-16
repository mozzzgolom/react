import { Paper, makeStyles } from "@material-ui/core"
import { FormatDate } from "../../utils"

const useStyles = makeStyles({
  message: {
    margin: "10px 0",
    marginRight: "5%",
    alignSelf: "flex-end",
    backgroundColor: "#e0f2f1",
    maxWidth: "500px",
    textAlign: "left",
    borderRadius: "5px",
    padding: "10px",
    overflowWrap: "break-word",
  },

  messageIncoming: {
    marginLeft: "55%",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
  },

  messageContent: {
    margin: 0,
    fontSize: "20px",
  },

  author: {
    color: "#4caf50",
    margin: 0,
  },
})

export function MessageComponent({
  message: { message, author, date = FormatDate(new Date()) },
}) {
  const classes = useStyles()
  return (
    <Paper
      className={`${classes.message} ${classes.sb1} ${
        author !== "User" ? classes.messageIncoming : ""
      }`}
      elevation={3}
    >
      <div className={classes.messageContent}>
        <p className={classes.author}>{author}:</p> <span>{message}</span>
        <p className={classes.messageDate}>
          <sub>{date}</sub>
        </p>
      </div>
    </Paper>
  )
}