import React, {useEffect, useState} from 'react';
import Particle from "../Particle";
import {Col, Container, Row} from "react-bootstrap";
import TrainingCard from "./TrainingCard";
import useTrainings from "../../Hooks/useTrainings";

function Trainings() {
    const {getTrainings} = useTrainings();
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        const getTrainingsData = async () => {
            const trainings = await getTrainings();
            if (trainings) {
                setTrainings(trainings);
            }
        }
        getTrainingsData();
    }, []);

    return (
        <div>
            <Particle/>
            <Container fluid className="project-section">
                <Container>
                    <h1 className="project-heading">
                        List of posted <strong className="purple">Trainings</strong>
                    </h1>
                    {
                        trainings.map((tr) => (
                            <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
                                <Col md={4} className="project-card">
                                    <TrainingCard
                                        trainingExternalId={tr.trainingExternalId}
                                        description={tr.description}
                                    />
                                </Col>
                            </Row>
                        ))
                    }
                </Container>
            </Container>
        </div>
    );
}

export default Trainings;