import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import LearnerCard from "./LearnerCard";
import './Learners.css'
import johndoe from "../../Assets/johndoe.jpg"

function Learners() {
  return (
      <div>
        <Particle />
        <Container fluid className="about-section">
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "50px",
                }}
              >
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  Know the Talents that <strong className="purple">ARE FORMED</strong>
                </h1>
                <LearnerCard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={johndoe} alt="about" className="learner-img" />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
  );
}

export default Learners;
