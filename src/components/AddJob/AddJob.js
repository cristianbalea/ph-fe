import React, { useState } from "react";
import Particle from "../Particle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './AddJob.css'

function AddJob() {

  const [jobDescription, setJobDescription] = useState('')

  const handleSubmit = async (event) => {
      if (jobDescription) {

      }
  }

  return (
    <div className="addjob-container">
      <Particle />
      <Form>
        <br /> <br /> <br /> <br />
        <Form.Group>
          <Form.Label className="add-job-label">Add a Job</Form.Label>
          <Form.Control
              className="addjob-input"
              type="text"
              placeholder="Job Description"
              onChange={(event) => setJobDescription(event.target.value)}
          />
          <br /> <br />
          <Button
              className="addjob-button"
              variant="secondary"
              size="lg"
              onClick={handleSubmit}
          >
            Add Job
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AddJob;
