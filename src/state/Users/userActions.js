import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from "./userTypes";

import axiosClient from "../../config/axios";

export function getUsersAction() {
  return async (dispatch) => {
    dispatch(getUsers());

    try {
      const response = await axiosClient.get("/users");
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      console.log(error);
      //dispatch( getUsersError() )
    }
  };
}

const getUsers = () => ({
  type: GET_USERS,
  payload: { loading: true },
});

const getUsersSuccess = (user) => ({
  type: GET_USERS_SUCCESS,
  payload: user,
});
