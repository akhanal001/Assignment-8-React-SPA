import { useState } from "react";
import "./App.css";
import PlayerThrow from "./components/Player";
import ComputerThrow from "./components/Computer";
import ResultDisplay from "./components/Result";
import ScoreBoard from "./components/ScoreBoard";

const choices = ["rock", "paper", "scissors"];

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [ties, setTies] = useState(0);


  const handlePlayerSelect = (choice) => {
    if (isAnimating) return;

    setPlayerChoice(choice); // get the player choice then start the animation

    setIsAnimating(true);
    let i = 0;

    // After player press the choices it will Shuffle between the 
    // all the image before making decision by computer

    const shuffle = setInterval(() => {
      setComputerChoice(choices[i % choices.length]);
      i++;
    }, 500);

    setTimeout(() => {
      clearInterval(shuffle);

      const finalChoice =
        choices[Math.floor(Math.random() * choices.length)];

      setComputerChoice(finalChoice);
      setIsAnimating(false);

      determineWinner(choice, finalChoice);
    }, 3000);
  };

  // Chek who win the round player or computer and keep track of the score if player win increase win by 1 
  //if computer win increase loss by 1 if tie increase tie by 1
  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("Tie!");
      setTies(ties + 1);
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      setResult("You Win!");
      setWins(wins + 1);
    } else {
      setResult("You Lose!");
      setLosses(losses + 1);
    }
  };

// Render the player choice, computer choice, result display and scoreboard and reset button
  return (
    <div className="container">
      <h1>Rock Paper Scissors</h1>

      <h2>Your Choice</h2>
      <PlayerThrow onSelect={handlePlayerSelect} selected={playerChoice} />

      <h2>Computer Choice</h2>
      <ComputerThrow computerChoice={computerChoice} />

      <ResultDisplay result={result} />

      <ScoreBoard wins={wins} losses={losses} ties={ties} />

      <button
        className="reset-button"
        onClick={() => {
          setWins(0);
          setLosses(0);
          setTies(0);
          setResult(null);
          setPlayerChoice(null);
          setComputerChoice(null);
        }}
      >
        Reset Game
      </button>

    </div>
  );
}
export default App;