import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//Components
import BottomBar from "./components/BottomBar";
import Search from "./components/Search";
import Loader from "../../utils/loader/";

const SideBar = ({
  chats = [],
  chatsIds = [],
  loading = false,
  error = false,
}) => {
  const [showStatus, setShowStatus] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  return (
    <>
      <div id="sidepanel">
        <div id="profile">
          <div className="wrap">
            <img
              id="profile-img"
              src="http://emilcarlsson.se/assets/mikeross.png"
              className="online"
              alt=""
              onClick={() => {
                setShowStatus(!showStatus);
              }}
            />
            <p>Mike Ross</p>
            <div
              onClick={() => {
                setShowSocial(!showSocial);
              }}
            >
              <i
                className="fa fa-chevron-down expand-button"
                aria-hidden="true"
              ></i>
            </div>
            {showStatus && (
              <motion.div
                id="status-options"
                initial={{ opacity: 0, y: -80, x: -30, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
              >
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
              </motion.div>
            )}
            {showSocial && (
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
            )}
          </div>
        </div>
        <Search />
        {!loading && (
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
        )}
        {loading && <Loader />}
        <BottomBar></BottomBar>
      </div>
    </>
  );
};

export default SideBar;
