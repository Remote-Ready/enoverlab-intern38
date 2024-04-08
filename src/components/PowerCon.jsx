import mo from "../assets/New design 2023 (6).png";
import flat from "../assets/New design 2023 (7).png";
import Window from "../assets/New workstation 1 (4).png";
import Desktop from "./Desktop";

const pcItems = [
  {
    id: "1",
    name: "Mac IOS Brand Deskop",
    price: 870,
    image: mo,
  },
  {
    id: "2",
    name: "CES 2017_ Samsung Goes Curvy",
    price: 440,
    image: flat,
  },
  {
    id: "3",
    name: "DELL Desktop Computer Package",
    price: 645,
    image: Window,
  },
];

const PowerCon = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        PC
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {pcItems.map((item) => (
          <Desktop key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default PowerCon;
