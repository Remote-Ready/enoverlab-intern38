import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CartContext } from "../contexts/CartProvider";

const links = [
  {
    id: 1,
    title: "Home",
    to: "/Home",
  },
  {
    id: 2,
    title: "categories",
    to: "/Categories",
  },
  {
    id: 3,
    title: "Resources",
    to: "/Resources",
  },
  {
    id: 4,
    title: "Contact Us",
    to: "/Contacts",
  },
];

const Header = () => {
  const [nav, setNavBar] = useState(false);
  const { cart } = useContext(CartContext);
  const numberInCart = cart.length;

  return (
    <div className="container flex gap-4 justify-between items-center h-20 sticky top-0 bg-white">
      <h2 className="flex justify-between items-center h-20 text-blue-700 text-2xl font-bold">
        RemoteReady
      </h2>
      <ul className="hidden md:flex ml-auto">
        {links.map(({ id, title, to }) => (
          <li key={id} className="px-4 cursor-pointer py-6 font-medium">
            <a href={to}>{title}</a>
          </li>
        ))}
        <li className="px-4 cursor-pointer py-6 font-medium relative">
          <a href="/cart">Cart</a>

          {numberInCart > 0 && (
            <span className="bg-red-600 text-white w-5 h-5 rounded-full grid place-content-center text-xs absolute top-4 right-0">
              {numberInCart}
            </span>
          )}
        </li>
      </ul>
      <div
        onClick={() => setNavBar(!nav)}
        className="cursor-pointer z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex md:hidden flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-white">
          {" "}
          {links.map(({ id, title, to }) => (
            <li key={id} className="cursor-pointer py-6 text-xl font-medium">
              <a href={to}>{title}</a>
            </li>
          ))}
          <li className="px-4 cursor-pointer py-6 font-medium relative">
            <a href="/cart">Cart</a>

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
