import TicTacToeComponent from "./tictactoeComponents/tictactoeComponent";

export default function TicTacToe() {
    
    return (
        <body className="bg-gradient-to-tr from-darkblue via-black to-darkblue h-screen grid justify-center text-center ">
        <div className="text-3xl mt-5">
            <h1>Tic Tac Toe</h1>    
            <TicTacToeComponent />
        </div>
        </body>
    );
}
