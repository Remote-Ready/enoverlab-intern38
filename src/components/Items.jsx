const Items = ({ id, name, price, image }) => {
  return (
    <div className="border-solid border p-2 border-[#8D55EF] rounded-md">
      <div>
        <img src={image} alt="" />
        <h4 className="text-[#232323] font-thin">{name}</h4>
        <h6 className="text-[#232323] font-bold">#{price},000</h6>
      </div>
    </div>
  );
};

export default Items;
