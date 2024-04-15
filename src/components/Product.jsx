import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

const Product = ({ id, name, price, image }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border-solid border p-2 border-black-500 rounded-md">
      <div>
        <img src={image} alt="" />
        <h4 className="text-[#232323] font-thin">{name}</h4>
        <h6 className="text-[#232323] font-bold">{price},000</h6>
        <button
          onClick={() => addToCart(id)}
          className="bg-[#3A0CA3] text-white font-light py-1 px-10 rounded-md w-full hover:scale-95 duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Product;
