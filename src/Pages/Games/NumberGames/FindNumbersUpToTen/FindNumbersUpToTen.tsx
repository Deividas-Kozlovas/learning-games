// 1. React
import React, { useEffect, useState } from "react";

// 2. Third-Party Libraries
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

// 3. Local Components
import CardComponent from "../../../../Components/CardComponent/CardComponent.tsx";
import FeedbackMessageComponent from "../../../../Components/FeedbackMessageComponent/FeedbackMessageComponent.tsx";

// 4. Utils Functions
import {
  chunkArray,
  shuffleArray,
  addUniqueValueToArray,
} from "../../../../Utils/ArraysUtils.tsx";

// 5. Data
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";

// 6. Styles
import "./FindNumbersUpToTenStyles.scss";
import GameOverComponent from "../../../../Components/GameOverComponent/GameOverComponent.tsx";

const FindNumbersUpToTen = () => {
  const CARDS_PER_ROW = 3;

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [numbersChunks, setNumbersChunks] = useState<number[][]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    addValuesToCards(currentNumber);
  }, [currentNumber]);

  function addValuesToCards(number: number) {
    let shuffledNumbersOnCards = shuffleArray(numbersToShowOnCards);

    shuffledNumbersOnCards = shuffledNumbersOnCards.slice(0, 9);

    if (shuffledNumbersOnCards.includes(number + 1)) {
      setNumbersChunks(
        chunkArray<number>(shuffledNumbersOnCards, CARDS_PER_ROW)
      );
    } else {
      const addedValue = addUniqueValueToArray(
        shuffledNumbersOnCards,
        number + 1
      );
      setNumbersChunks(chunkArray<number>(addedValue, CARDS_PER_ROW));
    }
  }

  function numberClicked(card: number): void {
    if (currentNumber === 9) {
      setCurrentNumber(0);
    } else {
      if (card === currentNumber + 1) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  }

  return (
    <div className="background">
      <ProgressBar animated now={currentNumber * 10} />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{numbersToFindInWords[currentNumber]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CardComponent
          chunkedArray={numbersChunks}
          handleCardClick={numberClicked}
        />
      </Container>
      <FeedbackMessageComponent
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
      />
      <GameOverComponent setIsGameOver={setIsGameOver} />
    </div>
  );
};

export default FindNumbersUpToTen;
