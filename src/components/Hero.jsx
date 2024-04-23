import office from "../assets/officepl.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10">
      <div className="basis-[552px] flex-grow">
        <h2 className="justify-center font-extrabold text-4xl text-[#232323]">
          Unleash the power of{" "}
          <span className="text-[#3A0CA3]">Innovative Gadgets</span> in your
          Workspace.
        </h2>
        <p className="mb-4 mt-4 font-light text-[#53535B]">
          Revitalize your workspace with Remote Ready - where innovation meets
          functionality. Browse our collection today and transform the way you
          work.
        </p>
        <Link
          to="/categories"
          className="bg-[#3A0CA3] text-white font-light py-2 px-8 rounded-md"
        >
          Shop Now
        </Link>
      </div>
      <img
        src={office}
        alt=""
        className="border-solid basis-[624px] flex-grow rounded-lg"
      />
    </div>
  );
};

export default Hero;
