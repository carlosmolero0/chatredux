import React from "react";
import { Link } from "react-router-dom";
import BottomBar from "./components/BottomBar";

const SideBar = ({
  chats = [],
  chatsIds = [],
  loading = false,
  error = false,
}) => {
  return (
    <>
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <Link to="/">
              <img
                id="profile-img"
                src="http://emilcarlsson.se/assets/mikeross.png"
                className="online"
                alt=""
              />
              <p>Mike Ross</p>
              <i
                className="fa fa-chevron-down expand-button"
                aria-hidden="true"
              ></i>
              <div id="status-options">
                <ul>
                  <li id="status-online" className="active">
                    <span className="status-circle"></span> <p>Online</p>
                  </li>
                  <li id="status-away">
                    <span className="status-circle"></span> <p>Away</p>
                  </li>
                  <li id="status-busy">
                    <span className="status-circle"></span> <p>Busy</p>
                  </li>
                  <li id="status-offline">
                    <span className="status-circle"></span> <p>Offline</p>
                  </li>
                </ul>
              </div>
              <div id="expanded">
                <label htmlFor="twitter">
                  <i className="fa fa-facebook fa-fw" aria-hidden="true"></i>
                </label>
                <input name="twitter" type="text" value="mikeross" />
                <label htmlFor="twitter">
                  <i className="fa fa-twitter fa-fw" aria-hidden="true"></i>
                </label>
                <input name="twitter" type="text" value="ross81" />
                <label htmlFor="twitter">
                  <i className="fa fa-instagram fa-fw" aria-hidden="true"></i>
                </label>
                <input name="twitter" type="text" value="mike.ross" />
              </div>
            </Link>
          </div>
        </div>
        <div id="search">
          <label htmlFor="">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
          <input type="text" placeholder="Search contacts..." />
        </div>
        <div id="contacts">
          <ul>
            {chatsIds.map((chatId) => {
              let chat = chats[chatId];
              let user = chat?.user_two;
              return (
                <li className="contact" key={user.id}>
                  <Link to={`/user/4/chat/${chat.id}`}>
                    <div className="wrap">
                      <span
                        className={
                          "contact-status " +
                          (user.active ? "online" : "offline")
                        }
                      ></span>
                      <img src={user.picture.thumbnail} alt="" />
                      <div className="meta">
                        <p className="name">
                          {user.name.first} {user.name.last}
                        </p>
                        <p className="preview">
                          You just got LITT up, Mike hahahaha yeah you right.
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <BottomBar></BottomBar>
      </div>
    </>
  );
};

export default SideBar;
