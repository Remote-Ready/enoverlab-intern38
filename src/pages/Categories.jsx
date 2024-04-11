import { useState } from "react";
import CategoryTemp from "../components/CategoryTemp";
import "../components/css/Categories.css";
import { productsCategoryMap } from "../constants";

function Categories() {
  // State variables for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [vendor, setVendor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [quality, setQuality] = useState("");

  return (
    <>
      <div className="Categories">
        <div className="cat-header">
          <div className="cat-col-1 p-4  bg-[#D9D9D9] w-[209px] h-[332px] rounded-lg">
            <h5 className="text-xl font-bold mt-6">Browse Category</h5>
            <p className="text-sm font-light mb-2">Tables</p>
            <p className="text-sm font-light mb-2">Workstation</p>
            <p className="text-sm font-light mb-2">PC</p>
            <p className="text-sm font-light mb-2">Laptop</p>
            <p className="text-sm font-light mb-2">Accessories</p>
            <p className="text-sm font-light mb-2">Surveilance & Security</p>
            <p className="text-sm font-light mb-2">Audio And Video</p>
          </div>

          <div className="cat-col-2">
            <p>Experience Vivid picture beyond belief</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div>
          <div>
            <div className="content">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div className="select-option">
                <h4>
                  <b>Sort By :</b>
                </h4>

                <select
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="">Color</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="yellow">Yellow</option>
                  {/* Add more color options as required */}
                </select>

                <select
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                >
                  <option value="">Vendor</option>
                  <option value="hp">Hp</option>
                  <option value="toshiba">Toshiba</option>
                  <option value="apple">Apple</option>
                  <option value="tecno">Tecno</option>
                  {/* Add more color options as required */}
                </select>

                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Category</option>
                  <option value="A">Category A</option>
                  <option value="B">Category B</option>
                  <option value="C">Category C</option>
                  {/* Add more category options as required */}
                </select>

                <select
                  value={quality}
                  onChange={(e) => setQuality(e.target.value)}
                >
                  <option value="">Quality</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                  {/* Add more quality options as required */}
                </select>
              </div>
            </div>

            {/*<div className="filters">
              {filteredItems.map((item) => (
                <div className="filter" key={item.id}>
                  <img src={item.image} alt="img" />
                  <p>{item.name}</p>
              <p>#{item.price}</p>*/}
            {/*</div>*/}
            {/*))}
            </div>*/}
          </div>
          <div className="">
            <div>
              {Object.entries(productsCategoryMap).map(([name, products]) => (
                <CategoryTemp key={name} name={name} products={products} />
              ))}
            </div>
          </div>

          {/* <h2>Product List</h2>
            <ul className='carts'>
              {items.map((item) => (
                <li key={item.id}>
                  <div className='list'>
                  <img src={item.image} alt="img" />
                  {item.name} - ${item.price}
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                  <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
                  </div>
                </li>
              ))}
            </ul> */}
        </div>
        {/* ) : ( */}
        {/*
       <div>
          <button onClick={handleBackToCartClick} className="cart-button">
            Back to Cart
          </button>
          <CartPage />
        </div>
          )}*/}
      </div>
    </>
  );
}

export default Categories;
