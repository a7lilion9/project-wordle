import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import RenderGuesses from "../RenderGuesses";

import { checkGuess } from "../../game-helpers";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isEndGame, setIsEndGame] = React.useState(false);

  const addGuess = (guess) => {
    console.log({ guess });
    const checkedGuess = checkGuess(guess, answer);
    setGuesses([...guesses, checkedGuess]);
  };

  const endGame = () => {
    const countGuesses = guesses.length - 1;
    const lastGuess = guesses[countGuesses];

    const guessIsCorrect = lastGuess
      ? !lastGuess.find((guess) => guess.status !== "correct")
      : false;

    console.log({ countGuesses, lastGuess });

    if (countGuesses >= 6) {
      setIsEndGame(true);
      return (
        <Banner status="sad" countGuesses={countGuesses} answer={answer} />
      );
    } else if (guessIsCorrect) {
      setIsEndGame(true);
      return (
        <Banner status="happy" countGuesses={countGuesses} answer={answer} />
      );
    }
    return <></>;
  };

  function handleIsEndGame() {
    return isEndGame;
  }

  return (
    <>
      <RenderGuesses guesses={guesses} />
      <GuessInput addGuess={addGuess} disabled={handleIsEndGame()} />
      {endGame()}
    </>
  );
}

function Banner({ status, countGuesses, answer }) {
  // status = happy | sad

  if (status === "happy") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>3 guesses</strong>
          .
        </p>
      </div>
    );
  } else if (status === "sad") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    );
  } else {
    return (
      <div className="sad banner">
        <p>The status string is undefined</p>
      </div>
    );
  }
}

export default Game;
