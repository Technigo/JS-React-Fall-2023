import { createSlice } from "@reduxjs/toolkit";
import { calculateWinner } from "../utils/calculateWinner";

const newGame = {
  squares: [null, null, null, null, null, null, null, null, null],
  winner: null,
  player: "x",
};

export const game = createSlice({
  name: "game",
  initialState: newGame,
  reducers: {
    captureSquare: (state, action) => {
      const { index } = action.payload;

      // If the square is 'uncaptured', capture it
      if (state.squares[index] === null) {
        state.squares[index] = state.player;
      }

      // Change the player to the next player
      if (state.player === "x") {
        state.player = "o";
      } else {
        state.player = "x";
      }

      // If a winner hasn't already been declared, then check
      // who the winner is
      if (!state.winner) {
        state.winner = calculateWinner(state.squares);
      }
    },
    restart: () => {
      return newGame;
    },
  },
});

export const { captureSquare, restart } = game.actions;