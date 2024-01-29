import { useState } from 'react'
import { addToCart, removeFromCart } from '../components/CartSlice'

import { useDispatch, useSelector } from 'react-redux'
import { items } from '../components/Data'
import { Link } from 'react-router-dom'

import '../components/css/Categories.css'

function Categories() {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

    // State variables for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [vendor, setVendor] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quality, setQuality] = useState('')  

    // Filtered items based on filter values
    const filteredItems = items.filter((item) => {
      // Filter by search term
      if (searchTerm && !item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Filter by color
      if (selectedColor && item.color !== selectedColor) {
        return false;
      }
      // Filter by vendor
      if (vendor && item.vendor !== vendor) {
        return false;
      }
      // Filter by category
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }
      // Filter by quality
      if (quality && item.quality !== quality) {
        return false;
      }
      return true;
    });

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
     <div className="Categories">
      <div className="cat-header">
        <div className="cat-col-1">
          <h5>Browse Category</h5>
          <p>Tables</p>
          <p>Workstation</p>
          <p>PC</p>
          <p>Laptop</p>
          <p>Accessories</p>
          <p>Surveilance & Security</p>
          <p>Audio And Video</p>
        </div>

        <div className="cat-col-2">
          <p>Experience Vivid picture beyond belief</p>
          <button>Shop Now</button>
        </div>
      </div>
      
        <div>
          <div>
           <div className='content'>
            <input
             type="text"
             placeholder="Search..."
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="select-option">
            <h4><b>Sort By :</b></h4> 

            <select
             value={selectedColor}
             onChange={(e) => setSelectedColor(e.target.value)}
             >
            <option value="">Color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
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
           </select>

          <select
           value={selectedCategory}
           onChange={(e) => setSelectedCategory(e.target.value)}
          >
          <option value="">Category</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
          <option value="C">Category C</option>
         </select>

          <select
           value={quality}
           onChange={(e) => setQuality(e.target.value)}
          >
          <option value="">Quality</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
         </select>
         </div>
         </div>

         <div className='filters'>
         {filteredItems.map((item) => (
          <div className='filter' key={item.id}>
             <img src={item.image} alt="img" />
             <p>{item.name}</p>
             <p>#{item.price}</p>
             <div className="item-btn">
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              <button onClick={() => handleRemoveFromCart(item)}>Remove Item</button>
             </div>
          </div>
        ))}
      </div>
     </div>
    </div>
   </div>
  )
}

export default Categories