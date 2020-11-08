import {
  GET_CHAT,
  GET_CHAT_SUCCESS,
  GET_CHAT_ERROR,
  GET_CHATS,
  GET_CHATS_SUCCESS,
  GET_CHATS_ERROR,
  SEND_MESSAGE_SUCCESS,
} from "./chatTypes";
//axios
import axiosClient from "../../config/axios";

export function getChatsAction() {
  return async (dispatch) => {
    try {
      dispatch(getChats());
      const response = await axiosClient.get("/chats");
      dispatch(getChatsSuccess(normalizeChats(response.data)));
    } catch (error) {
      console.log(error);
      //dispatch( getUsersError() )
    }
  };
}

export function getChatAction(id) {
  return async (dispatch) => {
    try {
      dispatch(getChat());
      const response = await axiosClient.get(`/chats/${id}`);
      //Here we simulate a request delay of 1 second
      //so we are able to see the loader on the front
      setTimeout(() => {
        dispatch(getChatSuccess(response.data));
      }, 1000);
    } catch (error) {
      console.log(error);
      //dispatch( getChatError() )
    }
  };
}

export function sendMessageAction(chatId, message){
  let messageData = {
    "id": Math.random().toString(36).substring(7),
    "user_id": 5,
    "message": message,
    "created_at": "10-12-2019"
  }
  return {
    type:SEND_MESSAGE_SUCCESS,
    payload:{message:messageData}
  }
}

/**
 * Data normalizing function
 * @param {array} data
 * @param {string} type
 */
const normalizeChats = (data = []) => {
  let entityIds = [];
  let entities = {};

  data.forEach((entity) => {
    entity.id = parseInt(entity.id);
    entityIds = [...entityIds, entity.id];
    entities = {
      ...entities,
      [entity.id]: entity,
    };
  });

  return { chatsIds: entityIds.reverse(), chats: entities };
};

const getChats = () => ({
  type: GET_CHATS,
  payload: { loading: true },
});

const getChat = () => ({
  type: GET_CHAT,
  payload: { loading: true },
});

const getChatsSuccess = (chats) => ({
  type: GET_CHATS_SUCCESS,
  payload: chats,
});

const getChatSuccess = (chat) => ({
  type: GET_CHAT_SUCCESS,
  payload: chat,
});

const getChatsError = (error) => ({
  type: GET_CHATS_ERROR,
  payload: error,
});

const getChatError = (error) => ({
  type: GET_CHAT_ERROR,
  payload: error,
});
