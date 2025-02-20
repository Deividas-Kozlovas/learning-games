import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ImageCardComponents from "../../../components/gameComponents/cardComponent/ImageCardComponent";
import FeedbackMessageComponent from "../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../components/gameComponents/gameOverComponent/GameOverComponent";

import { useCardGameContext } from "../../../context/CardGameContext";
import sound from "../../../assets/images/icons/sound.svg";
import talkingSound from "../../../assets/images/icons/talking-sound.svg";
import { SET_DISPLAY_TEXT } from "../../../actions/cardGameActions";

interface FindImageByWordProps {
  findItemsByWords: string[]; // Adjust this type based on what `FindKitchenItemsByWordData` contains
}

const FindImageByWord = ({ findItemsByWords }: FindImageByWordProps) => {
  const { state, startGame, handleCardClick, toggleSound, dispatch } =
    useCardGameContext();

  useEffect(() => {
    startGame(findItemsByWords);
    dispatch({ type: SET_DISPLAY_TEXT, payload: true });
  }, []);

  return (
    <div className="find-colors-by-words-background">
      <ProgressComponent
        progress={(state.currentItemIndex / findItemsByWords.length) * 100}
      />
      <Container>
        <Row>
          <Col
            className="card"
            style={{ backgroundColor: "rgb(151, 212, 159)" }}
          >
            <p className="card__text">
              {findItemsByWords[state.currentItemIndex]}
            </p>
            <img
              onClick={() => toggleSound("sound")}
              className={`card__icon card__icon--sound ${
                !state.soundON ? "card__icon--sound-disabled" : ""
              }`}
              src={sound}
              alt="Toggle sound"
            />
            <img
              className="card__icon card__icon--talking-sound"
              src={talkingSound}
              alt="Toggle voice sound"
            />
          </Col>
        </Row>
        <ImageCardComponents
          chunkedArray={state.chunkedItems}
          cardsBackgroundColors={state.itemsBackgroundColors}
          handleCardClick={handleCardClick}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={state.isAnswerCorrect} />
      {state.gameOver && <GameOverComponent />}
    </div>
  );
};

export default FindImageByWord;
