import lap from "../assets/New design 2023 (17).png";
import diary from "../assets/New workstation 1 (9).png";
import vb from "../assets/New workstation 1 (10).png";
import Just from "./Just";

const youItems = [
  {
    id: "1",
    name: "Dell XPS 13",
    price: 3050,
    image: lap,
  },
  {
    id: "2",
    name: "Journal",
    price: 3050,
    image: diary,
  },
  {
    id: "3",
    name: "Dope Tech biggest ultrawide monitor",
    price: 2050,
    image: vb,
  },
];
const ForYou = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Just For You
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {youItems.map((item) => (
          <Just key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ForYou;
