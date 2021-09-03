import { FormatDate } from "../../utils"
import { ADD_MESSAGE } from "./types"

const initialState = {
  room1: [
    {
      message: "Hello from room 1!",
      author: "Valli",
      date: FormatDate(new Date()),
      id: Date.now(),
    },
  ],
  room2: [
    {
      message: "Welcome to room 2!",
      author: "Valli",
      date: FormatDate(new Date()),
      id: Date.now(),
    },
  ],
  room3: [
    {
      message: "You are in room 3!",
      author: "Valli",
      date: FormatDate(new Date()),
      id: Date.now(),
    },
  ],
}

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.roomId]: [
          ...state[payload.roomId],
          { ...payload.message, date: FormatDate(new Date()), id: Date.now() },
        ],
      }
    default:
      return state
  }
}