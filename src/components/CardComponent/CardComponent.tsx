import React from "react";
import { Row, Col, Card } from "react-bootstrap";

interface CardComponentsProps {
  chunkedArray: number[][];
  handleCardClick: (card: number) => void;
  backgroundColors: string[];
}

const CardComponent = ({
  chunkedArray,
  handleCardClick,
  backgroundColors,
}: CardComponentsProps) => {
  return (
    <>
      {chunkedArray.map((chunk, rowIndex) => (
        <Row key={`row-${rowIndex}`}>
          {chunk.map((card, cardIndex) => (
            <Col key={`card-${rowIndex}-${cardIndex}`}>
              <Card
                style={{
                  backgroundColor:
                    backgroundColors[
                      Math.floor(Math.random() * backgroundColors.length)
                    ],
                }}
              >
                <Card.Body>
                  <Card.Text onClick={() => handleCardClick(card)}>
                    {card}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </>
  );
};

export default CardComponent;
