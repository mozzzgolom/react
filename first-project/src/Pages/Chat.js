import { Grid } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import { Chats, MessageComponent, MessageRoutes } from "../component"

export const Chat = () => {
  return (
    <Switch>
      <Route path={["/chat/:roomId", "/chat"]}>
        <MessageRoutes>
          {([state, actions]) => (
            <Grid container={true}>
              <Grid item={true} xs={12} md={3}>
                <Chats {...state} />
              </Grid>
              <Grid item={true} xs={12} md={9}>
                <Route path="/chat/:roomId">
                  <MessageComponent {...state} {...actions} />
                </Route>
                <Route exact={true} path="/chat">
                  <h1>Select room</h1>
                </Route>
              </Grid>
            </Grid>
          )}
        </MessageRoutes>
      </Route>
    </Switch>
  )
}