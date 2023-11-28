import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../reducers/modal/modalSlice";
import generateClassName from "../utils";
import styles from './CartContainer.module.scss';
import CartItem from "./CartItem";


const CartContainer = ({ noPadding = false }) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const styling = {
    color: "red",
    textAlign: "center",
    padding: "40px"
  }

  if (amount < 1) {
    return (
      <section className={styles.Cart}>
        <header style={amount < 1 ? styling : null}>
          <h2>your bag</h2>
          <h4 className={styles.EmptyCart}>is currently empty</h4>
        </header>
      </section>
    );
  }

  const className = generateClassName(styles, {
    CartContainer: true,
    NoPadding: noPadding,
  });

  return (
    <div className={className}>
      <section className={styles.Cart}>
        <header>
          <h2>your bag</h2>
        </header>
        <div>
          {cartItems.map((item) => {
            // return <CartItem key={item.id} {...item} showBorder/>;
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className={styles.CartTotal}>
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button className={styles.ClearBtn} onClick={() => dispatch(openModal())}>
            clear cart
          </button>
        </footer>
      </section>
    </div>
  );
};
export default CartContainer;

