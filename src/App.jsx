import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Resources from "./pages/Resources";
import Header from "./components/Header";
import CartContextProvider from "./contexts/CartProvider";

const App = () => {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Header" element={<Header />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Resources" element={<Resources />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
};

export default App;
