import { combineReducers } from "redux";
import UsersReducer from "./Users/usersReducer";
import ChatsReducer from "./Chats/chatsReducer";

export default combineReducers({
  users: UsersReducer,
  chats: ChatsReducer,
});
