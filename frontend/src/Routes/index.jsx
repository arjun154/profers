import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productCate/:id" exact component={Product} />
    </Switch>
  );
};

export default Routes;
