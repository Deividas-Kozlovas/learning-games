import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCardGameContext } from "../../../../context/CardGameContext"; // Use the custom hook to access the context
import CardComponents from "../../../../components/gameComponents/cardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../../components/gameComponents/gameOverComponent/GameOverComponent";
import { numbersToFindInWords } from "./findNumberByWordData";
import "./findNumberByWordStyles.scss";
import { numbersToShowOnCards } from "../../../../pages/games/numberGames/findNumberByWord/findNumberByWordData";

function FindItemByWord() {
  const { state, startGame, handleCardClick } = useCardGameContext();

  useEffect(() => {
    startGame(numbersToShowOnCards);
  }, []);

  return (
    <div className="find-numbers-game-background">
      <ProgressComponent progress={state.currentItemIndex * 10} />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">
              {numbersToFindInWords[state.currentItemIndex]}
            </p>
          </Col>
        </Row>
        <CardComponents
          chunkedArray={state.chunkedItems}
          cardsBackgroundColors={state.itemsBackgroundColors}
          handleCardClick={handleCardClick}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={state.isAnswerCorrect} />
      {state.gameOver === true && <GameOverComponent />}
    </div>
  );
}

export default FindItemByWord;
