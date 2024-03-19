import Headset from "../assets/headset.jpg";
import Phone from "../assets/mobile.jpg";
import Chair$desk from "../assets/chair$desk.jpg";
import ProductCategory from "./ProductCategory";

const newProductsItems = [
  {
    id: "1",
    name: "Headsets",
    image: Headset,
  },
  {
    id: "2",
    name: "Mobile Devices",
    image: Phone,
  },
  {
    id: "3",
    name: "Chairs",
    image: Chair$desk,
  },
];
const NewProducts = () => {
  return (
    <div className="grid md:grid-cols-3 mt-20 gap-6">
      {newProductsItems.map((item) => (
        <ProductCategory key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewProducts;
