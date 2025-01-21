document.documentElement.classList.add("dark");
import { useNavigate } from "react-router-dom";
import GameCards from "./gameCards";
import GameHubIcon from "../assets/gamehub_icon.png"
import TicTacToeImage from "../assets/tictactoe_image.png"
import TicTacToeIcon from "../assets/tictactoe_icon.png"
import CardGameImage from "../assets/cardgame_image.png"
import CardGameIcon from "../assets/cardgame_icon.png"
export default function GameHubComponent() {
    const navigate = useNavigate();
    return (
        <body className="bg-gradient-to-tr from-darkgreen via-black to-darkgreen h-screen grid justify-center text-center">
            <h1 className="text-3xl mt-5"><img src={GameHubIcon} className="w-10 h-10 inline-block" /> Game Hub <img src={GameHubIcon} className="w-10 h-10 inline-block" /></h1>
            <div className="m-1">
                <GameCards
                    onPress={() => navigate("/tic-tac-toe-game")}
                    gameName="Tic Tac Toe"
                    gameImage={TicTacToeImage}
                    gameIcon={TicTacToeIcon}
                />
                <GameCards
                    onPress={() => navigate("/matching-card-game")}
                    gameName="Tic Tac Toe"
                    gameImage={CardGameImage}
                    gameIcon={CardGameIcon}
                />
                <GameCards
                    onPress={() => navigate("/matching-card-game")}
                    gameName="Tic Tac Toe"
                    gameImage="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-2048x2048-g58f0u84.png"
                    gameIcon="https://static-00.iconduck.com/assets.00/tic-tac-toe-icon-2048x2048-g58f0u84.png"
                />
            </div>
        </body>
    );
}