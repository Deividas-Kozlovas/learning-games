import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./GameOverComponentStyles.scss";
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
          <Col>
            <h1>Žaidimas baigtas</h1>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <Link to="/">
              <Button className="m-4" variant="danger">
                Grįžti į pradžią
              </Button>
            </Link>
            <Button
              className="m-4"
              onClick={() => handlePlayAgain()}
              variant="success"
            >
              Žaisti dar kartą
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameOverComponent;
