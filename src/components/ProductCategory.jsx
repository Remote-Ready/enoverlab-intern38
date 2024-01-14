const ProductCategory = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt="" className=" hover:scale-105 duration-300" />
      <h3 className="text-2xl px-16 mt-2">{name}</h3>
    </div>
  );
};

export default ProductCategory;
