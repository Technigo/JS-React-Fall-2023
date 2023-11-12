import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Board } from "./components/Board";
import { Stats } from "./components/Stats";
import { game } from "./reducers/game";

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to configureStore
const reducer = combineReducers({
  game: game.reducer,
});

// configureStore function encapsulates our store creation logic
const store = configureStore({ reducer });

export const App = () => {
  return (
    // The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  );
};
