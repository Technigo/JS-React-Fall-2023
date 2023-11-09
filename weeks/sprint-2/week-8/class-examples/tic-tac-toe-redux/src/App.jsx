import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { Board } from "./components/Board";
import { Stats } from "./components/Stats";
import { game } from "./reducers/game";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Board />
        <Stats />
      </main>
    </Provider>
  );
};
