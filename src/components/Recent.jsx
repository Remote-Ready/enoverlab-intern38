import design from "../assets/New design 2023.png";
import mouse from "../assets/New design 2023 (1).png";
import adjustable from "../assets/New workstation 1.png";
import Viewed from "./Viewed";

const recentlyViewItems = [
  {
    id: "1",
    name: "Customized Office Workspace",
    price: 200,
    image: design,
  },
  {
    id: "2",
    name: "Wireless Gaming Keyboard And Mouse",
    price: 9000,
    image: mouse,
  },
  {
    id: "3",
    name: "Adjustable Chair",
    price: 45,
    image: adjustable,
  },
];
const Recent = () => {
  return (
    <div className="py-10">
      <h1 className="container text-[#232323] text-sm mb-4">
        Recently Viewed.
      </h1>

      <div className="container grid sm:grid-cols-2 md:grid-cols-3 mt-10 gap-4">
        {recentlyViewItems.map((item) => (
          <Viewed key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Recent;
