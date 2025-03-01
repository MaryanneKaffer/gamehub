import wordData from "./wordData";

export function getRandomWord(
    setHint: React.Dispatch<React.SetStateAction<string>>,
    setRandomWord: React.Dispatch<React.SetStateAction<string | null>>,
    setDisplayWord: React.Dispatch<React.SetStateAction<string[]>>
) {
    const randomIndex = Math.floor(Math.random() * wordData.length);
    const selectedWord = wordData[randomIndex].word[Math.floor(Math.random() * wordData[randomIndex].word.length)];
    setRandomWord(selectedWord.toLowerCase());
    setHint(wordData[randomIndex].hint);

    setDisplayWord(Array(selectedWord.length).fill("_"));
}

export function HandleGuess(randomWord: string | null, setMessage: React.Dispatch<React.SetStateAction<string>>, setTries: React.Dispatch<React.SetStateAction<number>>, setDisplayWord: React.Dispatch<React.SetStateAction<string[]>>, letterValue: string, wordValue: string, setLetterValue: React.Dispatch<React.SetStateAction<string>>, setWordValue: React.Dispatch<React.SetStateAction<string>>, onOpenChange: () => void, setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>) {
    if (!randomWord) return;

    const letterGuess = letterValue.toLowerCase();
    const wordGuess = wordValue.toLowerCase();

    if (letterGuess) {
        if (randomWord.includes(letterGuess)) {
            setMessage(`✅ Good guess! The letter "${letterGuess}" is in the word.`);

            setDisplayWord((prev) =>
                prev.map((char, index) => (randomWord[index] === letterGuess ? letterGuess : char))
            );
        } else {
            setMessage(`❌ Wrong guess! The letter "${letterGuess}" is not in the word.`);
            setTries((prev) => prev - 1);
        }
    }

    if (wordGuess) {
        if (wordGuess === randomWord) {
            onOpenChange();
            setShowConfetti(true);
        } else {
            setMessage("❌ Wrong word! Try again.");
            setTries((prev) => prev - 1);
        }
    }

    setLetterValue("");
    setWordValue("");
};

export function clean(setLetterValue: React.Dispatch<React.SetStateAction<string>>, setWordValue: React.Dispatch<React.SetStateAction<string>>, setMessage: React.Dispatch<React.SetStateAction<string>>, onOpenChange: () => void, setShowConfetti: React.Dispatch<React.SetStateAction<boolean>>, setTries: React.Dispatch<React.SetStateAction<number>>) {
    setLetterValue("");
    setWordValue("");
    setMessage("");
    onOpenChange();
    setShowConfetti(false);
    setTries(10);
};