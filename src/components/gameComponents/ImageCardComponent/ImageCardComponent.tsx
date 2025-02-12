import { Row, Col } from "react-bootstrap";

interface CardComponentsProps {
  chunkedArray: (string[] | number[])[]; // Correctly typed chunked array
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
                <img
                  src={`path_to_images/${card}.png`} // Replace with actual image source logic
                  alt={`Card ${card}`}
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
