import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadLogin } from "./Redux/auth/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLogin());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
