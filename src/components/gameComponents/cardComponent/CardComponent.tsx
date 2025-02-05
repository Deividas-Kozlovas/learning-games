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
          {row.map((card, cardIndex) => (
            <Col
              style={{
                backgroundColor:
                  cardsBackgroundColors[Math.floor(Math.random() * 9)],
              }}
              className="card"
              key={`col-${rowIndex}-${cardIndex}`}
              onClick={() => handleCardClick(card)} // Pass the card (string or number)
            >
              <p className="card__text">{card}</p>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default CardComponents;
