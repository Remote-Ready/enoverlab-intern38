import WorkStation from "../assets/workstation.jpeg";
import laptop from "../assets/laptop.jpg";
import Product from "../components/Products";
import Top from "../components/Top";

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

const BestSelling = () => {
  return (
    <div>
      <Top />
      {bestSellingItems.map((item) => (
        <Product {...item} />
      ))}
    </div>
  );
};

export default BestSelling;
