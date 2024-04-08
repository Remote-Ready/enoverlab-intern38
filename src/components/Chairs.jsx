import rest from "../assets/Cantebury Office Chair (1).png";
import parm from "../assets/headrest.png";
import white from "../assets/WhatsApp Image 2024-04-03 at 10.40.40 PM.jpeg";
import Rea from "./Rea";

const chairItems = [
  {
    id: "1",
    name: "Centebury Office Chair",
    price: 98,
    image: rest,
  },

  {
    id: "2",
    name: "Adjustable Chair",
    price: 195,
    image: parm,
  },

  {
    id: "3",
    name: "Best Ergonomic Recliners - Foter",
    price: 230,
    image: white,
  },
];

const Chairs = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Chairs
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {chairItems.map((item) => (
          <Rea key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Chairs;
