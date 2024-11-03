import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface GameOverComponentProps {
  setIsGameOver(value: boolean): void;
}

const GameOverComponent = ({ setIsGameOver }: GameOverComponentProps) => {
  const handlePlayAgain = (): void => {
    setIsGameOver(false);
  };

  return (
    <div className="game-over">
      <Container className="game-over__container">
        <Row className="game-over__row">
          <Col className="game-over__close">
            <Link to="/">
              <button>
                <img
                  className="game-over__close__image"
                  src={""}
                  alt="close-game"
                />
              </button>
            </Link>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <h1>Žaidimas baigtas</h1>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <Button onClick={() => handlePlayAgain()} variant="success">
              Zaisti dar karta
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameOverComponent;
