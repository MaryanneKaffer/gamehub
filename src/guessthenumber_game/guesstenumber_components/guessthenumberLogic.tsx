export function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

export function handleGuess(randomNumber: number , inputValue: string, setMessage: (message: string) => void, onOpenChange: () => void, setShowConfetti: (show: boolean) => void) {
    if (randomNumber === null) return;

    const guess = parseInt(inputValue, 10);

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

export function clean(setInputValue: (arg0: string) => void, setMessage: (arg0: string) => void, onOpenChange: () => void, setShowConfetti: (arg0: boolean) => void) {
    setInputValue("");
    setMessage("");
    onOpenChange();
    setShowConfetti(false);
}