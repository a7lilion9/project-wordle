import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((cell, index) => (
        <span className="cell" key={crypto.randomUUID()}>
          {guess ? guess[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
