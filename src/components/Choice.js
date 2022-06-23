
import '../assets/css/board.css'

function Choice (props) {
    function handleclick (x){
        console.log('hi',x)
        props.click([x,false])
    }
    return (
        <div className="Choice">
            <div onClick={()=>{handleclick('X')}}><p>X</p></div>
            <div onClick={()=>{handleclick('O')}}><p>O</p></div>
        </div>
    )
}

export default Choice