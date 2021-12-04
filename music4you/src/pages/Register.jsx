import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import NavFile from "../common/NavFile";

const Register = () => {
  return (
    <>
      <NavFile />

      <Container className="contenedor">
        <Row className="row">
          <Col>
            <h1 className="Title"> User Registration</h1>
          </Col>
        </Row>
        

        <Row className="row">
          <Col>
            <Form className="form">
            <Form.Group className="mb-3" controlId="formBasicUsert">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Username" />
                </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Retype your Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
             
              <Button variant="primary" type="submit" clasName="button">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Register;
