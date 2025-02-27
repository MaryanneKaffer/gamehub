import GameModal from "../../main_components/gameModal";
import { Button, Input, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function HangmanComponent() {

    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const { isOpen, onOpenChange } = useDisclosure();
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
    }, []);

    const handleGuess = () => {
        if (randomNumber === null) return;

        const guess = parseInt(inputValue, 10);

        if (isNaN(guess)) {
            setMessage("Please enter a valid number!");
            return;
        }

        if (guess > 100) {
            setMessage("The number is between 1 and 100!");
            return;
        }

        if (guess === randomNumber) {
            onOpenChange();
            setShowConfetti(true);

        } else if (Math.abs(guess - randomNumber) <= 5) {
            setMessage("🔥 Almost there! 🔥");

        } else if (Math.abs(guess - randomNumber) <= 10) {
            setMessage("🔥 You're close! Try again.");

        } else if (guess < randomNumber) {
            setMessage("Too low! Try again.");

        } else {
            setMessage("Too high! Try again.");
        }
    };

    const resetGame = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        setInputValue("");
        setMessage("");
        onOpenChange();
        setShowConfetti(false);
    };

    return (
        <div>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="mb-6 text-2xl text-white text-center w-[400px]">{message}</p>
                <h1 className="text-2xl mb-2">Enter your guess</h1>
                <Input label="Number" className="w-[400px] " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <Button className="mt-2" color="primary" variant="flat" onPress={handleGuess}>Guess</Button>
            </div>
            <GameModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                winNotif=<p className="mb-6 text-2xl text-center text-success">🎉 Congratulations! You guessed the number.</p>
                resetGame={resetGame}
            />
        </div>
    );
}