import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contacts() {
  return (
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <Header />
      <h2 className="text-2xl font-bold text-[#3A0CA3]">Get In Touch</h2>
      <p className="py-6 text-[#8D55EF] font-sans ">
        Feel free to drop a message below
      </p>
      <div>
        <form action="" className="flex flex-col w-full md:w-1/2">
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
        </form>
        <button className=" bg-[#3A0CA3] rounded-md pb-2 pt-2 p-8 mt-10 text-white font-thin text-sm">
          Send Message
        </button>
        <div className="md:flex md:justify-between md:items-center sm:px-12 py-7">
          <h2 className="lg:text-2xl text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 "></h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}
