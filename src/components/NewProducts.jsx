import monitor from "../assets/nec curve.png";
import home from "../assets/home desk.png";
import Chair$desk from "../assets/chair$desk.jpg";
import ProductCategory from "./ProductCategory";

const newProductsItems = [
  {
    id: "1",
    name: "Monitor",
    image: monitor,
  },
  {
    id: "2",
    name: "Home Desk",
    image: home,
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
