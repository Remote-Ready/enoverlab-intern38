import tb from "../assets/New workstation 1 (2).png";
import nb from "../assets/New design 2023 (4).png";
import wh from "../assets/New workstation 1 (3).png";
import Wood from "./Wood";

const tableItems = [
  {
    id: "1",
    name: "Adjustable Home Desk",
    price: 120,
    image: tb,
  },
  {
    id: "2",
    name: "Standing Desk Edge Home",
    price: 89.0,
    image: nb,
  },
  {
    id: "3",
    name: "Danish Modern Desk Solid",
    price: 45,
    image: wh,
  },
];

const Tables = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Table
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {tableItems.map((item) => (
          <Wood key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Tables;
