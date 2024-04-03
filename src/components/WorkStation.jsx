import st from "../assets/New design 2023 (2).png";
import work from "../assets/New workstation 1 (1).png";
import des from "../assets/New design 2023 (3).png";
import Items from "./Items";

const stationItems = [
  {
    id: "1",
    name: "New Workspace Design",
    price: 399,
    image: st,
  },

  {
    id: "2",
    name: "Customize Office Workspace",
    price: 460,
    image: work,
  },

  {
    id: "3",
    name: "Ultra-Decor workspace for you",
    price: 550,
    image: des,
  },
];

const WorkStation = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6 ">
        Workstation
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {stationItems.map((item) => (
          <Items key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default WorkStation;
