import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../components/CartSlice";
import "../components/css/Cart.css";
import { BiSolidCartAdd } from "react-icons/bi";
import Recent from "../components/Recent";
import gpay from "../assets/Bringing it all together with Google Pay.png";
import mobile from "../assets/9Mobile Ng_ Get Free 1GB Data For Night Browsing, see how to do this.png";
import mtn from "../assets/Call Divert_ How to Cancel Call Forwarding on MTN.png";

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
          <button className="mb-4">Accept Payment</button>
          <div className="mt-6">
            <h4 className="font-light text-sm">Use different method</h4>
            <div className="flex items-center ju">
              <img src={gpay} alt="" />
              <img src={mobile} alt="" />
              <img src={mtn} alt="" />
            </div>
          </div>
        </div>

        <div className="col-2">
          <p>Address Book</p>
          <small>Your Default Shipping Address</small>
          <br /> <br />
          <small>Olatunji Badmus</small>
          <br /> <br />
          <small>15 Kirikiri Road, Mushin, Lagos.</small>
          <br /> <br />
          <small>+2348123456789</small>
        </div>
      </div>
      <Recent />
    </div>
  );
};

export default Cart;
