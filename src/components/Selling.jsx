import board from "../assets/New workstation 1 (11).png";
import nh from "../assets/New workstation 1 (12).png";
import router from "../assets/New design 2023 (18).png";
import Top from "./Top";

const bestItems = [
  {
    id: "1",
    name: "Wireless Gaming Keyboard And Mouse",
    price: 18,
    image: board,
  },
  {
    id: "2",
    name: "Andweson Executive Desk Australlian Gold",
    price: 93,
    image: nh,
  },
  {
    id: "3",
    name: "TP-LINK TL-WR940N Router",
    price: 53,
    image: router,
  },
];

const Selling = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Top Selling
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {bestItems.map((item) => (
          <Top key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Selling;
