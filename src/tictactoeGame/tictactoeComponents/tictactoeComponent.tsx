import { useRef, useState, useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti"; 

export default function TicTacToeComponent() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
  const [winner, setWinner] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);  

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const size = 600;
        const cellSize = size / 3;
        canvas.width = size;
        canvas.height = size;
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, size, size);
        ctx.strokeStyle = "white";
        ctx.lineWidth = 20;
        ctx.lineCap = "round";

        for (let i = 1; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(cellSize * i, 20);
          ctx.lineTo(cellSize * i, size - 20);
          ctx.stroke();
        }

        for (let i = 1; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(20, cellSize * i);
          ctx.lineTo(size - 20, cellSize * i);
          ctx.stroke();
        }

        const drawX = (x: number, y: number) => {
          const offset = cellSize * 0.3;
          ctx.beginPath();
          ctx.moveTo(x + offset, y + offset);
          ctx.lineTo(x + cellSize - offset, y + cellSize - offset);
          ctx.moveTo(x + cellSize - offset, y + offset);
          ctx.lineTo(x + offset, y + cellSize - offset);
          ctx.stroke();
        };

        const drawO = (x: number, y: number) => {
          ctx.beginPath();
          ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize * 0.3, 0, Math.PI * 2);
          ctx.stroke();
        };

        const drawBoard = () => {
          for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
              const x = col * cellSize;
              const y = row * cellSize;
              if (board[row][col] === 'X') {
                drawX(x, y);
              } else if (board[row][col] === 'O') {
                drawO(x, y);
              }
            }
          }
        };

        drawBoard();
      }
    }
  }, [board]);

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }

    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return board[0][2];
    }

    if (board.every(row => row.every(cell => cell !== ''))) {
      return 'Tie';
    }

    return null;
  };

  const handleClick = (e: React.MouseEvent) => {
    if (winner) return;

    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cellSize = canvas.width / 3;

      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);

      if (board[row][col] === '') {
        const newBoard = [...board];
        newBoard[row][col] = turn;
        setBoard(newBoard);
        setTurn(turn === 'X' ? 'O' : 'X');

        const gameResult = checkWinner();
        if (gameResult) {
          setWinner(gameResult);
          if (gameResult !== 'Tie') {
            setShowConfetti(true);  
          }
          onOpen();
        }
      }
    }
  };

  const resetGame = () => {
    setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
    setTurn('X');
    setWinner(null);
    setShowConfetti(false); 
    onOpenChange();
  };

  const navigate = useNavigate();

  return (
    <div className="game-container">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      <canvas ref={canvasRef} className="mt-28" onClick={handleClick} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="m-3"></ModalHeader>
          <ModalBody>
            {winner && <div className="result-message text-5xl text-center mb-6">{winner === 'Tie' ? 'Tie!' : `Winner: ${winner}`}</div>}
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Button size="lg" radius="full" onPress={() => navigate("/")}>
              Back to GameHub
            </Button>
            <Button color="success" size="lg" radius="full" onPress={resetGame}>
              Play Again
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
