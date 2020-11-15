import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import CategoryPage from "../Pages/Categories";
import Account from "../Components/Account";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/productCate/:id" exact component={Product} />
      <Route path="/account" component={Account} />
      <Route path="/:category" exact component={CategoryPage} />
      <Route path="/:category/:subcategory" component={CategoryPage} />
    </Switch>
  );
};

export default Routes;
