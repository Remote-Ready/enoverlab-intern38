import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../components/CartSlice";
import "../components/css/Cart.css";
import { BiSolidCartAdd } from "react-icons/bi";
import Recent from "../components/Recent";
import gpay from "../assets/Bringing it all together with Google Pay.png";
import visa from "../assets/pngwing.png";
import master from "../assets/pngwing (1).png";

const Cart = ({ onClick }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <Link to="/categories">
        <button onClick={onClick} className="cart-button">
          &lt; continue shopping
        </button>
      </Link>

      {/* Cart ({cartItems.length}) */}

      <div className="cart-content">
        <div className="cart-length bg-white">
          <h4>Cart ({cartItems.length})</h4>
          <div className="bg-white">
            <BiSolidCartAdd
              size={100}
              className="text-purple-800 bg-white rounded-full m-auto "
            />
            {cartItems.length == 0 && <p>Your cart is empty</p>}
            <p>Explore our gadgets from the category section</p>
            <button>Shop more</button>
          </div>
        </div>

        <div className="summary bg-white">
          <p>Cart summary</p>
          <div className="subtotal">
            <p>
              <b>Subtotal </b>
            </p>
            <p>
              <b>#{calculateSubtotal()}.00</b>
            </p>
          </div>
          <button>Pay Now</button>
        </div>
      </div>

      <div className="save bg-white">
        <div className="flex">
          <p>saved items ({cartItems.length}) </p>
          <p>See All</p>
        </div>

        <div className="save-item">
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p className="price">#{item.price}</p>
              <div className="btn">
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="account bg-white">
        <div className="col-1">
          <p>SELECT PAYMENT METHOD</p>
          <input type="text" name="name" placeholder="Enter card number" />{" "}
          <br /> <br />
          <input type="number" name="mm/yy" placeholder="mm/yyyy" /> <br />{" "}
          <br />
          <input type="number" placeholder="Enter cvc" className="mb-4" />
          <button className="mb-4 text-sm">PLACE ORDER</button>
          <div className="mt-6">
            <h4 className="font-light text-sm">
              We accept bank transfer , USSD, , Debit , Credit Card
            </h4>
            <div className="flex items-center w-14">
              <img src={gpay} alt="" />
              <img src={visa} alt="" />
              <img src={master} alt="" />
            </div>
          </div>
        </div>

        <div className="col-2 p-5 ">
          <h3 className="text-sm text-gray-700">Billing Details</h3>
          <input
            type="text"
            placeholder="Enter E-mail address"
            className="font-thin mb-4 mt-2"
          />
          <input
            type="text"
            placeholder="Enter Full Name"
            className="font-light mb-4"
          />
          <input
            type="number"
            placeholder="Enter Phone number"
            className="font-light mb-4"
          />
          <input
            type="text"
            placeholder="country e.g Nigeria"
            className="font-light mb-4"
          />
          <input
            type="text"
            placeholder="State province e.g lagos"
            className="font-light mb-4"
          />
          <input
            type="text"
            placeholder="street address"
            className="font-light mb-4"
          />
          <button className="font-light text-sm ">SAVE ADDRESS</button>
        </div>
      </div>
      <Recent />
    </div>
  );
};

export default Cart;
