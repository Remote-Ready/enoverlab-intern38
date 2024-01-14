import Product from "./Product";
import WorkStation from "../assets/workstation.jpeg";
import laptop from "../assets/laptop.jpg";

const bestSellingItems = [
  {
    id: "1",
    name: "Exquisite Work Chair",
    price: 30000,
    image: WorkStation,
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
    image: WorkStation,
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
