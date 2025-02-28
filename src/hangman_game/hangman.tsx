import HangmanComponent from "./hangman_components/hangmanComponent.tsx";
import BackButton from "../main_components/backButton";

export default function Hangman() {
    return (
        <body className="w-screen h-screen bg-gradient-to-tr from-darkmagenta via-black to-darkmagenta grid  text-center">
            <p className="text-3xl mt-5 justify-center">Hangman</p>

            <HangmanComponent />
            <BackButton />
        </body>
    );
}