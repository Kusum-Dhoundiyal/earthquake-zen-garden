import React from "react";
import { Route } from "react-router-dom";
import Profile from "./Profile";
import Detail from "./Detail";
import Home from "./Home";
const Routes = () => {
  return (
    <div>
      <Route path="/Home" exact component={Home}></Route>
      <Route path="/Profile" component={Profile}></Route>
      <Route path="/Detail/:id" component={Detail}></Route>
      <Route path="/" exact component={Home}></Route>
    </div>
  );
};

export default Routes;
