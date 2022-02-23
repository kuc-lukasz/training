import { useState, useEffect } from "react";
import "./App.css";
import { SingleCardInterface, AllCardsData } from "./data/CardsData";
import { MainContainer } from "./styled/Styled";
import { Card } from "./Card";

function App() {
    const [cards, setCards] = useState(AllCardsData());
    const [prevCard, setPrevCard] = useState<undefined | SingleCardInterface>(
        undefined
    );
    const [pairCounter, setPairCounter] = useState<number>(0);
    const [won, setWon] = useState<boolean>(false);

    useEffect(() => {
        if (pairCounter === cards.length / 2) {
            setWon(true);
            console.log("Wnnnneeeeerr!!!!");
        }
    }, [pairCounter, cards.length]);

    const handleClick = (currentCard: SingleCardInterface) => {
        setCards((prev) =>
            prev.map((card) => {
                return card.id === currentCard.id
                    ? { ...card, isFlipped: true, clickable: false }
                    : card;
            })
        );
        if (prevCard === undefined) {
            setPrevCard({ ...currentCard });
            return;
        }

        if (currentCard.id === prevCard.matchingCard) {
            setCards((prev) =>
                prev.map((card) => {
                    return card.id === currentCard.id || card.id === prevCard.id
                        ? { ...card, isFlipped: true, clickable: false }
                        : card;
                })
            );
            setPairCounter(pairCounter + 1);
            setPrevCard(undefined);
        }

        setTimeout(() => {
            if (currentCard.id !== prevCard.matchingCard) {
                setCards((prev) =>
                    prev.map((card) => {
                        return card.id === currentCard.id ||
                            card.id === prevCard.id
                            ? { ...card, isFlipped: false, clickable: true }
                            : card;
                    })
                );
                setPrevCard(undefined);
            }
        }, 500);
        console.log(pairCounter);
    };
    return (
        <MainContainer>
            {won ? (
                <h1 style={{ position: "absolute", top: 0, left: "40%" }}>
                    Wygrałeś
                </h1>
            ) : (
                ""
            )}
            {cards.map((card) => {
                return (
                    <>
                        <Card
                            card={card}
                            key={card.id}
                            callback={handleClick}
                        />
                    </>
                );
            })}
        </MainContainer>
    );
}

export default App;
