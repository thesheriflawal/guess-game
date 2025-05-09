import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

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
            <input type="number" name="enter-guess" id="enter-guess" />
          </div>

          <div className="guess">
            <span className="score">Too low!</span>
            <button className="guess-btn" id="guess-btn">
              Guess
            </button>
          </div>
          <div className="remaining">
            <p>Remaining guesses: </p>
            <span className="remaining-guesses">5</span>
          </div>
          <button>Restart</button>


          <div className="mode">
            <p>Mode</p>
            <input type="checkbox" name="mode" id="mode" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
