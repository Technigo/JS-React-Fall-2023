import { useDispatch } from "react-redux";
import { clearCart } from "../reducers/cart/cartSlice";
import { closeModal } from "../reducers/modal/modalSlice";
import "./Modal.css";

export const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modalContainer">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btnContainer">
          <button
            type="button"
            className="btn confirmBtn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clearBtn"
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
