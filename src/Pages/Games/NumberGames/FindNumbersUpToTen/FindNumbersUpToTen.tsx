import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./FindNumbersUpToTenStyles.scss";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";
import { Prev } from "react-bootstrap/esm/PageItem";
import { chunkArray } from "../../../../Helpers/ArrayHelper.tsx";
import CardComponent from "../../../../Components/CardComponent/CardComponent.tsx";

const FindNumbersUpToTen = () => {
  const CARDS_PER_ROW = 3;

  const [currentNumber, setCurrentNumber] = useState<number>(0);

  const numbersChunks = chunkArray<number>(
    numbersToShowOnCards.slice(0, 9),
    CARDS_PER_ROW
  );

  function numberClicked(card: number): void {
    if (currentNumber === 9) {
      setCurrentNumber(0);
    } else {
      if (card === currentNumber + 1) {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      } else {
        console.log("incorect");
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
    </div>
  );
};

export default FindNumbersUpToTen;
