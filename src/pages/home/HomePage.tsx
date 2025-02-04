import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./homePageStyles.scss";

function HomePage() {
  return (
    <div className="select-game">
      <Container className="select-game__container">
        <Row>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button
                className="select-game__text select-game__text--numbers-games"
                variant="primary"
              >
                Žaidimai su skaičiais
              </Button>
            </Link>
          </Col>
          <Col className="select-game__selector">
            <Link to="/find-alphabet-letters">
              <Button
                className="select-game__text select-game__text--letters-games"
                variant="primary"
              >
                Žaidimai su raidėm
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button
                className="select-game__text select-game__text--colors-games"
                variant="primary"
              >
                Žaidimai su spalvom
              </Button>
            </Link>
          </Col>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button className="select-game__text" variant="primary">
                Žaidimai su žodžiais
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
