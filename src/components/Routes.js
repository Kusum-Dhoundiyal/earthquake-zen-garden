import React from "react";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import Detail from "./Detail";
import Home from "./Home";
const Routes = () => {
  return (
    <div>
      <Route path="/Home" exact>
        <Home />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route path="/Detail/:id">
        <Detail />
      </Route>
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
};

export default Routes;
