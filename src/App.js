import { useState } from "react";
import Board from "./components/Board";
import Choice from "./components/Choice";



function App() {
  const val = [1,2,3,4,5,6,7,8,9]
  const [value,setValue] = useState(val)
  const [choice,setChoice] = useState(['',true])

  function handleChoice (x) {
    console.log(x)
    setChoice(x)
  }
  return (
    <div className="App">
      <Board board = {value}></Board>
      <br></br>
      {choice[1] && <div>please choose X|O </div>}
      {choice[1] && <Choice click = {handleChoice}></Choice>}
      <br></br>
      {!choice[1] && <div>your choice: {choice} start the game</div>}
      
    </div>
  );
}

export default App;
