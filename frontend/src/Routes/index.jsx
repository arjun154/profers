import React from "react";
import { Switch, Route } from "react-router-dom";
import addresses from "../Components/MyOrders/MyAddresses/Addresses";
import ordersPage from "../Components/MyOrders/Orders";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/account/orders" component={ordersPage} />
      <Route path="/account/addresses" component={addresses} />
    </Switch>
  );
};

export default Routes;
