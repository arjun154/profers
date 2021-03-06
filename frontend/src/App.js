import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadLogin } from "./Redux/auth/actions";
import { loadCart } from "./Redux/cart/actions";
import Checkout from "./Components/Checkout";
import { Route, Switch } from "react-router-dom";
import ScrollIntoView from "./Components/ScrollIntoView";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLogin());
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <div className="App">

    <ScrollIntoView>
      <Switch>
        <Route path="/checkout" exact component={Checkout} />

        <Route>
          <Navbar />
          <Routes />
          <Footer />
        </Route>
      </Switch>
    </ScrollIntoView>
    </div>
  );
}

export default App;
