import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Contacts from "./components/Contacts";
import Resources from "./components/Resources";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <div>
        <Home />
        <Categories />
        <Contacts />
        <Resources />
        <Cart />
        <Header />
      </div>
    </Router>
  );
};

export default App;
