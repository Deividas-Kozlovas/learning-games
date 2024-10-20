import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./FindNumbersUpToTenStyles.scss";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";

const FindNumbersUpToTen = () => {
  const CARDS_PER_ROW = 3;

  const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const numbersChunks = chunkArray<number>(numbersToShowOnCards, CARDS_PER_ROW);

  return (
    <div className="background">
      <ProgressBar animated now={1} />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{numbersToFindInWords[0]}</Card.Text>
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
                    <Card.Text>{card}</Card.Text>
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
