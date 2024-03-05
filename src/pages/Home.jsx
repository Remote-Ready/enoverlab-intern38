//import Header from "../components/Header";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";
import NewProducts from "../components/NewProducts";
//import Footer from "../components/Footer";
import TopSellingItems from "../components/TopSellingItems";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="container">
        <Hero />
        <TopSellingItems className="mt-20" />
        <ProductCategories />
        <NewProducts />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
