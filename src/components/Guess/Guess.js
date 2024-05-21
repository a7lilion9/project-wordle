import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span
          className={`cell ${guess ? guess[index].status : ""}`}
          key={crypto.randomUUID()}
        >
          {guess ? guess[index].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
