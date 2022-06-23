import { type } from "@testing-library/user-event/dist/type";
import { Component, useEffect, useState } from "react";
import Board from "./components/Board";
import Choice from "./components/Choice";

function App() {
  const [value, setValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [choice, setChoice] = useState(["", true]);
  const [cpu,setCpu] = useState(false)

  function handleChoice(x) {
    console.log(x);
    setChoice(x);
  }
  function handleplayerip(x) {
    if (choice[0] != "") {
      console.log(x);
      console.log(x);
      setValue([...x]);
      let y = choice[0] == "X" ? "O" : "X";
      setChoice([y, false]);
      setCpu(!cpu)
      }
    }

  useEffect(()=>{
    setTimeout(()=>{
      let x1 = value
      let z = []
      for (let i=0; i<x1.length; i++){
        if(typeof(x1[i])=='number'){
          z.push(i)
        }
      }
      let index = z[Math.floor(Math.random()*z.length)];
      x1[index] = choice[0]
      setValue([...x1]);
      let z1 = choice[0] == "X" ? "O" : "X";
      setChoice([z1, false]);
    },2000)
  },[cpu])

  return (
    <div className="App">
      <Board
        board={value}
        playerip={handleplayerip}
        choiceplayer={choice[0]}
      ></Board>
      <br></br>
      {choice[1] && <div>please choose X|O </div>}
      {choice[1] && <Choice click={handleChoice}></Choice>}
      <br></br>
      {/* {!choice[1] && <div>your choice: {choice} start the game</div>} */}
    </div>
  );
}

export default App;
