import React, {useState} from "react";
import { motion } from "framer-motion";

const ChatComponent = ({ chat = {}, handleSendMessage=()=>{} }) => {

  const [message, setMessage] = useState('');

  const handleClick = () => {
    handleSendMessage(message);
  }

  return (
    <div className="content">
      <div className="contact-profile">
        <img src={chat.user_two?.picture?.thumbnail} alt="" />
        <p>
          {chat?.user_two?.name?.first} {chat?.user_two?.name?.last}
        </p>
        <div className="social-media">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          <i className="fa fa-twitter" aria-hidden="true"></i>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </div>
      </div>
      {chat?.messages && chat?.messages.length > 0 ? (
        <div className="messages">
          <ul>
            {chat.messages.map((message) => {
              let userMessage = chat.user_two_id === message.user_id;
              return (
                <motion.li
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ ease: "easeOut", duration: 0.25 }}
                  className={userMessage ? "sent" : "replies"}
                  key={message.id}
                >
                  <img
                    src={
                      userMessage
                        ? chat.user_two?.picture?.thumbnail
                        : chat.user_one?.picture?.thumbnail
                    }
                    alt=""
                  />
                  <p>{message.message}</p>
                </motion.li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>There are no messages in this chat</div>
      )}

      <div className="message-input">
        <div className="wrap">
          <input type="text" placeholder="Write your message..." onChange={(e)=>{setMessage(e.currentTarget.value)}} value={message}/>
          <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
          <button className="submit" onClick={handleClick}>
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
