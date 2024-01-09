import React from "react";
import laptop from "../assets/laptop.jpg";
import workstation from "../assets/workstation.jpeg";

const Products = () => {
  return (
    <div className=" border-gray-500 rounded-md grid md:grid-cols-3 mt-16 mb-10">
      <div>
        <img src={workstation} alt="" />
        <h4 className="text-[#232323] font-thin">Exquisite Work Chair</h4>
        <h6 className="text-[#232323] font-bold">#150,000</h6>
        <button className="bg-[#3A0CA3] text-white font-light py-1 px-10 rounded-md">
          Shop Now
        </button>
      </div>
      <div>
        <img src={laptop} alt="" />
        <h4 className="text-[#232323] font-thin">Apple Gadgets</h4>
        <h6 className="text-[#232323] font-bold">#1,6000,000</h6>
        <button className="bg-[#3A0CA3] text-white font-light py-1 px-10 rounded-md">
          Shop Now
        </button>
      </div>
      <div>
        <img src={workstation} alt="" />
        <h4 className="text-[#232323] font-thin">Work Table</h4>
        <h6 className="text-[#232323] font-bold">#30,000</h6>
        <button className="bg-[#3A0CA3] text-white font-light py-1 px-10 rounded-md">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Products;
