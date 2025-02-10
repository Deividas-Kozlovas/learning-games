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

function FindColorByWord() {
  const { state, startGame, handleCardClick, toggleSound } = useCardGameContext();

  const [newColor, setNewColor] = useState<(string | number)[]>([]);

  useEffect(() => {
    startGame(colors); 
    setNewColor(colorsENG); 
  }, []);

  useEffect(() => {
    // Get the index in shuffledItems where we want to add the color
    const indexToAddColorOn = state.shuffledItems.indexOf(colors[state.currentItemIndex]);

    // Only proceed if the color index is found
    if (indexToAddColorOn !== -1) {
      // Create a new array by copying the colorsENG array
      const updatedNewColor = [...colorsENG]

      // Swap the colors
      const temp = updatedNewColor[indexToAddColorOn]; // Store the color at the target index
      updatedNewColor[indexToAddColorOn] = colorsENG[state.currentItemIndex]; // Assign the new color
      updatedNewColor[state.currentItemIndex] = temp; // Place the old color in the current index

      // Update the newColor state with the swapped array
      setNewColor(updatedNewColor);

    } 
  }, [state.currentItemIndex, state.shuffledItems]); // Re-run when currentItemIndex or shuffledItems change

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
