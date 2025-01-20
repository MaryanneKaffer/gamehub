import { useState } from "react";

export default function useTicTacToe() {
  const [turn, setTurn] = useState<'X' | 'O'>('X');
  const [board, setBoard] = useState<string[][]>([['', '', ''], ['', '', ''], ['', '', '']]);
  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return board[i][0];
      }
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return board[0][i];
      }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) return board[0][2];
    return board.every(row => row.every(cell => cell !== '')) ? 'Tie' : null;
  };

  const makeMove = (row: number, col: number) => {
    if (board[row][col] || winner) return;
    const newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);
    const result = checkWinner();
    if (result) setWinner(result);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard([['', '', ''], ['', '', ''], ['', '', '']]);
    setTurn('X');
    setWinner(null);
  };

  return { board, turn, winner, makeMove, resetGame };
}