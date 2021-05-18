import Button from "./Button";
import PlayerForm from "./PlayerForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button isActive={"Reset score"}>Reset Score</Button>
      <Button isActive={"Reset all"}>Reset all</Button>
      <PlayerForm />
    </div>
  );
}

export default App;
