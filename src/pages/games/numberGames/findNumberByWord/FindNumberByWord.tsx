import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponents from "../../../../components/gameComponents/cardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../../components/gameComponents/gameOverComponent/GameOverComponent";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./findNumberByWordData";

import {
  addCurrentAnswerToArray,
  chunkArrayToSmallerParts,
  shuffleArray,
} from "../../../../helpers/ArrayHelper";
import { getRandomLightColor } from "../../../../helpers/RandomColorGeneratorHelper";
import { startTimer, endTimer } from "../../../../helpers/CountTimeHelper";
import "./findNumberByWordStyles.scss";

function FindNumberByWord() {
  const [currentNumberToFind, setCurrentNumberToFind] = useState<number>(0);
  const [shuffledNumbersToShowOnCards, setShuffledNumbersToShowOnCards] =
    useState<Array<string | number>>([]);
  const [chunkedNumbersToShowOnCards, setChunkedNumbersToShowOnCards] =
    useState<number[][]>([]);
  const [cardsBackgroundColors, setCardsBackgroundColors] = useState<string[]>(
    []
  );
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<string>("");

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    setShuffledNumbersToShowOnCards(() => {
      const shuffledNumbers = shuffleArray(numbersToShowOnCards).slice(0, 9);
      return addCurrentAnswerToArray(
        shuffledNumbers,
        numbersToShowOnCards[currentNumberToFind]
      );
    });

    setCardsBackgroundColors(
      Array.from({ length: 9 }, () => getRandomLightColor())
    );
  }, [currentNumberToFind]);

  useEffect(() => {
    setChunkedNumbersToShowOnCards(() =>
      chunkArrayToSmallerParts(shuffledNumbersToShowOnCards, 3)
    );
  }, [shuffledNumbersToShowOnCards]);

  const handleCardClick = (card: string | number): void => {
    if (currentNumberToFind + 1 === card) {
      setIsAnswerCorrect(true);
      setTimeout(() => {
        setCurrentNumberToFind((prevNumber) => prevNumber + 1);
        if (currentNumberToFind === 9) {
          setGameOver(true);
          setElapsedTime(endTimer());
          setCurrentNumberToFind(0);
        }
        setIsAnswerCorrect(null);
      }, 500);
    } else {
      setIsAnswerCorrect(false);
      setTimeout(() => {
        setIsAnswerCorrect(null);
      }, 500);
    }
  };

  return (
    <div className="find-numbers-game-background">
      <ProgressComponent progress={currentNumberToFind * 10} />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">
              {numbersToFindInWords[currentNumberToFind]}
            </p>
          </Col>
        </Row>
        <CardComponents
          chunkedArray={chunkedNumbersToShowOnCards}
          cardsBackgroundColors={cardsBackgroundColors}
          handleCardClick={handleCardClick}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={isAnswerCorrect} />
      {gameOver === true && (
        <GameOverComponent
          setGameOver={setGameOver}
          elapsedTime={elapsedTime}
          startTimer={startTimer}
        />
      )}
    </div>
  );
}

export default FindNumberByWord;
