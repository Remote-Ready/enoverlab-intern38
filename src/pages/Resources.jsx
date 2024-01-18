import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Resources() {
  return (
    <>
      <Header />
      <div className=" text-[#636262] text-sm container">
        <h3 className="text-[#232323] text-md font-semibold mt-8 gap-1">
          Agreement
        </h3>
        <h1 className="mt-4 text-2xl text-[#232323] font-bold mb-8 ">
          Terms Of Service
        </h1>
        <p className="text-sm font-light mb-4">
          Several contract types utilize terms and conditions. When there is a
          formal agreement to create with another individual or entity,
          anything. This strategy will help foster a sense of importance and
          inclusion on all sides.
        </p>
        <p className="text-sm font-light mb-4">
          Several contract types utilize terms and conditions. When there is a
          formal agreement to create with another individual or entity, consider
          how you would like to structure your deal and negotiate the terms and
          conditions with the other side before finalizing anything. This
          strategy will help foster a sense of importance and inclusion on all
          sides.
        </p>
        <ul className="text-sm font-light list-disc">
          <li className="mb-2">
            Several contract types utilize terms and conditions. When there is a
            formal agreement to create with another individual or entity,
            anything.
          </li>
          <li className="mb-2">
            Several contract types utilize terms and conditions. When there is a
            formal agreement to create with another individual or entity,
            anything.
          </li>
          <li className="mb-2">
            Several contract types utilize terms and conditions. When there is a
            formal agreement to create with another individual or entity,
            anything.
          </li>
          <li className="mb-2">
            Several contract types utilize terms and conditions. When there is a
            formal agreement to create with another individual or entity,
            anything.
          </li>
          <li>
            Several contract types utilize terms and conditions. When there is a
            formal agreement to create with another individual or entity,
            anything.
          </li>
        </ul>
        <p className="mt-4 text-sm font-light">
          Several contract types utilize terms and conditions. When there is a
          formal agreement to create with another individual or entity,
          anything.
        </p>
        <p className=" mt-4 text-sm font-light">
          Several contract types utilize terms and conditions. When there is a
          formal agreement to create with another individual or entity,
          anything. This strategy will help foster a sense of importance and
          inclusion on all sides.
        </p>
        <button className="mt-8 p-4 text-[#3A0CA3] bg-white text-sm font-semibold">
          I do not agree
        </button>
        <button className="text-white bg-[#3A0CA3] px-4 py-2 rounded-sm">
          I agree with terms
        </button>
        <Footer />
      </div>
    </>
  );
}
