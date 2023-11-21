import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { decrease, increase, removeItem } from "../reducers/cart/cartSlice";
import "./CartItem.css";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cartItem">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="itemPrice">${price}</h4>
        <button
          className="removeBtn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amountBtn"
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amountBtn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
