import BackButton from "../main_components/backButon";
import MatchingCardGameComponent from "./cardgame_components/cardGameComponent";
export default function MatchingCardGame() {
    
    return (
        <body className="w-screen h-screen bg-gradient-to-tr from-darkpurple via-black to-darkpurple grid justify-center text-center">
            <h1 className="text-3xl mt-5">Matching Card Game</h1>
            <MatchingCardGameComponent />
            <BackButton />
        </body>
    )
}