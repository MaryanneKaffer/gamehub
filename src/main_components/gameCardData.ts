import TicTacToeImage from "../assets/tictactoe_image.png"
import TicTacToeIcon from "../assets/tictactoe_icon.png"
import CardGameImage from "../assets/cardgame_image.png"
import CardGameIcon from "../assets/cardgame_icon.png"
import GuessTheNumberIcon from "../assets/guessthenumber_icon.png"
import GuessTheNumberImage from "../assets/guessthenumber_image.png"
import HangmanIcon from "../assets/hangman_icon.svg"
import HangmanImage from "../assets/hangman_image.png"

const gameCardData = [
    {
        gameName: "Tic Tac Toe",
        gameImage: TicTacToeImage,
        alt: "Tic-Tac-Toe Image",
        gameIcon: TicTacToeIcon,
        navigate: "/tic-tac-toe-game"
    },
    {
        gameName: "Matching Card Game",
        gameImage: CardGameImage,
        alt: "Card Game Image",
        gameIcon: CardGameIcon,
        navigate: "/matching-card-game"
    },
    {
        gameName: "Guess The Number",
        gameImage: GuessTheNumberImage,
        alt: "Card Game Image",
        gameIcon: GuessTheNumberIcon,
        navigate: "/guess-the-number-game"
    },
    {
        gameName: "Hangman",
        gameImage: HangmanImage,
        alt: "Hangman Image",
        gameIcon: HangmanIcon,
        navigate: "/hangman-game"
    },
    /*{
        gameName: "Labyrinth",
        gameImage: HangmanImage,
        alt: "Labyrinth Image",
        gameIcon: HangmanIcon,
        navigate: "/labyrinth-game"
    }*/
]

export default gameCardData