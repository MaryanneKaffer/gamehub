import React, { useEffect, useRef, useState } from "react";
import cardBackImage from "../card_icons/card_back.png";

interface CardBoardProps {
  shuffledCards: string[];
  revealed: boolean[];
  setRevealed: React.Dispatch<React.SetStateAction<boolean[]>>;
  firstSelection: number | null;
  setFirstSelection: React.Dispatch<React.SetStateAction<number | null>>;
  secondSelection: number | null;
  setSecondSelection: React.Dispatch<React.SetStateAction<number | null>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardBoard: React.FC<CardBoardProps> = ({
  shuffledCards,
  revealed,
  setRevealed,
  firstSelection,
  setFirstSelection,
  secondSelection,
  setSecondSelection,
  setGameOver,
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCooldownActive, setIsCooldownActive] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageCache = useRef<{ [key: string]: HTMLImageElement }>({});

  useEffect(() => {
    const preloadImages = async () => {
      const loadImage = (src: string) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(img);
        });
      };

      const imagePromises = shuffledCards.map((card) => loadImage(card));
      imagePromises.push(loadImage(cardBackImage));

      const loadedImages = await Promise.all(imagePromises);
      shuffledCards.forEach((card, index) => {
        imageCache.current[card] = loadedImages[index];
      });
      imageCache.current["back"] = loadedImages[loadedImages.length - 1];

      setImagesLoaded(true);
    };

    preloadImages();
  }, [shuffledCards]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cardWidth = 200;
    const cardHeight = 300;
    const padding = 30;

    const drawRoundedRect = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    };

    const drawBoard = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      shuffledCards.forEach((image, index) => {
        const col = index % 5;
        const row = Math.floor(index / 5);
        const x = col * (cardWidth + padding);
        const y = row * (cardHeight + padding);
        const borderRadius = 20;

        ctx.save();
        drawRoundedRect(ctx, x, y, cardWidth, cardHeight, borderRadius);
        ctx.clip();

        if (revealed[index]) {
          ctx.drawImage(imageCache.current[image], x, y, cardWidth, cardHeight);
        } else {
          ctx.drawImage(imageCache.current["back"], x, y, cardWidth, cardHeight);
        }

        ctx.restore();
      });
    };

    drawBoard();
  }, [revealed, shuffledCards, imagesLoaded]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (isCooldownActive || !imagesLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const scaleX = canvasRef.current.width / rect.width;
    const scaleY = canvasRef.current.height / rect.height;

    const clickX = (event.clientX - rect.left) * scaleX;
    const clickY = (event.clientY - rect.top) * scaleY;

    const cardWidth = 200;
    const cardHeight = 300;
    const padding = 30;

    const col = Math.floor(clickX / (cardWidth + padding));
    const row = Math.floor(clickY / (cardHeight + padding));
    const index = row * 5 + col;

    if (revealed[index]) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (firstSelection === null) {
      setFirstSelection(index);
    } else if (secondSelection === null) {
      setSecondSelection(index);

      setIsCooldownActive(true);

      if (shuffledCards[firstSelection] === shuffledCards[index]) {
        setTimeout(() => {
          setFirstSelection(null);
          setSecondSelection(null);
          setIsCooldownActive(false);
        }, 600);
      } else {
        setTimeout(() => {
          newRevealed[firstSelection] = false;
          newRevealed[index] = false;
          setRevealed([...newRevealed]);
          setFirstSelection(null);
          setSecondSelection(null);
          setIsCooldownActive(false);
        }, 600);
      }
    }

    if (newRevealed.every((revealed) => revealed)) {
      setGameOver(true);
    }
  };

  return (
    <canvas
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[95dvw] lg:max-w-[1120px] col-span-12 sm:col-span-7"
      ref={canvasRef}
      width={1120}
      height={630}
      style={{ cursor: isCooldownActive || !imagesLoaded ? "default" : "pointer" }}
      onClick={handleCanvasClick}
    />
  );
};

export default CardBoard;
