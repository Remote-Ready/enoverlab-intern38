import avater from "../assets/avatar 1.png";
import avater1 from "../assets/avatar 2.png";
import avater2 from "../assets/avatar 4.png";
import avater3 from "../assets/avatar 3.png";
const Testimonial = () => {
  return (
    <div className="container py-8">
      <div className="text-center rounded-lg">
        <h1 className="text-3xl text-[#3A0CA3] font-semibold mb-8">
          Testimonials
        </h1>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-solid-[#3A0CA3] rounded-md">
            <p className="text-2xl mt-4 mb-8 flex items-center font-thin justify-center">
              Customer Service is the best at RemoteReady
            </p>
            <div className="flex mb-8 mt-6 gap-3 font-light">
              <img src={avater} alt="" className="p-2" />
              <div className="mr-auto">
                <p className="text-sm mt-6">Rechard Hail</p>
                <p className="text-sm mb-10">Freelancer</p>
              </div>
            </div>
          </div>
          <div className="border border-solid-[#3A0CA3] rounded-md">
            <p className="text-2xl mt-4 mb-8 flex items-center font-thin justify-center">
              Their gadgets are of high quality and standard
            </p>
            <div className="flex mb-8 mt-6 gap-3 font-light">
              <img src={avater1} alt="" className="p-2" />
              <div className="mr-auto">
                <p className="text-sm mt-6">Beatrice Broom</p>
                <p className="text-sm mb-10">CEO of Ann</p>
              </div>
            </div>
          </div>
          <div className="border border-solid-[#3A0CA3] rounded-md">
            <p className="text-2xl mt-4 mb-8 flex items-center font-thin justify-center">
              Best gadget for everyone
            </p>
            <div className="flex mb-8 mt-6 gap-3 font-light">
              <img src={avater2} alt="" className="p-2" />
              <div className="mr-auto">
                <p className="text-sm mt-6">Anita Owalu</p>
                <p className="text-sm mb-10">Product Designer</p>
              </div>
            </div>
          </div>
          <div className="border border-solid-[#3A0CA3] rounded-md">
            <p className="text-2xl mt-4 mb-8 flex items-center font-thin justify-center">
              Prices of their gadgets are very affordable
            </p>
            <div className="flex mb-8 mt-8 gap-3 font-light">
              <img src={avater3} alt="" className="p-2" />
              <div className="mr-auto">
                <p className="text-sm mt-6">Christ Crison</p>
                <p className="text-sm mb-10">Graphics designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
