import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import NavFile from "../common/NavFile";


const Register =() => {
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirm, setConfirm] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const handleFullNameChange = (e) => {
    setSuccessMessage("");
    setFullName(e.target.value);
    setFullNameError("");
  };
  const handleEmailChange = (e) => {
    setSuccessMessage("");
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlePasswordChange = (e) => {
    setSuccessMessage("");
    setPassword(e.target.value);
    setPasswordError("");
  };
  const handleConfirmChange = (e) => {
    setSuccessMessage("");
    setConfirm(e.target.value);
    setConfirmError("");
  };
  const handleSubmission = (e) => {
    e.preventDefault();
  };
  if (fullName !== "") {
    setFullName("");
  } else {
    setFullNameError("Please enter your name");
  }
  if (fullName !== "") {
    setFullName("");
  } else {
    setFullNameError("Your full name is required");
  }
  if (email !== "") {
    const RegEx = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (RegEx.test(email)) {
      setEmailError("");
      if (email === "gustavo@demo.com") {
        setEmailError("");
        if (password === "123") {
          setSuccessMessage("Welcome!");
        }
      } else {
        setEmailError("");
      }
    } else {
      setEmailError("Invalid email");
    }
  } else {
    setEmailError("Email is required");
  }
  if (password !== "") {
  } else {
    setPasswordError("Enter your password");
  }
  if (confirm === password) {
    setConfirm("");
  } else {
    setConfirmError("The password does not match");
  }

  return (
    <>
      <NavFile />

      <Container className="contenedor">
        <Row className="row">
          <Col>
            <h1 className="Title"> User Registration</h1>
          </Col>
          {successMessage && (
            <div className="success-msg">{successMessage} </div>
          )}
        </Row>
        <Row className="row">
          <Col>
          
            <Form className="form" autocomplete="off" onSubmit={handleSubmission}>
              <Form.Group className="mb-3" controlId="formBasicUsert">
                <Form.Label className="label"> Full Name </Form.Label>
                <Form.Control
                  value={fullName}
                  onChange={e => handleFullNameChange(setFullName)}
                  placeholder="Your name"
                  className="input"
                  type="text"
                  name="fullname"
                  required
                />
                <br />
                {fullNameError && (
                  <div className="error-msg"> {fullNameError} </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                className="input"
                    onChange={e => handleEmailChange(setEmail)} value={email}
                    placeholder="Email address"
                    type="email"
                    name="email"
                    required
                  />
                <br />
                {emailError && <div className="error-msg"> {emailError} </div>}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                className="input"
              value={password}
              onChange={e => handlePasswordChange(setPassword)}
              placeholder="Password"
              type="password"
              name="password"
              required
            />
                <br />
                {passwordError && (
                  <div className="error-msg"> {passwordError} </div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className="label">Retype your Password</Form.Label>
                <Form.Control
                className=" input"
                    value={confirm}
                    onChange={e => handleConfirmChange(setConfirm)}
                    placeholder="Password"
                    type="password"
                    name="confirm"
                    required
                  />

                {confirmError && (
                  <div className="error-msg"> {confirmError} </div>
                )}
              </Form.Group>

              <Button
                type="submit"
                className="submit"
                
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Register;
