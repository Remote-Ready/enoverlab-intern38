import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";
import CartContextProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
