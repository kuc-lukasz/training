import React from "react";

import photo1 from "../img/photo1.jpg";
import photo2 from "../img/photo2.jpg";
import photo3 from "../img/photo3.jpg";
import photo4 from "../img/photo4.jpg";
import photo5 from "../img/photo5.jpg";
import photo6 from "../img/photo6.jpg";
import startCard from "../img/photoStart.jpg";

const cardsTable: string[] = [photo1, photo2, photo3, photo4, photo5, photo6];

export interface SingleCardInterface {
    id: number;
    isFlipped: boolean;
    clickable: boolean;
    frontImage: string;
    backImage: string;
    matchingCard: number;
}

export const AllCardsData = (): SingleCardInterface[] => {
    return [...cardsTable, ...cardsTable].map((card, index) => ({
        id: index,
        isFlipped: false,
        clickable: true,
        frontImage: card,
        backImage: startCard,
        matchingCard:
            index < cardsTable.length
                ? index + cardsTable.length
                : index - cardsTable.length,
    }));
};
