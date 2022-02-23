import React, { useEffect, useState } from "react";
import Card from "./components/Card/Card";
//setup
import { createBoard } from "./setup";
import { shuffleArray } from "./utils";

//types
import { CardType } from "./setup";
// Styles
import { Grid } from "./App.styles";

const App = () => {
    // stan jest tablicą z 16 cartami które są w funkcji shuffleArray która z kolei będzie je mapowała, sortowała i jeszcze raz mapowała aby prawidłowo je wymieszać 
    const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));

    //określi czy wygraliśmy grę
    const [gameWon, setGameWon] = useState(false);

    // liczba dopasowych par/card - bedzie musialo byc 8 bo mamy 16 card
    const [countMatchedCards, setCountMatchedCards] = useState(0);

    // kliknięta karta
    const [clickedCard, setClickedCard] = useState<undefined | CardType>(
        undefined
    );

    useEffect(() => {
        if (countMatchedCards === cards.length / 2) {
            console.log("wygrałeś!");
            setGameWon(true);
        }
    }, [countMatchedCards]);
    const handCardClick = (currentClickedCard: CardType) => {
        //flipping cards
        setCards((prev) =>
            prev.map((card) =>
                card.id === currentClickedCard.id
                    ? { ...card, flipped: true, clickable: false }
                    : card
            )
        );
        // funkcja która pierwsza klikniętą kartę "currentClickedCard" wrzuci do clickedCard
        if (!clickedCard) {
            setClickedCard({ ...currentClickedCard });
            console.log(clickedCard);
            return;
        }
        //JEŚLI PASUJE funkcja która się uruchomi jeśli dopiero drugie lub kolejne kliknięcie będzie pasować do tego całkowicie pierwszego
        if (clickedCard.matchingCardId === currentClickedCard.id) {
            setCountMatchedCards((prev) => prev + 1);
            console.log(countMatchedCards);
            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id ||
                    card.id === currentClickedCard.id
                        ? { ...card, clickable: false }
                        : card
                )
            );
            setClickedCard(undefined);
            return;
        }
        // jeśli para do siebie nie pasuje, to odwróc ja z powrotem
        setTimeout(() => {
            setCards((prev) =>
                prev.map((card) =>
                    card.id === clickedCard.id ||
                    card.id === currentClickedCard.id
                        ? { ...card, flipped: false, clickable: true }
                        : card
                )
            );
        }, 1000);
        setClickedCard(undefined);
    };

    console.log(createBoard());
    return (
        <>
            <Grid>
                {cards.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            card={card}
                            callback={handCardClick}
                        />
                    );
                })}
            </Grid>
        </>
    );
};

export default App;
