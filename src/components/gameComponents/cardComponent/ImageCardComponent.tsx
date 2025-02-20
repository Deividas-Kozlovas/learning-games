import { Row, Col } from "react-bootstrap";
import "./CardComponentStyle.scss";

interface CardComponentsProps {
  chunkedArray: (string[] | number[])[];
  cardsBackgroundColors: string[];
  handleCardClick: (card: string | number) => void;
}

const ImageCardComponent = ({
  chunkedArray,
  cardsBackgroundColors,
  handleCardClick,
}: CardComponentsProps) => {
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
                <img
                  src={`src/assets/images/findImagesByWords/bathroom/${card}.png`}
                  alt={`${card}`}
                  className="card__image"
                />
              </Col>
            );
          })}
        </Row>
      ))}
    </>
  );
};

export default ImageCardComponent;
