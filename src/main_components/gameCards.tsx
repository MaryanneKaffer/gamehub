import { Card, CardFooter, Image, Button } from "@heroui/react";

export default function GameCards({
    onPress,
    gameName,
    gameImage,
    gameIcon
}: {
    onPress: () => void;
    gameName: string;
    gameImage: string;
    gameIcon: string;
}) {
    return (
        <div className="m-3">
        <Card isFooterBlurred className="w-[500px] h-[280px] col-span-12 sm:col-span-7">
            <Image
                removeWrapper
                alt="Game Image"
                className="z-0 w-full h-full object-cover"
                src={gameImage}
            />
            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                    <Image
                        alt="Game icon"
                        className="rounded-full w-10 h-10 bg-black"
                        src={gameIcon}
                    />
                    <div className="flex flex-col">
                        <p className="text-lg text-white/60">{gameName}</p>
                    </div>
                </div>
                <Button color="success" radius="full" size="lg" onPress={onPress}>
                    Play
                </Button>
            </CardFooter>
        </Card>
        </div>
    );
}