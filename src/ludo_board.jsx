import { useState } from "react";

// Main Ludo Board component
export default function LudoBoard() {
    // State to track moves for each player color
    const [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        green: 0,
        red: 0
    });

    return (
        <div className="ludo-board">
            {/* Game title */}
            <p>Game Begins</p>
            <div className="board">
                {/* Blue player section */}
                <p>Blue moves = {moves.blue}</p>
                <button onClick={() => setMoves({...moves, blue: moves.blue + 1})} style={{backgroundColor: "blue"}}>+1</button>
                
                {/* Yellow player section */}
                <p>Yellow moves = {moves.yellow}</p>
                <button onClick={() => setMoves({...moves, yellow: moves.yellow + 1})} style={{backgroundColor: "yellow",color: "black"}}>+1</button>
                
                {/* Green player section */}
                <p>Green moves = {moves.green}</p>
                <button onClick={() => setMoves({...moves, green: moves.green + 1})} style={{backgroundColor: "green"}}>+1</button>
                
                {/* Red player section */}
                <p>Red moves = {moves.red}</p>
                <button onClick={() => setMoves({...moves, red: moves.red + 1})} style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    ); 
}
