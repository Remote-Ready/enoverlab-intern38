import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/", //removed "/home" and used "/"
  },
  {
    id: 2,
    title: "About Us",
    to: "/About",
  },
  {
    id: 3,
    title: "Categories",
    to: "/Categories",
  },
  {
    id: 4,
    title: "Resources",
    to: "/Resources",
  },
];

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [navbar, setNavBar] = useState(false);
  // const { cart } = useContext(CartContext);
  const numberInCart = cartItems.length;
  const close = () => setNavBar(false);

  return (
    <div className="container flex gap-4 justify-between items-center h-20 sticky top-0 bg-white">
      <h2 className="flex justify-between items-center h-20 text-[#3A0CA3] text-2xl font-bold hover:scale-105 duration-300">
        RemoteReady
      </h2>

      {/* Added a cart display bewteen the logo and menu icon  */}
      <Link to="/cart" className="flex text-2xl"></Link>

      <ul className="hidden md:flex ml-auto">
        {links.map(({ id, title, to }) => (
          <li key={id} className="px-4 cursor-pointer py-6 font-medium">
            <Link to={to}>{title}</Link>
          </li>
        ))}
        <li className="px-4 cursor-pointer py-6 font-medium relative">
          <Link to="/cart">Cart</Link>

          {numberInCart > 0 && (
            <span className="bg-red-600 text-white w-5 h-5 rounded-full grid place-content-center text-xs absolute top-4 right-0">
              {numberInCart}
            </span>
          )}
        </li>
      </ul>
      <div
        onClick={() => setNavBar(!navbar)}
        className="cursor-pointer z-10 md:hidden"
      >
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {navbar && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-white">
          {" "}
          {links.map(({ id, title, to }) => (
            <li key={id} className="cursor-pointer py-6 text-xl font-medium">
              <Link to={to} onClick={close}>
                {title}
              </Link>
            </li>
          ))}
          <li className="px-4 cursor-pointer py-6 font-medium relative">
            <Link to="/cart" onClick={close}>
              Cart
            </Link>

            {numberInCart > 0 && (
              <span className="bg-red-600 text-white w-5 h-5 rounded-full grid place-content-center text-xs absolute top-4 right-0">
                {numberInCart}
              </span>
            )}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
