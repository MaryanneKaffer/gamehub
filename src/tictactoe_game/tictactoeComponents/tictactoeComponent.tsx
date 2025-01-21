import GameModal from "../../main_components/gameModal.tsx";
import TicTacToeBoard from "./tictactoeBoard.tsx";
import { useDisclosure } from "@heroui/react";
import useTicTacToe from "./useTicTacToe.tsx";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function TicTacToeComponent() {
  const { board, winner, makeMove, resetGame } = useTicTacToe();
  const [showConfetti, setShowConfetti] = useState(false);
  const { isOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (winner) {
      setShowConfetti(winner !== 'Tie');
      onOpenChange();
    }
  }, [winner]);

  const handleCellClick = (row: number, col: number) => {
    makeMove(row, col);
  }
  const handleResetGame = () => {
    setShowConfetti(false);
    onOpenChange();
    resetGame();
  };

  return (
    <div className="game-container">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <TicTacToeBoard board={board} onCellClick={handleCellClick} />
      <GameModal
        winNotif={winner && <div className="result-message text-5xl text-center mb-6">{winner === 'Tie' ? 'Tie!' : `Winner: ${winner}`}</div>}
        onOpenChange={onOpenChange}
        resetGame={handleResetGame}
        isOpen={isOpen}
      />
    </div>
  );
}