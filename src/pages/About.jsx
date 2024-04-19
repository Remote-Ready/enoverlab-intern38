import pixel from "../assets/about pic.png";
import { FaArrowRightLong } from "react-icons/fa6";
import station from "../assets/workstation-space-where-a-freelancer-sit-to-work.png";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import Vision from "../components/Vision";
import point from "../assets/Frame 482202.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacts() {
  return (
    <>
      <Header />
      <div className="container flex flex-wrap lg:flex-nowrap gap-8 items-center justify-center py-10">
        <div className="basis-[552px] flex-grow">
          <h2 className="text-3xl text-[#3A0CA3]">About Us</h2>
          <p className="text-[#222222] text-sm font-light">
            At RemoteReady, we specialize in providing high-quality workstations
            for individuals who work from home and also deals in selling and
            buying of workstation gadgets.
          </p>
          <button className="flex gap-2 text-white font-thin text-center items-center bg-[#3A0CA3] mt-6 py-2 px-4 rounded-lg">
            Read More
            <FaArrowRightLong className="mt-1" />
          </button>
        </div>
        <img src={pixel} alt="" />
      </div>
      <div className="container flex flex-col-reverse lg:flex-row gap-8 items-center justify-center py-10">
        <img src={station} alt="" />
        <div className="lg:basis-[552px] flex-grow">
          <h1 className="text-[#3A0CA3] text-3xl">Our Services</h1>
          <p className="text-[#222222] text-sm">We serve you the right way</p>
          <div className="mt-8 text-[#222222] font-light text-sm">
            <div className="flex gap-4">
              <img src={point} alt="" className="h-[50%] mt-4" />
              <h3 className="">
                We provide you with the state of the art workstation gadgets
              </h3>
            </div>
            <div className="flex w-14 mt-4 gap-4">
              <img src={point} alt="" className="h-[50%] mt-6" />
              <h3>Active customer support</h3>
            </div>
          </div>
        </div>
        {/* <div className="container flex basis-[552px] justify-between"></div> */}
      </div>
      <Vision />
      <Testimonial />
      <div className="container flex flex-col py-4 justify-center max-w-screen-lg mx-auto h-full">
        <h2 className="text-2xl font-bold mb-4">Feel free to talk to us</h2>
        <div>
          <form
            action="https://getform.io/f/c6cd9b20-75d6-4956-a821-804fda2ae5eb"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="Full Name"
              placeholder="Enter Your Full Name"
              className=" p-2 bg-transparent border border-solid bg-[#D9D9D9] rounded-sm focus:outline-none"
            />
            <input
              type="text"
              name="Email Address"
              placeholder="Enter Your Email Address"
              className=" p-2 mt-8 bg-transparent border border-solid bg-[#D9D9D9] rounded-sm focus:outline-none"
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="p-2 mt-8 bg-transparent border border-solid bg-[#D9D9D9] rounded-sm focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className=" bg-[#3A0CA3] rounded-md pb-2 pt-2 p-8 mt-10 text-white font-thin text-sm"
            >
              Send Message
            </button>
          </form>
          <div className="md:flex md:justify-between md:items-center sm:px-12 py-7">
            <h2 className="lg:text-2xl text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 "></h2>
          </div>
        </div>
        <Team />
      </div>
      <Footer />
    </>
  );
}
