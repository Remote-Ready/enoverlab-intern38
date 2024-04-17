import { Link } from "react-router-dom";

const Product = ({ id, name, price, image }) => {
  return (
    <div className="border-solid border p-2 border-black-500 rounded-md">
      <div>
        <img src={image} alt="" />
        <h4 className="text-[#232323] font-thin">{name}</h4>
        <h6 className="text-[#232323] font-bold">₦{price},000</h6>
        <button
          to="/categories"
          className="bg-[#3A0CA3] text-white font-thin py-2 rounded-lg items-center w-full hover:scale-95 duration-200"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Product;
