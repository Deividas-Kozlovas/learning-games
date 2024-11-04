// 1. React
import React, { useEffect, useState } from "react";

// 2. Third-Party Libraries
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

// 3. Local Components
import CardComponent from "../../../../components/CardComponent/CardComponent.tsx";
import FeedbackMessageComponent from "../../../../components/FeedbackMessageComponent/FeedbackMessageComponent.tsx";
import GameOverComponent from "../../../../components/GameOverComponent/GameOverComponent.tsx";

// 4. Utils Functions
import {
  chunkArray,
  shuffleArray,
  addUniqueValueToArray,
} from "../../../../moduls/utils/arraysUtils.tsx";
import { getRandomLightColor } from "../../../../moduls/utils/randomColorGeneratorUtils.tsx";

// 5. Data
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";

// 6. Styles
import "./FindNumbersUpToTenStyles.scss";

const FindNumbersUpToTen = () => {
  const CARDS_PER_ROW = 3;

  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [numbersChunks, setNumbersChunks] = useState<number[][]>([]);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  useEffect(() => {
    addValuesToCards(currentNumber);
    setBackgroundColors(Array.from({ length: 9 }, () => getRandomLightColor()));
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
      setIsGameOver(true);
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
          backgroundColors={backgroundColors}
        />
      </Container>
      <FeedbackMessageComponent
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
      />
      {isGameOver === true && (
        <GameOverComponent setIsGameOver={setIsGameOver} />
      )}
    </div>
  );
};

export default FindNumbersUpToTen;
