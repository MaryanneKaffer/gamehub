document.documentElement.classList.add("dark");
import { useNavigate } from "react-router-dom";
import GameCards from "./gameCards";

export default function GameHubComponent() {
    const navigate = useNavigate();
    return (
        <body className="bg-gradient-to-tr from-darkblue via-black to-darkblue h-screen grid justify-center text-center">
            <h1 className="text-3xl mt-5">Game Hub</h1>
        <div >
            <GameCards
                onPress={() => navigate("/tic-tac-toe-game")}
                gameName="Tic Tac Toe"
                gameImage="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-2048x2048-g58f0u84.png"
                gameIcon="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-2048x2048-g58f0u84.png"
            />
            </div>
        </body>
    );
}