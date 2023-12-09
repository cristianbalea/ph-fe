import React from "react";
import Card from "react-bootstrap/Card";

function LearnerCard({name, surname, course}) {


  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Surname: <span className="purple"> John</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            Name: <span className="purple"> Doe</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            Course: <span className="purple"> Tomatoes growing</span>
          </p>
          <p style={{ textAlign: "justify" }}>
            Evolution: <span className="purple"> 6/10 starts</span>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default LearnerCard;
