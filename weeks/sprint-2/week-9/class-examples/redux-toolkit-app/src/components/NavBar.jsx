import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
import "./NavBar.css";

export const NavBar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <>
      <nav>
        <div className="navCenter">
          <h3>redux toolkit</h3>
          <div className="navContainer">
            <CartIcon />
            <div className="amountContainer">
              <p className="totalAmount">{amount}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
