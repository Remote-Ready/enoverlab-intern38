const Footer = () => {
  return (
    <div className=" container grid sm:grid-cols-3 gap-8 font-thin text-[#232323] py-20">
      <div>
        <h5 className="text-xl text-[#3A0CA3] font-bold mb-4">Brands</h5>
        <ul className="text-sm mb-2">Dell</ul>
        <ul className="text-sm mb-2">Toshiba</ul>
        <ul className="text-sm">Macbook</ul>
      </div>
      <div>
        <h5 className="text-xl text-[#3A0CA3] font-bold mb-4">Legal</h5>
        <ul className="mb-2 text-sm font">Privacy policy</ul>
        <ul className="mb-2">Terms of sevice</ul>
        <ul className="">Complaints</ul>
      </div>
      <div>
        <h5 className="text-xl text-[#3A0CA3] font-bold mb-4">About Us</h5>
        <ul>
          Contact us
          <br />
          info@billease.com
        </ul>
        <ul className="mt-2">
          Plot45, Chevron Drive,
          <br />
          Lekki, Lagos
        </ul>
      </div>
    </div>
  );
};

export default Footer;
