import React, {useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css'
import Particle from "../Particle";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AppContext } from "../../App";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { isAuthenticated , setIsAuthenticated } = useContext(AppContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username && password) {
            setIsAuthenticated(true);
            console.log(isAuthenticated);
            navigate("/home")
        }
    }

    return (
        <div className="login-container">
            <Particle/>
            <br/> <br/>
            <br/> <br/>
            <Form>
                <Form.Group>
                    <Form.Label className="login-label">Login</Form.Label>
                    <Form.Control
                        className="username-input"
                        type="text"
                        placeholder="Username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <br/> <br/>
                    <Form.Control
                        className="password-input"
                        type="text"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br /> <br />
                    <Button
                        className="submit-button"
                        variant="secondary"
                        size="lg"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Form.Group>
            </Form>

            <br/> <br/>
            <br/> <br/>
        </div>
    );
}

export default Login;