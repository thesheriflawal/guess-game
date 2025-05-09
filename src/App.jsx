import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [computerGuess, setComputerGuess] = useState(0);
  const [userGuess, setUserGuess] = useState("");
  const [hasGuessed, setHasGuessed] = useState(false);
  const [feedback, setFeedback] = useState("Feedback");

  const handleGuess = () => {
    if (userGuess === "") return;
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setComputerGuess(randomNumber);
    const userNumber = parseInt(userGuess);

    if (userNumber < randomNumber) {
      setFeedback("Too low!");
    } else if (userNumber > randomNumber) {
      setFeedback("Too high!");
    } else {
      setFeedback("Correct!");
    }

    setHasGuessed(true);
  };

  const handleRestart = () => {
    setComputerGuess(0);
    setUserGuess("");
    setHasGuessed(false);
    setFeedback("Feedback");
  };

  return (
    <>
      <div className="container">
        <div className="gues-game">
          <h1>Number Guesser Game</h1>
          <div className="difficulty">
            <p>Difficulty: </p>
            <select>
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
              disabled={hasGuessed}
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
              disabled={hasGuessed}
            >
              Guess
            </button>
          </div>
          <div className="remaining">
            <p>Remaining guesses: </p>
            <span className="remaining-guesses">5</span>
          </div>

          <button className="restart" onClick={handleRestart}>
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
