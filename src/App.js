import { type } from "@testing-library/user-event/dist/type";
import { Component, useEffect, useState } from "react";
import Board from "./components/Board";
import Choice from "./components/Choice";

function App() {
  const [value, setValue] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [choice, setChoice] = useState(["", true]);
  const [cpu,setCpu] = useState(false)
  const [start,setStart] = useState(false)
  const [win,setWin] = useState(false)
  const [cputurn,setCputurn] = useState(false)

  function checkWin(x){
    let y = x
    console.log(y)
    let k = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]]
    let win = false
    for (let i=0; i<k.length; i++){
        console.log(y[k[i][0]],y[k[i][1]],y[k[i][2]])
        if (y[k[i][0]]==y[k[i][1]] && y[k[i][1]]==y[k[i][2]]){
            win = true
            console.log(y[k[i][0]],y[k[i][1]],y[k[i][2]],'wiiiiin')
            break
        }
      }
    return win
  }

  function handleChoice(x) {
    console.log(x);
    setChoice(x);
    setStart(true)
  }
  function handleplayerip(x) {
    if (choice[0] != "") {
      // console.log(x);
      // console.log(x);
      setValue([...x]);
        if(checkWin([...x])){setWin(true)}
        else{setCpu(!cpu)}
      let y = choice[0] == "X" ? "O" : "X";
      setChoice([y, false]);
      setCputurn(true)
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
      x1[index] = (choice[0]!='')?choice[0]:x1[index]
      setValue(x1);
      let z1 = choice[0] == "X" ? "O" : "X";
      if (start){
        setChoice([z1, false]);
        if(checkWin(x1)){setWin(true)}
      }
      setCputurn(false)
    },500)
  },[cpu])

  return (
    <div className="App">
      <Board
        board={value}
        playerip={handleplayerip}
        choiceplayer={choice[0]}
        won = {win}
        cpu = {cputurn}
      ></Board>
      <br></br>
      {choice[1] && <div>please choose X|O </div>}
      {choice[1] && <Choice click={handleChoice}></Choice>}
      <br></br>
      {(win==true)&&<div>{(choice[0]=='X')?'O':'X'} won</div>}
      {/* {!choice[1] && <div>your choice: {choice} start the game</div>} */}
    </div>
  );
}

export default App;
