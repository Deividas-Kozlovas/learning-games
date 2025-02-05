import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./homePageStyles.scss";
import numbersButton from "../../assets/images/buttons/numbers-button.jpeg";
import lettersButton from "../../assets/images/buttons/letters-button.jpeg";
import colorsButton from "../../assets/images/buttons/colors-button.jpeg";
import wordsButton from "../../assets/images/buttons/words-button.jpeg";
import confettiImage from "../../assets/images/confetti-doodles.svg";

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
                <img
                  src={numbersButton}
                  alt="Žaidimai su skaičiais, lavinantys matematinius įgūdžius"
                  className="select-game__image"
                />
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
                <img
                  src={lettersButton}
                  alt="Žaidimai su žodžiais, lavinantys žodyną ir kalbos įgūdžius"
                  className="select-game__image"
                />
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
                <img
                  src={colorsButton}
                  alt="Žaidimai su spalvom"
                  className="select-game__image"
                />
                Žaidimai su spalvom
              </Button>
            </Link>
          </Col>
          <Col className="select-game__selector">
            <Link to="/find-number-by-word">
              <Button
                className="select-game__text select-game__text--word-games"
                variant="primary"
              >
                <img
                  src={wordsButton}
                  alt="Žaidimai su žodžiais"
                  className="select-game__image"
                />
                Žaidimai su žodžiais
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

      <div className="select-game__background">
        <img
          src={confettiImage}
          alt="Žaidimai lavinimui ir smegenų treniravimui"
          className="select-game__background-image"
        />
      </div>
    </div>
  );
}

export default HomePage;
