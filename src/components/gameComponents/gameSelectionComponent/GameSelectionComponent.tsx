import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./gameSelectionComponent.scss";

interface GameSelectionProps {
  games: {
    path: string;
    image: string;
    altText: string;
    text: string;
    styleClass: string;
  }[];
  backgroundImage: string;
}

const GameSelection = ({ games, backgroundImage }: GameSelectionProps) => {
  return (
    <div className="select-game">
      <Container className="select-game__container">
        {games
          .reduce((acc, game, index) => {
            if (index % 2 === 0) acc.push([]);
            acc[acc.length - 1].push(game);
            return acc;
          }, [] as (typeof games)[][])
          .map((gameRow, rowIndex) => (
            <Row key={rowIndex} className="justify-content-center">
              {gameRow.map((game, colIndex) => (
                <Col
                  key={colIndex}
                  xs={12}
                  md={6}
                  className="select-game__selector"
                >
                  <Link to={game.path}>
                    <Button
                      className={`select-game__text ${game.styleClass}`}
                      variant="primary"
                    >
                      <img
                        src={game.image}
                        alt={game.altText}
                        className="select-game__image"
                      />
                      {game.text}
                    </Button>
                  </Link>
                </Col>
              ))}
            </Row>
          ))}
      </Container>

      <div className="select-game__background">
        <img
          src={backgroundImage}
          alt="Background"
          className="select-game__background-image"
        />
      </div>
    </div>
  );
};

export default GameSelection;
