import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Particle from "../Particle";
import LearnerCard from "./LearnerCard";
import './Learners.css'
import johndoe from "../../Assets/johndoe.jpg"
import useLearners from "../../Hooks/useLearners";
import {useEffect, useState} from 'react'

function Learners() {

    const [learners, setLearners] = useState([])
    const {getLearners} = useLearners()

    useEffect(() => {
        const getLearnersData = async () => {
            const learners = await getLearners();
            if (learners) {
                setLearners(learners)
            }
        }
        getLearnersData();
    }, [])

    return (
        <div>
            <Particle/>
            <Container fluid className="about-section">
                <Container>
                    <h1 style={{fontSize: "2.1em", paddingBottom: "20px"}}>
                        Know the Talents that <strong className="purple">ARE FORMED</strong>
                    </h1>
                    {learners.map((learner) => (
                        <Row style={{justifyContent: "center", padding: "10px"}}>
                            <Col
                                md={7}
                                style={{
                                    justifyContent: "center",
                                    paddingTop: "30px",
                                    paddingBottom: "50px",
                                }}
                            >
                                <LearnerCard surname={learner.firstname} name={learner.lastname} course="CourseX"/>
                            </Col>
                            <Col
                                md={5}
                                style={{paddingTop: "20px", paddingBottom: "40px"}}
                                className="about-img"
                            >
                                <img src={johndoe} alt="about" className="learner-img"/>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </Container>
        </div>
    );
}

export default Learners;
