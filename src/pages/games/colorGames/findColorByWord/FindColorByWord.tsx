import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponents from "../../../../components/gameComponents/cardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../../components/gameComponents/gameOverComponent/GameOverComponent";

import { colors } from "./findColorByWordData";
import { useCardGameContext } from "../../../../context/CardGameContext";
import sound from "../../../../assets/images/icons/sound.svg";
import talkingSound from "../../../../assets/images/icons/talking-sound.svg";

function FindColorByWord() {
  const { state, startGame, handleCardClick, toggleSound } =
    useCardGameContext();

  useEffect(() => {
    startGame(colors);
  }, []);

  return (
    <div className="find-alphabet-letters-game-background">
      <ProgressComponent
        progress={(state.currentItemIndex / colors.length) * 100}
      />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">{colors[state.currentItemIndex]}</p>
            <img
              onClick={() => toggleSound("sound")}
              className={`card__icon card__icon--sound ${
                !state.soundON ? "card__icon--sound-disabled" : ""
              }`}
              src={sound}
              alt="Įjungti arba išjungti garsą"
            />
            <img
              className="card__icon card__icon--talking-sound"
              src={talkingSound}
              alt="Įjungti arba išjungti balso garsą"
            />
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

export default FindColorByWord;
