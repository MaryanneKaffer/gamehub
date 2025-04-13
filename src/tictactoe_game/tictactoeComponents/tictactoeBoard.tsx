import { useEffect, useRef } from "react";

interface TicTacToeBoardProps {
    board: string[][];
    onCellClick: (row: number, col: number) => void;
}

export default function TicTacToeBoard({ board, onCellClick }: TicTacToeBoardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const handleClick = (e: React.MouseEvent) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (rect) {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cellSize = rect.width / 3;
            onCellClick(Math.floor(y / cellSize), Math.floor(x / cellSize));
        }
    };
    return <canvas ref={canvasRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[85dvw] lg:max-w-[500px] col-span-12 sm:col-span-7" onClick={handleClick} />;
}
