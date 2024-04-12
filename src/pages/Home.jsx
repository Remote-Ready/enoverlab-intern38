//import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import NewProducts from "../components/NewProducts";
//import Footer from "../components/Footer";
import TopSellingItems from "../components/TopSellingItems";
import Vid from "../components/Vid";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <Hero />
        <Vid />
        <TopSellingItems className="mt-20" />
        <ProductCategories />
        <NewProducts />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
