import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function RenderGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess guess={guesses[index]} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default RenderGuesses;
