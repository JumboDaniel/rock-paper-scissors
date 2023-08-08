import {useContext} from 'react'
import { GameContext } from "../context/gameContext";

const Header = () => {
  const { balance, bets,wins } = useContext(GameContext);

  return (
    <section className="bg-black">
      <section className="container mx-auto w-full px-8 py-2">
        <section className="flex justify-evenly">
          <div className="flex gap-2">
            <p className="text-gold">Balance:</p>
            <p className="text-white">{balance}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gold">Bets:</p>
            <p className="text-white">{bets}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-gold">Win:</p>
            <p className="text-white">{wins}</p>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Header;
