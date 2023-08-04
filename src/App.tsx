import "./App.css";
import { useContext } from "react";
import { GameContext } from "./context/gameContext";
import Header from "./components/header";
function App() {
  const { balance } = useContext(GameContext);
  return (
    <section>
      <Header/>
      <h1 className="text-3xl text-blue-300 font-bold underline">
        Hello world!
        {balance}
      </h1>
    </section>
  );
}

export default App;
