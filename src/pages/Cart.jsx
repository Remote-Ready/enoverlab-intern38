import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../components/CartSlice";
import "../components/css/Cart.css";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdKeyboardArrowLeft } from "react-icons/md";

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
        <div className="cart-length">
          <h4>Cart ({cartItems.length})</h4>
          <div>
            <BiSolidCartAdd
              size={100}
              className="text-purple-800 bg-white rounded-full m-auto "
            />
            {cartItems.length == 0 && <p>Your cart is empty</p>}
            <p>Explore our gadgets from the category section</p>
            <button>Shop more</button>
          </div>
        </div>

        <div className="summary">
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

      <div className="save">
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

      <div className="account">
        <div className="col-1">
          <p>Account Overview</p>
          <p>Account Details</p>
          <label htmlFor="">Address</label> <br />
          <input type="text" name="name" placeholder="Name" /> <br /> <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
          /> <br /> <br />
          <button>Send</button>
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
    </div>
  );
};

export default Cart;
