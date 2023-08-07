import "./App.css";
import { useContext } from "react";
import { GameContext } from "./context/gameContext";
import Header from "./components/header";
import BetItems from "./components/betItems";

function App() {
  const { balance } = useContext(GameContext);
  return (
    <section>
      <Header balance={balance}/>
      <BetItems/>
    </section>
  );
}

export default App;
