import { Row, Col } from "react-bootstrap";
import "./CardComponentStyle.scss";

interface CardComponentsProps {
  chunkedArray: (string[] | number[])[]; // Correctly typed chunked array
  cardsBackgroundColors: string[];
  handleCardClick: (card: string | number) => void;
}

const CardComponents = ({
  chunkedArray,
  cardsBackgroundColors,
  handleCardClick,
}: CardComponentsProps) => {
  return (
    <>
      {chunkedArray.map((row, rowIndex) => (
  <Row key={`row-${rowIndex}`}>
    {row.map((card, cardIndex) => {
      const colorIndex = (rowIndex * row.length + cardIndex) % 9; // Cycle from 0 to 8
      return (
        <Col
          style={{
            backgroundColor: cardsBackgroundColors[colorIndex], // Always within bounds
          }}
          className="card"
          key={`col-${rowIndex}-${cardIndex}`}
          onClick={() => handleCardClick(card)}
        >
          <p className="card__text">{card}</p>
        </Col>
      );
    })}
  </Row>
))}
    </>
  );
};

export default CardComponents;
