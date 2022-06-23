import '../assets/css/board.css'


function Board(props) {
  function handlePlayerip (x) {
    if (props.choiceplayer != ''){
      const y = props.board
      y[x.index] = props.choiceplayer[0]
      console.log('hi',y,props.choiceplayer,x.index)
      props.playerip(y)
    }
  }
    return (
      <div className="Board">
        {props.board.map((item,index)=>(
            <div onClick = {()=>{handlePlayerip({index})}} key={index} ><p>{(typeof(item)=='number')?'':item}</p></div>
        ))}
      </div>
    );
  }
  
  export default Board;