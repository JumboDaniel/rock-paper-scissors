import Chip from "./chip";
//node modules
import { useEffect, useState, useContext } from "react";
import { GameContext } from "../context/gameContext";
const BetItems = () => {
  //consume the context
  const { title, startGame } = useContext(GameContext);
  const [position, setPosition] = useState<string[]>([]);
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({
    rock: 0,
    paper: 0,
    scissors: 0,
  });
  // useEffect(() => {
  //   console.log(clickCounts.rock);
  // }, [clickCounts]);
  function clickHandler(name: string) {
    // Update click counts if position already includes the current position
    if (position.includes(name)) {
      setClickCounts((prevClickCounts) => ({
        ...prevClickCounts,
        [name]: prevClickCounts[name] + 1,
      }));
      return;
    }
    //remove the last position if we have more than two positions selected
    if (position.length === 2) {
      //remove the last element from the array if the length is more than two elements
      const lastItem = position[1];
      const updatedPositon = position.slice(0, position.length - 1);
      setClickCounts((prevClickCounts) => ({
        ...prevClickCounts,
        [lastItem]: 0,
      }));
      setPosition(updatedPositon);
    }
    ///
    setPosition((prev) => [...prev, name]);
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [name]: prevClickCounts[name] + 1,
    }));
  }
  return (
    <section className="flex h-screen  flex-col items-center bg-gray-900">
      <section className="container mx-auto mt-44 flex w-full flex-col items-center justify-center px-8 py-2">
        <h2 className="py-12 text-4xl font-bold capitalize text-white">
          {title}
        </h2>

        <h2 className="font-medium text-gold">Pick your positions</h2>
        <div className="flex w-full max-w-2xl gap-4 py-12">
          <Rock
            clickHandler={clickHandler}
            active={position.includes("rock")}
            clickCounts={clickCounts}
          />
          <Paper
            clickHandler={clickHandler}
            active={position.includes("paper")}
            clickCounts={clickCounts}
          />
          <Scissors
            clickHandler={clickHandler}
            active={position.includes("scissors")}
            clickCounts={clickCounts}
          />
        </div>
      </section>
      <section>
        <button
          onClick={() => startGame(position, clickCounts)}
          className="rounded-full border border-gold bg-slate-800 px-12 py-6 font-medium text-gold"
        >
          Play
        </button>
      </section>
    </section>
  );
};

export default BetItems;

const Rock = ({ clickHandler, active, clickCounts }) => {
  return (
    <div
      className="flex min-h-[130px] w-1/3 cursor-pointer flex-col items-center justify-end gap-6 rounded-md border border-blue-500 bg-darkBlue px-4 py-5 shadow-xl"
      onClick={() => clickHandler("rock")}
    >
      {active && <Chip value={clickCounts.rock} />}
      <h3 className="text-xl font-semibold uppercase text-blue-600">ROCK</h3>
    </div>
  );
};
const Scissors = ({ clickHandler, active, clickCounts }) => {
  return (
    <div
      className="flex min-h-[130px] w-1/3 cursor-pointer flex-col items-center justify-end gap-6 rounded-md border border-red-500 bg-red-900 px-4 py-5 shadow-xl"
      onClick={() => clickHandler("scissors")}
    >
      {active && <Chip value={clickCounts.scissors} />}
      <h3 className="text-xl font-semibold uppercase text-red-600">Scissors</h3>
    </div>
  );
};
const Paper = ({ clickHandler, active, clickCounts }) => {
  return (
    <div
      className="flex min-h-[130px] w-1/3 cursor-pointer flex-col items-center justify-end gap-6 rounded-md border border-green-500 bg-green-800 px-4 py-5 shadow-xl"
      onClick={() => clickHandler("paper")}
    >
      {active && <Chip value={clickCounts.paper} />}

      <h3 className="text-xl font-semibold uppercase text-green-600">Paper</h3>
    </div>
  );
};
