import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../reducers/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              {item.name}
              <button onClick={() => dispatch(removeItem(item))}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
