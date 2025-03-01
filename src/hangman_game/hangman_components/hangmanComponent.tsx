import GameModal from "../../main_components/gameModal";
import { Button, Input, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Gallow from "./gallow";
import { getRandomWord, HandleGuess, clean } from "./hangmanLogic";

export default function HangmanComponent() {
    const [letterValue, setLetterValue] = useState("");
    const [wordValue, setWordValue] = useState("");
    const [randomWord, setRandomWord] = useState<string | null>(null);
    const [hint, setHint] = useState("");
    const [message, setMessage] = useState("");
    const { isOpen, onOpenChange } = useDisclosure();
    const [showConfetti, setShowConfetti] = useState(false);
    const [tries, setTries] = useState(10);
    const [displayWord, setDisplayWord] = useState<string[]>([]);

    useEffect(() => getRandomWord(setHint, setRandomWord, setDisplayWord), []);
    const handleGuess = () => { HandleGuess(randomWord, setMessage, setTries, setDisplayWord, letterValue, wordValue, setLetterValue, setWordValue, onOpenChange, setShowConfetti) };

    useEffect(() => {
        if (randomWord && displayWord.join("") === randomWord && !isOpen) {
            onOpenChange();
            setShowConfetti(true);
        }
    }, [displayWord, randomWord, onOpenChange]);

    useEffect(() => {
        if (tries === 0 && !isOpen) {
            onOpenChange();
        }
        return
    }, [tries, onOpenChange]);

    const resetGame = () => {
        getRandomWord(setHint, setRandomWord, setDisplayWord);
        clean(setLetterValue, setWordValue, setMessage, onOpenChange, setShowConfetti, setTries);
    };

    return (
        <div>
            {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            <div className="justify-items-center items-center">
                <section className="flex gap-8 mb-5 relative">
                    <Gallow tries={tries} />
                    <div className="flex gap-3 mb-[7px]">
                        {displayWord.map((letter, index) => (
                            <span
                                key={index}
                                className="w-10 items-center justify-center text-6xl border-b-[5px] border-white flex mt-[50px]"
                            >
                                {letter !== "_" ? letter : ""}
                            </span>
                        ))}
                    </div>
                </section>

                <p className="my-8 text-2xl text-white text-center w-[400px]">{tries} tries left</p>
                <h1 className="text-2xl mb-5">{message}</h1>

                <section>
                    <Input
                        label="Guess the letter"
                        className="w-[400px] mb-5"
                        onKeyDown={(e) => {
                            if (/\d/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        value={letterValue}
                        onChange={(e) => setLetterValue(e.target.value.slice(0, 1))}
                    />

                    <Input
                        label="Guess the word"
                        className="w-[400px] mb-5"
                        onKeyDown={(e) => {
                            if (/\d/.test(e.key)) {
                                e.preventDefault();
                            }
                        }}
                        value={wordValue}
                        onChange={(e) => setWordValue(e.target.value)}
                    />

                    <Button className="mt-2" color="primary" variant="flat" onPress={handleGuess}>
                        Guess
                    </Button>
                    {tries <= 3 ? <h1 className="text-2xl mt-5">{hint}!!</h1> : ""}
                </section>
            </div>

            <GameModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                winNotif={
                    <>
                        {tries === 0 ? <div className="justify-items-center"><Gallow tries={tries} /> <h1 className="text-6xl text-center">{randomWord?.toUpperCase()}</h1></div> : <h1 className="text-6xl text-center">{randomWord?.toUpperCase()}</h1>}
                        {tries === 0 ? <p className="mb-6 text-2xl text-center text-danger">You lose!</p> : <p className="mb-6 text-2xl text-center text-success">🎉 You guessed the word correctly!</p>}
                    </>
                }
                resetGame={resetGame}
            />
        </div>
    );
}
