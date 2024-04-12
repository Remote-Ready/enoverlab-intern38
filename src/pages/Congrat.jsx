import { Link } from "react-router-dom";
import logo from "../assets/loading.mp4";
import { LuPartyPopper } from "react-icons/lu";

const Congrat = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <LuPartyPopper size={90} className="mb-10" />
      <h3 className="text-lg">Congratulation</h3>
      <h4 className="mt-6">Order Successful</h4>
      <Link
        className="text-white bg-[#3A0CA3] rounded-lg py-4 px-6 text-sm mt-4 hover:scale-105 duration-300"
        to="/Categories"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Congrat;
