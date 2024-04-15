import Product from "./Product";
import stand from "../assets/stand.png";
import laptop from "../assets/laptop.jpg";
import comfy from "../assets/comfy.png";

const bestSellingItems = [
  {
    id: "1",
    name: "Executive Work Chair",
    price: 150,
    image: comfy,
  },

  {
    id: "2",
    name: "m1 Macbook pro",
    price: 160,
    image: laptop,
  },
  {
    id: "3",
    name: "Phone Stand",
    price: 7,
    image: stand,
  },
];

const TopSellingItems = ({ className }) => {
  return (
    <div className={className}>
      <h1 className="container text-[#232323] text-2xl mb-4">
        Top Selling Items.
      </h1>

      <div className="container grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-7">
        {bestSellingItems.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TopSellingItems;
