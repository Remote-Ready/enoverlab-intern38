import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Contacts from "./components/Contacts";
import Resources from "./components/Resources";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
     <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/categories' element={ <Categories /> } />
        <Route path='/contacts' element={ <Contacts /> } />
        <Route path='/resources' element={ <Resources /> } />
        <Route path='/cart' element={ <Cart /> } />
         {/* <Header /> */}
      </Routes>
    </Router>
  );
};

export default App;
