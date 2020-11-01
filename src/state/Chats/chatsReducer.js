import {
  GET_CHAT,
  GET_CHAT_SUCCESS,
  GET_CHAT_ERROR,
  GET_CHATS,
  GET_CHATS_SUCCESS,
  GET_CHATS_ERROR,
} from "./chatTypes";

const initialState = {
  chats: {},
  chatsIds: [],
  chat: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CHAT:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        chat: action.payload,
      };
    case GET_CHAT_ERROR:
      return {
        ...state,
        loading: false,
        chat: {},
        error: action.payload,
      };
    case GET_CHATS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        chats: { ...action.payload.chats },
        chatsIds: [...action.payload.chatsIds],
      };
    case GET_CHATS_ERROR:
      return {
        ...state,
        loading: false,
        chat: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
