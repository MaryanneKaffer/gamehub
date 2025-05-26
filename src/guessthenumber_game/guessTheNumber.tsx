import GuessTheNumberComponent from "./guesstenumber_components/guessTheNumberComponent";
import BackButton from "../main_components/backButton";

export default function GuessTheNumber() {
    return (
        <section className="h-[100dvh] w-[100dvw] bg-gradient-to-tr from-darkblue via-black to-darkblue flex flex-col text-center">
            <p className="text-3xl mt-5 justify-center">Guess The Number</p>
            <p className="text-xl sm:mt-[12%] mt-[28%] mb-10 justify-center">Guess the number between 1 and 100</p>
            <GuessTheNumberComponent />
            <BackButton />
        </section>
    );
}