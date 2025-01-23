import GuessTheNumberComponent from "./guesstenumber_components/guessTheNumberComponent";
import BackButton from "../main_components/backButton";

export default function GuessTheNumber() {
    return (
        <body className="w-screen h-screen bg-gradient-to-tr from-darkblue via-black to-darkblue grid  text-center">
        <p className="text-3xl mt-5 justify-center">Guess The Number</p>
        <p className="text-2xl justify-center mb-96">Guess the number between 1 and 100</p>
        <GuessTheNumberComponent />
        <BackButton />
        </body>
    );
}