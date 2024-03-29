import felix from "../assets/Group 6.png";
import rebecca from "../assets/Group 2.png";
import faith from "../assets/Group 3.png";
import chinelo from "../assets/Group 4.png";
import tolu from "../assets/Group 5.png";
import bolaji from "../assets/Mask group (1).png";

const Team = () => {
  return (
    <div className="py-20">
      <div>
        <h1 className="text-xl font-semibold text-[#3A0CA3] text-center justify-center mb-8">
          Meet The Team
        </h1>
        <div className="grid md:grid-cols-3 gap-4 items-center justify-center">
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
              <p>Roduct Manager</p>
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
            <img src={chinelo} alt="" />
            <div className="text-[#7C7C7C] text-center">
              <h2 className="text-lg">Chinelo</h2>
              <p>Product Manager</p>
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
