import React, { createContext, useState } from "react";

type GameContextType = {
  balance: number;
  wins: number;
  bets: { [key: string]: number };
  result: string | null;
  runGame: () => void;
  startGame: (
    position: string[],
    clickCounts: { [key: string]: number },
  ) => void;
  title: string;
};

const GameContext = createContext<GameContextType>({
  balance: 5000,
  wins: 0,
  bets: {},
  result: null,
  runGame: () => {},
  startGame: () => {},
  title: "",
});

const GameProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(5000);
  const [bets, setBets] = useState<{ [key: string]: number }>({});
  const [result, setResult] = useState<string | null>(null);
  const [wins, setWins] = useState(0);
  const [title, setTitle] = useState("");

  const generateTitle = (
    position: string[],
    computerChoice: string,
    result: string,
  ) => {};
  const determineWinner = (
    playerChoices: string[],
    computerChoice: string,
  ): string | null => {
    // Check if player's choices include the computer's choice
    const isDraw = playerChoices.includes(computerChoice);

    if (isDraw) {
      // If player's choices include the computer's choice, it's a draw
      return "draw";
    } else {
      // If player's choices don't include the computer's choice, generate random winner
      const outcomes = ["win", "loss"];
      const randomIndex = Math.floor(Math.random() * outcomes.length);
      return outcomes[randomIndex];
    }
  };
  const balanceUpdate = (result, balance, position) => {
    if (result === "win") {
      console.log(result, "win", balance);
    } else if (result === "loss") {
      console.log("loss");
    } else if (result === " draw") {
      console.log("draw");
    }
  };
  const startGame = (
    position: string[],
    clickCounts: { [key: string]: number },
  ) => {
    // Generate random computer choice
    const choices: ["rock" | "paper" | "scissors"] = [
      "rock",
      "paper",
      "scissors",
    ];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    //set title from the choices
    setTitle(`${computerChoice} vs ${position[0]}, ${position[1] || ""}`);
    // Determine winner
    console.log(position, computerChoice);
    const filteredData = Object.entries(clickCounts).filter(
      ([key, value]) => value !== 0,
    );
    console.log(filteredData);
    // Determine the winner based on the player's choices and computer's choice
    const result = determineWinner(position, computerChoice);
    setBalance((prev) => prev - 500);
    balanceUpdate(result, balance, position);
  };
  const runGame = () => {
    // Generate random computer choice
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    // Determine winner
    let winner = null;
    if (bets[computerChoice]) {
      winner = computerChoice;
      console.log(winner, bets[computerChoice]);
    }

    // Update result state
    setResult(winner);

    // Update balance based on result
    if (winner) {
      const betAmount = bets[winner];
      const winningRate = Object.keys(bets).length === 1 ? 14 : 3;
      setBalance((prevBalance) => prevBalance + betAmount * winningRate);
    }

    // Reset bets state
    setBets({});
  };

  return (
    <GameContext.Provider
      value={{
        balance,
        bets,
        result,
        runGame,
        wins,
        startGame,
        title,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
