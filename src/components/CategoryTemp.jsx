import Item from "./Items";

const CategoryTemp = ({ products, name }) => {
  return (
    <div>
      <h1 className="text-white bg-[#8D55EF] w-full h-[55px] mt-5 mb-6 py-10 p-6 ">
        {name}
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        {products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryTemp;
