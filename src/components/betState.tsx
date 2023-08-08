import { useContext } from "react";
import { GameContext } from "../context/gameContext";

const BetState: React.FC<{ position: string[] }> = ({ position }) => {
  const { computer, result, resultAmount } = useContext(GameContext);
  const resultMessages = {
    win: "You Win",
    loss: "You lose",
    draw: "Draw",
  };

  return (
    <section className="mb-2 flex flex-col items-center text-center">
      <div className="flex gap-3 py-12 text-4xl font-bold capitalize text-white">
        <h2>{computer}</h2>
        <p>Vs</p>
        <h2>
          {position[0]}, {position[1] || ""}
        </h2>
      </div>
      <div className="flex gap-3 text-3xl font-bold text-white">
        <h3 className="text-gold">
          {result !== null ? resultMessages[result] : ""}
        </h3>
        <span>:</span>
        <h3>{resultAmount}</h3>
      </div>
    </section>
  );
};

export default BetState;
