import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Resources from "./pages/Resources";
import CartContextProvider from "./contexts/CartProvider";

import "./App.css";

import Congrat from "./pages/Congrat";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congrat" element={<Congrat />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
