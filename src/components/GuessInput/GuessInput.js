import React from "react";

function Guess({ addGuess }) {
  const [label, setLabel] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log(label);
    addGuess(label);

    setLabel("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value.toUpperCase())}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default Guess;
