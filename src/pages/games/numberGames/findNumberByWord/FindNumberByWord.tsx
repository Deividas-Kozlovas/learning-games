import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCardGameContext } from "../../../../context/CardGameContext";
import CardComponents from "../../../../components/gameComponents/cardComponent/CardComponent";
import FeedbackMessageComponent from "../../../../components/gameComponents/feedbackMessageComponent/FeedbackMessageComponent";
import ProgressComponent from "../../../../components/gameComponents/progressComponent/ProgressComponent";
import GameOverComponent from "../../../../components/gameComponents/gameOverComponent/GameOverComponent";
import { numbersToFindInWords } from "./findNumberByWordData";
import "./findNumberByWordStyles.scss";
import { numbersToShowOnCards } from "../../../../pages/games/numberGames/findNumberByWord/findNumberByWordData";
import backgroundImage from "../../../../assets/images/background/findNumberByWordBackground.jpg";
import sound from "../../../../assets/images/icons/sound.svg";
import talkingSound from "../../../../assets/images/icons/talking-sound.svg";
import { SET_DISPLAY_TEXT } from "../../../../actions/cardGameActions";

function FindItemByWord() {
  const { state, startGame, handleCardClick, toggleSound, dispatch} =
    useCardGameContext();

  useEffect(() => {
    startGame(numbersToShowOnCards);
    dispatch({ type: SET_DISPLAY_TEXT, payload: true});
  }, []);

  return (
    <div className="find-numbers-game-background">
      <img
        src={backgroundImage}
        alt="Žaidimas, kuriame reikia rasti skaičius nuo vieno iki dešimties pagal žodžius"
        className="find-numbers-game-background-image"
      />
      <div className="find-numbers-game-content">
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
    </div>
  );
}

export default FindItemByWord;
