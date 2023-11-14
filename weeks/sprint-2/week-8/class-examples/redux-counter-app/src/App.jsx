import { Provider } from "react-redux";
import { store } from "./store";
import { Counter } from "./components/Counter";

export const App = () => {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <h1>⟦ Redux Counter App ⟧</h1>
        <Counter/>
      </div>
    </Provider>
  );
};
