import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [computerGuess, setComputerGuess] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [hasGuessed, setHasGuessed] = useState(false);
  const [feedback, setFeedback] = useState("Feedback");
  const [remainingGuesses, setRemainingGuesses] = useState(5);
  const [difficulty, setDifficulty] = useState("medium");

  const handleGuess = () => {
    if (userGuess === "" || hasGuessed || remainingGuesses <= 0) return;

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setComputerGuess(randomNumber);
    const userNumber = parseInt(userGuess);

    if (userNumber > 100 || userNumber < 1 || isNaN(userNumber)) {
      setFeedback("Invalid!");
    } else if (userNumber < randomNumber) {
      setFeedback("Too low!");
    } else if (userNumber > randomNumber) {
      setFeedback("Too high!");
    } else {
      setFeedback("Correct!");
    }

    setHasGuessed(true);
    setRemainingGuesses((prev) => prev - 1);
  };

  const handleRestart = (level = difficulty) => {
    setComputerGuess(0);
    setUserGuess("");
    setHasGuessed(false);
    setFeedback("Feedback");

    if (level === "easy") setRemainingGuesses(10);
    else if (level === "medium") setRemainingGuesses(5);
    else if (level === "hard") setRemainingGuesses(3);
  };

  return (
    <>
      <div className="container">
        <div
          className={`result-message ${remainingGuesses === 0 ? "show" : ""}`}
        >
          <h1>YOU ARE NOW DONE WITH THE GAME.</h1>
          <p>Refresh the page to start over again</p>
        </div>
        <div className="gues-game">
          <h1>Number Guesser Game</h1>
          <div className="difficulty">
            <p>Difficulty: </p>
            <select
              value={difficulty}
              onChange={(e) => {
                const level = e.target.value;
                setDifficulty(level);
                handleRestart(level);
              }}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="enter-guess">
            <p>Enter your guess: </p>
            <input
              type="number"
              name="enter-guess"
              id="enter-guess"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              disabled={hasGuessed || remainingGuesses <= 0}
            />
          </div>

          <div className="computer-guess">
            <p>Computer's guess: </p>
            <input
              type="number"
              name="computer-guess"
              id="computer-guess"
              value={hasGuessed ? computerGuess : ""}
              disabled
            />
          </div>

          <div className="guess">
            <span className="score">{feedback}</span>
            <button
              className="guess-btn"
              id="guess-btn"
              onClick={handleGuess}
              disabled={hasGuessed || remainingGuesses <= 0}
            >
              Guess
            </button>
          </div>

          <div className="remaining">
            <p>Remaining guesses: </p>
            <span className="remaining-guesses">{remainingGuesses}</span>
          </div>

          <button
            className="restart"
            onClick={handleRestart}
            disabled={remainingGuesses === 0}
          >
            Restart
          </button>

          <div className="animation">
            <p>Animations</p>
            <input
              className="animation-checkbox"
              type="checkbox"
              name="animation"
              id="animation"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
