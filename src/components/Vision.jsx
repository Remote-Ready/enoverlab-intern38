import point from "../assets/Frame 482202.png";

const Vision = () => {
  return (
    <div className="container">
      <div>
        <h1 className="text-2xl text-[#3A0CA3] font-bold">Our Vision</h1>
        <p className="text-sm mb-8 text-[#22222]">
          To be the world’s No.1 leading online shopping store for innovative
          tech gadgets.
        </p>
      </div>
      <div className="py-2">
        <h1 className="text-2xl text-[#3A0CA3] font-bold mb-5">
          Our Core Values
        </h1>
        <div className="">
          <img src={point} alt="" />
          <p>integrity</p>
        </div>
        <div className="">
          <img src={point} alt="" />
          <p>Excellence</p>
        </div>
      </div>
      <div className="py-6">
        <h1 className="text-2xl text-[#3A0CA3] font-bold mb-2">
          Our Mission Statement
        </h1>
        <p className="text-sm mb-8 text-[#22222]">
          To deliver the righht innovative products with the best service
        </p>
      </div>
    </div>
  );
};

export default Vision;
