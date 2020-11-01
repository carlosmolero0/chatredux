import React, { useEffect } from "react";
//Components
import SideBar from "./SideBarComponent";
//Redux
import { useDispatch, useSelector } from "react-redux";
//Redux actions
import { getChatsAction } from "../../state/Chats/chatActions";

const SideBarContainer = () => {
  const dispatch = useDispatch();

  //We get the chats the first time this component is call
  useEffect(() => {
    dispatch(getChatsAction());
  }, []);

  const { chats, chatsIds, loading, error } = useSelector(
    (state) => state.chats
  );

  return (
    <SideBar
      chats={chats}
      chatsIds={chatsIds}
      loading={loading}
      error={error}
    />
  );
};

export default SideBarContainer;
