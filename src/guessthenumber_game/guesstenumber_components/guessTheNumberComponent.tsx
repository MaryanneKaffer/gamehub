import GameModal from "../../main_components/gameModal";
import { Button, Input, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { getRandomNumber, handleGuess, clean } from "./guessthenumberLogic";

export default function GuessTheNumberdComponent() {
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const { isOpen, onOpenChange } = useDisclosure();
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setRandomNumber(getRandomNumber());
    }, []);

    const resetGame = () => {
        setRandomNumber(getRandomNumber());
        clean(setInputValue, setMessage, onOpenChange, setShowConfetti);
    };

    return (
        <div>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <div className="justify-items-center items-center ">
                <p className="text-xl text-white w-[400px]">{message}</p>
                <div className="mt-10">
                    <h1 className="text-2xl mb-2">Enter your guess</h1>
                    <Input label="Number" className="lg:w-[400px] w-[80dvw]" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (!/[\d]/.test(e.key) && !["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Enter"].includes(e.key)) {
                                e.preventDefault();
                            } else if (inputValue.length >= 3 && /\d/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                    />
                    <Button className="mt-2" color="primary" variant="flat" onPress={() => {
                        if (randomNumber !== null) {
                            handleGuess(randomNumber, inputValue, setMessage, onOpenChange, setShowConfetti);
                        }
                    }}>Guess</Button>
                </div>
            </div>
            <GameModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                winNotif={<><p className="font-bold text-center text-6xl mb-5">🎊{randomNumber}🎊</p><p className="mb-6 text-2xl text-center text-success whitespace-pre-line">{"Congratulations!\nYou guessed the number."}</p></>}
                resetGame={resetGame}
            />
        </div>
    );
}