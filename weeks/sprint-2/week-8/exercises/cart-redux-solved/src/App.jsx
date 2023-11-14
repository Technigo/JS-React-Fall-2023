import { Provider } from "react-redux";
import Cart from "./components/Cart";
import ProductList from "./components/ProducList";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};
