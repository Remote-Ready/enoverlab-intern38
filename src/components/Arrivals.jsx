import game from "../assets/New design 2023 (9).png";
import fl from "../assets/New workstation 1 (8).png";
import ds from "../assets/New design 2023 (10).png";
import NewArrival from "./NewArrival";

const arriveItems = [
  {
    id: "1",
    name: "Gaming Chair Portable",
    price: 85,
    image: game,
  },
  {
    id: "2",
    name: "Cheap Live Edge Desk",
    price: 100,
    image: fl,
  },
  {
    id: "3",
    name: "New Workspace Design",
    price: 950,
    image: ds,
  },
];

const Arrivals = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        New Arrivals
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {arriveItems.map((item) => (
          <NewArrival key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Arrivals;
