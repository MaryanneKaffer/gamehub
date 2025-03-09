import LabyrinthComponent from "./labyrinth_components/labyrinthComponent.tsx";
import BackButton from "../main_components/backButton";

export default function Labyrinth() {
    return (
        <body className="w-screen h-screen bg-gradient-to-tr from-darkorange via-black to-darkorange grid  text-center">
            <p className="text-3xl mt-5 justify-center">Labyrinth</p>

            <LabyrinthComponent />
            <BackButton />
        </body>
    );
}