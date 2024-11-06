import React, { useEffect, useState } from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import CardComponent from "../../../../components/CardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/FeedbackMessageComponent/FeedbackMessageComponent";
import { alphabet } from "./FindEachAlphabetLetterData";
import GameOverComponent from "../../../../components/GameOverComponent/GameOverComponent";
import { getRandomLightColor } from "../../../../moduls/utils/randomColorGeneratorUtils";

const FindEachAlphabetLetter = () => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [curentLetter, setCurentLetter] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [backgroundColors, setBackgroundColors] = useState<string[]>([]);

  useEffect(() => {
    setBackgroundColors(Array.from({ length: 9 }, () => getRandomLightColor()));
  }, [curentLetter]);

  function letterClicked(card: string): void {
    if (curentLetter === 32) {
      setCurentLetter(0);
      setIsGameOver;
    } else {
      if (card === alphabet[curentLetter]) {
        setCurentLetter((prevLetter) => prevLetter + 1);
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
    }
  }

  return (
    <div className="background">
      <ProgressBar animated now={curentLetter * 10} />
      <Container>
        <Row>
          <Col>
            <Card.Body>
              <Card.Text>letter to find</Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <CardComponent
          chunkedArray={alphabet}
          handleCardClick={letterClicked}
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

export default FindEachAlphabetLetter;
