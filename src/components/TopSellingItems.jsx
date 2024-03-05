import Product from "./Product";
import stand from "../assets/stand.png";
import laptop from "../assets/laptop.jpg";
import comfy from "../assets/comfy.png";

const bestSellingItems = [
  {
    id: "1",
    name: "Exquisite Work Chair",
    price: 30000,
    image: comfy,
  },

  {
    id: "2",
    name: "Apple Gadget",
    price: 16000000,
    image: laptop,
  },
  {
    id: "3",
    name: "Work Table",
    price: 150000,
    image: stand,
  },
];

const TopSellingItems = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="text-[#232323] text-2xl">Top Selling Items.</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-7">
        {bestSellingItems.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingItems;
