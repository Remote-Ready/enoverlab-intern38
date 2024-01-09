const Category = ({ name, image }) => {
  return (
    <div>
      <img src={image} alt="" />
      <h3 className="text-2xl px-16 mt-2">{name}</h3>
    </div>
  );
};

export default Category;
