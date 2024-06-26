import felix from "../assets/Group.png";
import rebecca from "../assets/Mask group (3).png";
import faith from "../assets/rebecca 1 (1).png";
import teni from "../assets/rebecca 1.png";
import tolu from "../assets/rebecca 1 (2).png";
import bolaji from "../assets/Mask group (1).png";

const Team = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-xl font-semibold text-[#3A0CA3] text-center justify-center mb-8">
          Meet The Team
        </h1>
        <div className="grid md:grid-cols-3 aspect-[3/2] object-cover object-top w-full gap-4 items-center justify-center">
          <div>
            <img src={felix} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Felix</h2>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div>
            <img src={rebecca} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Rebecca</h2>
              <p>Product Manager</p>
            </div>
          </div>
          <div>
            <img src={faith} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Faith</h2>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div>
            <img src={teni} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Teni</h2>
              <p>UI/UX Designer</p>
            </div>
          </div>
          <div>
            <img src={tolu} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Tolulope</h2>
              <p>Product Manager</p>
            </div>
          </div>
          <div className="text-[#7C7C7C] text-center">
            <img src={bolaji} alt="" className="mt-9" />
            <div>
              <h2 className="text-lg">Bolaji</h2>
              <p>Front-end Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
