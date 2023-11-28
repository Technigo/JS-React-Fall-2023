import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import CartContainer from "./components/CartContainer";
import { Modal } from "./components/Modal";
import { NavBar } from "./components/NavBar";
import { calculateTotals, getCartItems } from "./reducers/cart/cartSlice";

export const App = () => {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer noPadding />
    </main>
  );
};
export default App;
