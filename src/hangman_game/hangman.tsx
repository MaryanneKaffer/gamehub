import HangmanComponent from "./hangman_components/hangmanComponent.tsx";
import BackButton from "../main_components/backButton";

export default function Hangman() {
    return (
        <section className="w-screen h-[100dvh] bg-gradient-to-tr from-darkmagenta via-black to-darkmagenta flex flex-col text-center overflow-hidden">
            <p className="text-3xl mt-5 justify-center">Hangman</p>
            <HangmanComponent />
            <BackButton />
        </section>
    );
}