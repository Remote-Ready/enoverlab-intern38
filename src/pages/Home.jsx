import Header from "../components/Header";
import Hero from "../components/Hero";
import Product from "../components/Products";
import ProductCategories from "../components/ProductCategories";
import NewProducts from "../components/NewProducts";
import Footer from "../components/Footer";
import Top from "../components/Top";
import CategoriesItem from "../components/CategoriesItem";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Hero />
        <Top />
        <Product />
        <CategoriesItem />
        <ProductCategories />
        <NewProducts />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
