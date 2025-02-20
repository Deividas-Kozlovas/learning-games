import { Row, Col } from "react-bootstrap";
import "./CardComponentStyle.scss";
import { useCardGameContext } from "../../../context/CardGameContext";

interface CardComponentsProps {
  chunkedArray: (string[] | number[])[];
  cardsBackgroundColors: string[];
  handleCardClick: (card: string | number) => void;
}

const CardComponents = ({
  chunkedArray,
  cardsBackgroundColors,

  handleCardClick,
}: CardComponentsProps) => {
  const { state } = useCardGameContext();

  return (
    <>
      {chunkedArray.map((row, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {row.map((card, cardIndex) => {
            const colorIndex = (rowIndex * row.length + cardIndex) % 9;
            return (
              <Col
                style={{
                  backgroundColor: cardsBackgroundColors[colorIndex],
                }}
                className="card"
                key={`col-${rowIndex}-${cardIndex}`}
                onClick={() => handleCardClick(card)}
              >
                <p
                  className={`card__text ${
                    state.displayCardText ? "" : "card__text--display"
                  }`}
                >
                  {card}
                </p>
              </Col>
            );
          })}
        </Row>
      ))}
    </>
  );
};

export default CardComponents;
