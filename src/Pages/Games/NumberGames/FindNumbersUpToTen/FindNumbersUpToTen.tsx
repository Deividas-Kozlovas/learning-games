import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./FindNumbersUpToTenStyles.scss";
import {
  numbersToFindInWords,
  numbersToShowOnCards,
} from "./FindNumversUpToTenData.tsx";

const FindNumbersUpToTen = () => {
  return (
    <div className="background">
      <ProgressBar animated now={1} />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{numbersToFindInWords[0]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {numbersToShowOnCards.map((card, rowIndex) => (
            <Col>
              <Card key={`card-${rowIndex}`}>
                <Card.Body>
                  <Card.Text>{card}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FindNumbersUpToTen;
