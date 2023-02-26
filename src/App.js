import './App.css'
import { useState, useEffect } from 'react'
import Square from './Components/square'
import { Patterns } from './Patterns'

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [player, setPlayer] = useState("0")
  const [result, setResult] = useState({ winner: "none", state:"none" })
  const [titular, setTitular] = useState("Tic Tac Toe")

  useEffect(() => {
    checkWin()
    checkIfTie()
    setPlayer(player==="X"?"0":"X")
    console.log('useEffect #1')
  }, [board])

  useEffect(() => {
    if (result.state !== "none") {
      //alert(`Game Finished! (¡juego terminado!) Winning Player (jugador ganador): ${result.winner}`)
      setTitular(`End Game result -> ${result.winner}`)
      console.log("fin")
    }
    console.log('useEffect #1')
  }, [result])

  const chooseSquare = (square) => {
    if (result.state !== "none") {
      console.log('chooseSquare run null')
      return null
    }
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        console.log(`chooseSquare ${player}`)
        return player
      }
      console.log(`chooseSquare ${val}`)
      return val
    }))

  }

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]]
      if (firstPlayer === "") return
      let foundWiningPattern = true
      currPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWiningPattern = false
        }
      })
      if (foundWiningPattern){
        setResult({winner: player, state: "Won (ganador)"})
      }
    })
    console.log(`checkWin run`)
  }

  const checkIfTie = () => {
    let filled = true;
    board.forEach( (square) => {
      if (square === ""){
        filled = false
      }
    })
    if (filled){
      setResult({winner: "No One (ninguno)", state: "Tie (empate)"})
    }
    console.log(`checkIfTie run`)
  }
  
  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setPlayer("0")
    setResult({winner: "none", state: "none"})
    setTitular("Tic Tac Toe")
    console.log(`restartGame run`)
  }

  const Pie = () => {
    return (
        <button onClick={() => restartGame()}>reiniciar aplicación
        </button>
    )
  }

  return (
    <div className="App">
      <div className="board">
        <div className="encabezado">
          {titular}
        </div>
        <div className='row'>
          <Square val={board[0]} chooseSquare={() => { chooseSquare(0) }} />
          <Square val={board[1]} chooseSquare={() => { chooseSquare(1) }} />
          <Square val={board[2]} chooseSquare={() => { chooseSquare(2) }} />
        </div>
        <div className='row'>
          <Square val={board[3]} chooseSquare={() => { chooseSquare(3) }} />
          <Square val={board[4]} chooseSquare={() => { chooseSquare(4) }} />
          <Square val={board[5]} chooseSquare={() => { chooseSquare(5) }} />
        </div>
        <div className='row'>
          <Square val={board[6]} chooseSquare={() => { chooseSquare(6) }} />
          <Square val={board[7]} chooseSquare={() => { chooseSquare(7) }} />
          <Square val={board[8]} chooseSquare={() => { chooseSquare(8) }} />
        </div>
        <div className="pie">
          <Pie />
        </div>
      </div>
    </div>
  )
}



export default App
