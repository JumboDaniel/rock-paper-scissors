import React, { createContext, useState } from "react";

type GameContextType = {
  balance: number;
  resultAmount: number;
  bets: number;
  result: "win" | "loss" | "draw" | null;
  startGame: (
    position: string[],
    clickCounts: { [key: string]: number },
    betAmount: number,
  ) => void;
  computer: string;
  wins: number;
};

const GameContext = createContext<GameContextType>({
  balance: 5000,
  resultAmount: 0,
  bets: 0,
  result: null,
  startGame: () => {},
  computer: "",
  wins: 0,
});

const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [balance, setBalance] = useState(5000);
  const [bets, setBets] = useState<number>(0);
  const [result, setResult] = useState<"win" | "loss" | "draw" | null>(null);
  const [resultAmount, setResultAmount] = useState(0);
  const [computer, setComputer] = useState("");
  const [wins, setWins] = useState(0);

  const determineWinner = (
    playerChoices: string[],
    computerChoice: string,
  ): string => {
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
  const balanceUpdate = (
    result: string,
    position: string[],
    betAmount: number,
  ) => {
    let multiplier = 1;

    if (result === "win") {
      setResult("win");
      multiplier = position.length === 1 ? 14 : 3;
    } else if (result === "draw") {
      setResult("draw");
      if (position.length === 2) {
        multiplier = -1;
      }
    } else if (result === "loss") {
      setResult("loss");
      multiplier = -1;
    }
    setResultAmount(betAmount * multiplier);
    setBalance((prevBalance) => prevBalance + betAmount * multiplier);
  };
  const updateWins = () => {
    if (result === "win") setWins((prev) => prev + 1);
  };
  const startGame = (
    position: string[],
    clickCounts: { [key: string]: number },
    betAmount: number,
  ) => {
    // Generate random computer choice
    const choices: ["rock", "paper", "scissors"] = [
      "rock",
      "paper",
      "scissors",
    ];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setComputer(computerChoice);
    //set title from the choices
    // Determine winner
    // Determine the winner based on the player's choices and computer's choice
    const result = determineWinner(position, computerChoice);
    balanceUpdate(result, position, betAmount);
    //update the wins count
    updateWins();
    //update bets
    setBets((prev) => prev + 1);
  };

  return (
    <GameContext.Provider
      value={{
        balance,
        bets,
        resultAmount,
        startGame,
        computer,
        result,
        wins
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
