import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../Icons";
import { decrease, increase, removeItem } from "../reducers/cart/cartSlice";
import generateClassName from "../utils";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, img, title, price, amount, showBorder }) => {
  const dispatch = useDispatch();

  const className = generateClassName(styles, {
    CartItem: true,
    ShowBorder: showBorder
  });


  return (
    <article className={className}>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className={styles.ItemPrice}>${price}</h4>
        <button
          className={styles.RemoveBtn}
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className={styles.AmountBtn}
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className={styles.Amount}>{amount}</p>
        <button
          className={styles.AmountBtn}
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
