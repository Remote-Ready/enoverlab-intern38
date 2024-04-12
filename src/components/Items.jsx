import rating from "../assets/star.png";
import { addToCart, removeFromCart } from "../components/CartSlice";
import { useDispatch, useSelector } from "react-redux";

const Item = ({ id, name, price, image }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="border-solid border p-2 border-[#8D55EF] rounded-md">
      <div>
        <img
          src={image}
          className="aspect-[3/2] object-cover object-top w-full"
          alt=""
        />
        <h4 className="text-[#232323] font-thin">{name}</h4>
        <h6 className="text-[#232323] font-bold">#{price},000</h6>
        <img src={rating} alt="" />
      </div>
      {/* TODO: check that item is not already in cart */}
      {cartItems.includes(id) ? (
        <button
          className="w-full rounded-md bg-[#3A0CA3] items-center text-white py-2"
          onClick={() => handleRemoveFromCart(id)}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="w-full rounded-md bg-[#3A0CA3] items-center text-white text-sm font-light py-2"
          onClick={() => handleAddToCart(id)}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export default Item;
