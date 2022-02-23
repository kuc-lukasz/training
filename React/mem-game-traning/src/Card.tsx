import React from "react";
import { SingleCard, FrontImg, BackImg } from "./styled/Styled";
import { SingleCardInterface } from "./data/CardsData";

interface Props {
    card: SingleCardInterface;
    callback: (card: SingleCardInterface) => void;
}

export const Card = ({ card, callback }: Props) => {
    const handleClick = () => {
        if (card.clickable === true) {
            callback(card);
        }
    };
    return (
        <>
            <SingleCard onClick={handleClick}>
                <FrontImg isFlipped={card.isFlipped} src={card.frontImage} />
                <BackImg isFlipped={card.isFlipped} src={card.backImage} />
            </SingleCard>
        </>
    );
};
