import { useSelector } from "react-redux";
import { CartIcon } from "../Icons";
import generateClassName from "../utils";
import styles from "./NavBar.module.scss";

export const NavBar  = ({ lightBackground }) => {
  const { amount } = useSelector((state) => state.cart);

  const className = generateClassName(styles, {
    NavBar: true,
    LightBackground: lightBackground
  });


  return (
     <nav className={className}>
        <div className={styles.NavCenter}>
          <h3>redux toolkit</h3>
          <div className={styles.NavContainer}>
            <CartIcon />
            <div className={styles.AmountContainer}>
              <p className={styles.TotalAmount}>{amount}</p>
            </div>
          </div>
        </div>
      </nav>
  );
};
