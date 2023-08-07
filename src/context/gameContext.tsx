import React, { createContext, useState } from "react";

type GameContextType = {
  balance: number;
  wins: number;
  position:number;
  bets: { [key: string]: number };
  result: string | null;
  placeBet: (position: string, amount: number) => void;
  runGame: () => void;
};

const GameContext = createContext<GameContextType>({
  balance: 5000,
  wins: 0,
  position:0,
  bets: {},
  result: null,
  placeBet: () => {},
  runGame: () => {},
});

const GameProvider: React.FC = ({ children }) => {
  const [balance, setBalance] = useState(5000);
  const [bets, setBets] = useState<{ [key: string]: number }>({});
  const [result, setResult] = useState<string | null>(null);
  const [wins, setWins] = useState(0);
  
  const placeBet = (position: string, amount: number) => {
    // Update bets state
    setBets((prevBets) => ({
      ...prevBets,
      [position]: (prevBets[position] || 0) + amount,
    }));

    // Deduct bet amount from balance
    setBalance((prevBalance) => prevBalance - amount);
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
    <GameContext.Provider value={{ balance, bets, result, placeBet, runGame }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
