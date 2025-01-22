import TicTacToeComponent from "./tictactoeComponents/tictactoeComponent";
import BackButton from "../main_components/backButon";

export default function TicTacToe() {
    
    return (
        <body className="bg-gradient-to-tr from-darkgray via-black to-darkgray h-screen grid justify-center text-center ">
        <div className="text-3xl mt-5">
            <h1>Tic Tac Toe</h1>    
            <TicTacToeComponent />
            <BackButton />
        </div>
        </body>
    );
}
