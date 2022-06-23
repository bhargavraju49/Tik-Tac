import '../assets/css/board.css'


function Board(props) {
    return (
      <div className="Board">
        {props.board.map((item,index)=>(
            <div className="cell" key={index}><p>{(typeof(item)=='number')?'':item}</p></div>
        ))}
      </div>
    );
  }
  
  export default Board;