document.documentElement.classList.add("dark");
import { useNavigate } from "react-router-dom";
import GameCards from "./gameCards";
import GameHubIcon from "../assets/gamehub_icon.png";
import gameCardData from "./gameCardData";
export default function GameHubComponent() {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-tr from-darkgreen via-black to-darkgreen min-h-screen grid justify-center text-center">
            <h1 className="text-3xl mt-5 flex justify-center"><img src={GameHubIcon} className="w-10 h-10 inline-block" /> Game Hub <img src={GameHubIcon} className="w-10 h-10 inline-block" /></h1>
            <section className="m-1 xl:grid grid-cols-2 lg:flex ">
                {gameCardData.map((item) =>
                    <GameCards
                        onPress={() => navigate(item.navigate)}
                        gameName={item.gameName}
                        gameImage={item.gameImage}
                        gameIcon={item.gameIcon}
                        alt={item.alt}
                    />)}
            </section>
        </div>
    );
}