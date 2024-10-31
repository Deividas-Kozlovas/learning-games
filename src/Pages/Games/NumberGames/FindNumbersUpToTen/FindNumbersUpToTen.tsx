// 1. React
import React, { useEffect, useState } from "react";

// 2. Third-Party Libraries
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

// 3. Local Components
import CardComponent from "../../../../Components/CardComponent/CardComponent.tsx";
import FeedbackMessageComponent from "../../../../Components/FeedbackMessageComponent/FeedbackMessageComponent.tsx";

// 4. Utils Functions
import { chunkArray, shuffleArray } from "../../../../Utils/ArraysUtils.tsx";

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

  useEffect(() => {
    addValuesToCards();
  }, []);

  function addValuesToCards() {
    const shuffledNubersOnCards = shuffleArray(numbersToShowOnCards);

    setNumbersChunks(
      chunkArray<number>(shuffledNubersOnCards.slice(0, 9), CARDS_PER_ROW)
    );
  }

  function numberClicked(card: number): void {
    if (currentNumber === 9) {
      setCurrentNumber(0);
    } else {
      if (card === currentNumber + 1) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
        setIsCorrect(true);
        addValuesToCards();
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
    </div>
  );
};

export default FindNumbersUpToTen;
