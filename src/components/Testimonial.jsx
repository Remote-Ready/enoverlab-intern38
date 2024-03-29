import anita from "../assets/image 34.png";
const Testimonial = () => {
  return (
    <div className="container items-center justify-center text-center py-16">
      <div>
        <h1 className="text-2xl text-[#3A0CA3] font-bold">Testimonials</h1>
        <h3 className="text-3xl mt-5">27+ happy users</h3>
        <p className="mt-4 text-sm">
          Whether you’re working from home or your office, we help make your
          work environment comfortable{" "}
        </p>
      </div>
      <div className="bg-[#D9D9D9] flex flex-col items-center mt-8 rounded-2xl w-1/4 m-auto py-12 px-8">
        <img src={anita} alt="" className="h-[208px] w-[188px]" />
        <h1 className="text-[#A0A0A0] text-2xl mt-4">Anita Collins</h1>
        <p className="text-2xl">
          I had troubles getting gadgets for my home office, thanks to you guys,
          I’m all set up
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
