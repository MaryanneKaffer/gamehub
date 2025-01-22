import GameModal from "../../main_components/gameModal";
import { useDisclosure } from "@heroui/react";
import card1 from "../card_icons/card_1.png";
import card2 from "../card_icons/card_2.png";
import card3 from "../card_icons/card_3.png";
import card4 from "../card_icons/card_4.png";
import card5 from "../card_icons/card_5.png";
import { useEffect, useState } from "react";
import Confetti from "react-confetti"; 
import CardBoard from "./cardBoard";

const cardImages = [card1, card2, card3, card4, card5];
const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5);

export default function MatchingCardGameComponent() {
    const [revealed, setRevealed] = useState<boolean[]>(new Array(10).fill(false));
    const [firstSelection, setFirstSelection] = useState<number | null>(null);
    const [secondSelection, setSecondSelection] = useState<number | null>(null);
    const [gameOver, setGameOver] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const { isOpen, onOpenChange } = useDisclosure();

    const resetGame = () => {
        setRevealed(new Array(10).fill(false)); 
        setFirstSelection(null); 
        setSecondSelection(null); 
        setGameOver(false); 
        setShowConfetti(false);  
        onOpenChange();
        shuffledCards.sort(() => Math.random() - 0.5);
    };
    
    useEffect(() => {
        if (revealed.every((r) => r === true)) {
            setGameOver(true);
            setShowConfetti(true);
            onOpenChange();
        }
    }, [revealed]);

    return (
        <>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <CardBoard
                shuffledCards={shuffledCards}
                revealed={revealed}
                setRevealed={setRevealed}
                firstSelection={firstSelection}
                setFirstSelection={setFirstSelection}
                secondSelection={secondSelection}
                setSecondSelection={setSecondSelection}
                setGameOver={setGameOver}
            />
            <GameModal
                winNotif={gameOver && <h1 className="text-3xl text-center mb-6 text-success">Congratulations! You won!</h1>}
                resetGame={resetGame}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </>
    );
}