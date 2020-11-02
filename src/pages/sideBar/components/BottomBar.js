import React from "react";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div id="bottom-bar">
      <button id="addcontact">
        <i className="fa fa-user-plus fa-fw" aria-hidden="true"></i>{" "}
        <span>Add contact</span>
      </button>
      <Link to="/">
        <button id="settings">
          <i className="fa fa-cog fa-fw" aria-hidden="true"></i>{" "}
          <span>Settings</span>
        </button>
      </Link>
    </div>
  );
};

export default BottomBar;
