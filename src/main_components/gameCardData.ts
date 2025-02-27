import TicTacToeImage from "../assets/tictactoe_image.png"
import TicTacToeIcon from "../assets/tictactoe_icon.png"
import CardGameImage from "../assets/cardgame_image.png"
import CardGameIcon from "../assets/cardgame_icon.png"
import GuessTheNumberIcon from "../assets/guessthenumber_icon.png"
import GuessTheNumberImage from "../assets/guessthenumber_image.png"

const gameCardData = [
    {
        gameName: "Tic Tac Toe",
        gameImage: TicTacToeImage,
        gameIcon: TicTacToeIcon,
        navigate: "/tic-tac-toe-game"
    },
    {
        gameName: "Matching Card Game",
        gameImage: CardGameImage,
        gameIcon: CardGameIcon,
        navigate: "/matching-card-game"
    },
    {
        gameName: "Guess The Number",
        gameImage: GuessTheNumberImage,
        gameIcon: GuessTheNumberIcon,
        navigate: "/guess-the-number-game"
    },
    /*{
        gameName: "Hangman",
        gameImage: GuessTheNumberImage,
        gameIcon: GuessTheNumberIcon,
        navigate: "/hangman-game"
    }*/
]

export default gameCardData