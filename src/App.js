import React from "react";
import SideBarContainer from "./pages/sideBar/SideBarContainer";
import ChatContainer from "./pages/chat/ChatContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./state/store";
import { CHAT_ROUTE } from "./routes.js";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div id="frame">
          <SideBarContainer />
          <Switch>
            <Route exact path={CHAT_ROUTE} component={ChatContainer} />
            <Route exact path="/" />
           {/*  <Route exact path="/settings" component={UserSettings} /> */}
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
