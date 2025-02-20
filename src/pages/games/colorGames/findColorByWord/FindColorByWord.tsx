import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import CardComponents from "../../../../components/gameComponents/cardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../../components/gameComponents/gameOverComponent/GameOverComponent";

import { colors, colorsENG } from "./findColorByWordData";
import { useCardGameContext } from "../../../../context/CardGameContext";
import sound from "../../../../assets/images/icons/sound.svg";
import talkingSound from "../../../../assets/images/icons/talking-sound.svg";
import { SET_DISPLAY_TEXT } from "../../../../actions/cardGameActions";
import "./findColorByWordStyles.scss";

function FindColorByWord() {
  const { state, startGame, handleCardClick, toggleSound, dispatch } =
    useCardGameContext();

  const [newColor, setNewColor] = useState<(string | number)[]>([]);

  useEffect(() => {
    startGame(colors);
    setNewColor(colorsENG);
    dispatch({ type: SET_DISPLAY_TEXT, payload: false });
  }, []);

  useEffect(() => {
    const indexToAddColorOn = state.shuffledItems.indexOf(
      colors[state.currentItemIndex]
    );

    if (indexToAddColorOn !== -1) {
      const updatedNewColor = [...colorsENG];

      const temp = updatedNewColor[indexToAddColorOn];
      updatedNewColor[indexToAddColorOn] = colorsENG[state.currentItemIndex];
      updatedNewColor[state.currentItemIndex] = temp;

      setNewColor(updatedNewColor);
    }
  }, [state.currentItemIndex, state.shuffledItems]);
  return (
    <div className="find-colors-by-words-background">
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
              alt="Toggle sound"
            />
            <img
              className="card__icon card__icon--talking-sound"
              src={talkingSound}
              alt="Toggle voice sound"
            />
          </Col>
        </Row>
        <CardComponents
          chunkedArray={state.chunkedItems}
          cardsBackgroundColors={newColor as string[]}
          handleCardClick={handleCardClick}
        />
      </Container>
      <FeedbackMessageComponent isCorrect={state.isAnswerCorrect} />
      {state.gameOver && <GameOverComponent />}
    </div>
  );
}

export default FindColorByWord;
