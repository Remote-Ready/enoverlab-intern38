import Headset from "../assets/headset.jpg";
import Phone from "../assets/mobile.jpg";
import Chair$desk from "../assets/online-school-equipment-home.png";
import Books from "../assets/books.jpg";
import macbook from "../assets/mac.jpg";
import Tables from "../assets/desks.jpg";
import Category from "../components/Category";

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
    name: "Minimalist Workspace",
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
    <div>
      <div className="flex justify-between flex-grow gap-1 mt-12">
        <h1 className="text-2xl text-[#232323]">Product Categories</h1>
        <button className=" text-[#3A0CA3]">See More</button>
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-3 mt-20 gap-6">
        {productCategoriesItems.map((item) => (
          <Category key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
