import React from "react";
import { Switch, Route } from "react-router-dom";
import addresses from "../Components/MyOrders/MyAddresses/Addresses";
import ordersPage from "../Components/MyOrders/Orders";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import CategoryPage from "../Pages/Categories";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/account/orders" exact component={ordersPage} />
      <Route path="/account/addresses" exact component={addresses} />
      <Route path="/productCate/:id" exact component={Product} />
      <Route path="/:category" exact component={CategoryPage} />
      <Route path="/:category/:subcategory" component={CategoryPage} />
    </Switch>
  );
};

export default Routes;
