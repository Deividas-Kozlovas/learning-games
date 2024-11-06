import React, { useState } from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/FeedbackMessageComponent/FeedbackMessageComponent";

const FindEachAlphabetLetter = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  function letterClicked(card: number): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="background">
      <ProgressBar animated now={1} />
      <Container>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>letter to find</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <CardComponent
          chunkedArray={[
            [1, 2, 3],
            [4, 5, 6],
          ]}
          handleCardClick={letterClicked}
          backgroundColors={[]}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={null} setIsCorrect={setIsCorrect} />
    </div>
  );
};

export default FindEachAlphabetLetter;
