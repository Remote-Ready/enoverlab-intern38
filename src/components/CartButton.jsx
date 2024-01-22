// CartButton.js

import { useSelector } from "react-redux";

const CartButton = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <button onClick={onClick} className="cart-button">
      Cart ({cartItems.length})
    </button>
  );
};

export default CartButton;
