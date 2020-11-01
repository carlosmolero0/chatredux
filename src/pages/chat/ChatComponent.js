import React from "react";

const ChatComponent = ({ chat = {} }) => {
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
                <li
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
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>There are no messages in this chat</div>
      )}

      <div className="message-input">
        <div className="wrap">
          <input type="text" placeholder="Write your message..." />
          <i className="fa fa-paperclip attachment" aria-hidden="true"></i>
          <button className="submit">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
