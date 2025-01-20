import GameHubComponent from './main_components/gameHubComponent'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TicTacToe from './tictactoeGame/tictactoe.tsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameHubComponent />} />
        <Route path="/Tic-Tac-Toe-Game" element={<TicTacToe />} />
      </Routes>
    </>
  )
}

export default App
