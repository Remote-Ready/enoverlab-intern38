import Headset from "../assets/headset.jpg";
import Phone from "../assets/mobile.jpg";
import Chair$desk from "../assets/chair$desk.jpg";
import Books from "../assets/books.jpg";
import macbook from "../assets/mac.jpg";
import Tables from "../assets/desks.jpg";
import Categories from "../components/Category";
import CategoriesItem from "../components/CategoriesItem";

const productCategoriesItems = [
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
  {
    id: "4",
    name: "Books",
    image: Books,
  },
  {
    id: "5",
    name: "Laptops",
    image: macbook,
  },
  {
    id: "6",
    name: "Tables",
    image: Tables,
  },
];
const ProductCategories = () => {
  return (
    <div className=" grid md:grid-cols-3 mt-20 gap-6">
      {productCategoriesItems.map((item) => (
        <Categories key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductCategories;
