import { useDispatch } from "react-redux";
import { clearCart } from "../reducers/cart/cartSlice";
import { closeModal } from "../reducers/modal/modalSlice";
import generateClassName from "../utils";
import styles from "./Modal.module.scss";

export const Modal = ({ blackBorder }) => {
  const dispatch = useDispatch();

  const className = generateClassName(styles, {
    Modal: true,
    BlackBorder: blackBorder
  });

  return (
      <aside className={styles.ModalContainer}>
      <div className={className}>
        <h4>remove all items from your shopping cart?</h4>
        <div className={styles.BtnContainer}>
          <button
            type="button"
            className={styles.ConfirmBtn}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className={styles.ClearBtn}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
