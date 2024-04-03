import bx from "../assets/New design 2023 (11).png";
import zx from "../assets/New design 2023 (12).png";
import vb from "../assets/New design 2023 (13).png";
import Coming from "./Coming";

const soonItems = [
  {
    id: "1",
    name: "Personal Workspace Desk",
    price: 120,
    image: bx,
  },
  {
    id: "2",
    name: "Mini Office Cubicle",
    price: 555,
    image: zx,
  },
  {
    id: "3",
    name: "Wooden Desk Lamp",
    price: 555,
    image: vb,
  },
];

const Soon = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Coming Soon
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {soonItems.map((item) => (
          <Coming key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Soon;
