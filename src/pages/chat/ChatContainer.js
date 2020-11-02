import React, { useEffect } from "react";
//Components
import ChatComponent from "./ChatComponent";
//Routes
import { useParams } from "react-router-dom";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Redux actions
import { getChatAction } from "../../state/Chats/chatActions";
//loader
import Loader from "../../utils/loader/";

const ChatContainer = () => {
  let { id, chatId } = useParams();

  const dispatch = useDispatch();

  const { chat, loadingMessages, error } = useSelector((state) => state.chats);

  //We get the chats the first time this component is call
  useEffect(() => {
    dispatch(getChatAction(chatId));
  }, [chatId]);

  return (
    <>
      {!loadingMessages && chat ? <ChatComponent chat={chat} /> : <Loader />}
      {error && <div>Chat error, please try again soon</div>}
    </>
  );
};

export default ChatContainer;
