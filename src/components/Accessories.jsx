import hr from "../assets/New workstation 1 (6).png";
import nw from "../assets/New design 2023 (8).png";
import jm from "../assets/New workstation 1 (7).png";
import Desk from "../components/Desk";

const accItems = [
  {
    id: "1",
    name: "Workspace Desktop Gadget",
    price: 3000,
    image: hr,
  },
  {
    id: "2",
    name: "Workstation setup",
    price: 3000,
    image: nw,
  },
  {
    id: "3",
    name: "i7 core touch screen desktop monoblock",
    price: 930,
    image: jm,
  },
];

const Accessories = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Accessories
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {accItems.map((item) => (
          <Desk key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
