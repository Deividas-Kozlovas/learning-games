import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./FindNumbersUpToTenStyles.scss";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";
import { Prev } from "react-bootstrap/esm/PageItem";

const FindNumbersUpToTen = () => {
  const CARDS_PER_ROW = 3;

  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const numbersChunks = chunkArray<number>(
    numbersToShowOnCards.slice(0, 9),
    CARDS_PER_ROW
  );

  function numberClicked(card: number): void {
    if (card === currentNumber + 1) {
      setCurrentNumber((prevNumber) => prevNumber + 1);
    } else {
      console.log("incorect");
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
        {numbersChunks.map((chunk, rowIndex) => (
          <Row key={`row-${rowIndex}`}>
            {chunk.map((card, cardIndex) => (
              <Col key={`card-${rowIndex}-${cardIndex}`}>
                <Card>
                  <Card.Body>
                    <Card.Text onClick={() => numberClicked(card)}>
                      {card}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default FindNumbersUpToTen;
