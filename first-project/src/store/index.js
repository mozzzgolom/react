import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { conversationsReducer } from "./conversations-list"
import { messagesReducer } from "./message-list"
import { logger } from "./middlewares"
import { profileReducer } from "./profile"

const persistConfig = {
  key: "root",
  storage, 
  whitelist: ["profile"], 
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    profile: profileReducer,
    messageList: messagesReducer,
    conversations: conversationsReducer,
  }),
)

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args,
  ),
)

export const persistor = persistStore(store)