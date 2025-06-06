import GameHubComponent from './main_components/gameHubComponent'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TicTacToe from './tictactoe_game/tictactoe.tsx'
import MatchingCardGame from './matchingcard_game/matchingCardGame.tsx'
import GuessTheNumber from './guessthenumber_game/guessTheNumber.tsx'
import Hangman from './hangman_game/hangman.tsx'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GameHubComponent />} />
        <Route path="/tic-tac-toe-game" element={<TicTacToe />} />
        <Route path="/matching-card-game" element={<MatchingCardGame />} />
        <Route path="/guess-the-number-game" element={<GuessTheNumber />} />
        <Route path="/hangman-game" element={<Hangman />} />
      </Routes>
    </>
  )
}

export default App
