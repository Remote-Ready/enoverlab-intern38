import sc from "../assets/New design 2023 (14).png";
import light from "../assets/New design 2023 (15).png";
import globe from "../assets/New design 2023 (16).png";
import Count from "./Count";

const discountItems = [
  {
    id: "1",
    name: "Apple Imac 27inches",
    price: 345,
    image: sc,
  },
  {
    id: "2",
    name: "Ring Light Stand",
    price: 45,
    image: light,
  },
  {
    id: "3",
    name: "Rotating World Globe| Table Shelf Decor",
    price: 39,
    image: globe,
  },
];

const Discount = () => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6">
        Discount
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {discountItems.map((item) => (
          <Count key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Discount;
