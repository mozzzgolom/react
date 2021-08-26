import { clearMessageInput } from "../conversations-list"
import { ADD_MESSAGE } from "./types"

export const addMessage = (message, roomId) => ({
  type: ADD_MESSAGE,
  payload: { message, roomId },
})

export const sendMessageThunk = (message, roomId) => (dispatch, getState) => {
  dispatch(addMessage(message, roomId))
  dispatch(clearMessageInput(roomId))

  if (message.author === getState().profile.user.name) {
    setTimeout(
      () =>
        dispatch(
          addMessage({ author: "Valli", message: "Hello from Valli!" }, roomId),
        ),
      500,
    )
  }
}