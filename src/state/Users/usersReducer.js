import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from "./userTypes";

const initialState = {
  users: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: action.payload.loading,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    default:
      return state;
  }
}
