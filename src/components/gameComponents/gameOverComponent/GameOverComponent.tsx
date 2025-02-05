import { Container, Row, Col, Button } from "react-bootstrap";
import "./GameOverComponentStyles.scss";
import closeGame from "../../../assets/images/wrong.svg";
import { Link } from "react-router-dom";
import { useCardGameContext } from "../../../context/CardGameContext";

const GameOverComponent = () => {
  const { state, startGame } = useCardGameContext();

  const handleRestart = () => {
    startGame(state.initialItems);
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
                  src={closeGame}
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
            <p>Klaidingi paspaudimai</p>
            <p>{state.incorectPress}</p>
          </Col>
          <Col>
            <p>Laikas</p>
            <p>{state.elapsedTime}</p>
          </Col>
        </Row>
        <Row className="game-over__row">
          <Col>
            <Button onClick={handleRestart} variant="success">
              Zaisti dar karta
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GameOverComponent;
