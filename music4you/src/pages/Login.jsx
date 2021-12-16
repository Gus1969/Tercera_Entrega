import React from 'react';
import { Container, Button, Form } from "react-bootstrap";
import Footer from '../common/Footer';
import NavFile from '../common/NavFile';
import './Login.css'

const Login = () => {
   
    return (
        <div>
            <NavFile/>
            <Container className="form-wrapper">
            <div className="row g-3">
          <div className="col-lg-12 md-12 sm-12">
            <Form className="Form">
            <h3 className="login-title">Login</h3>
            <Form.Group className="mb-3" controlId="formBasicUsert">
              <Form.Label className="label"> Full Name </Form.Label>
              <Form.Control
                className="Input"
                type="text"
                name="fullname"
                placeholder="Your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Button variant="primary" className="login-btn">
            Login
          </Button>
          </Form>
          </div>
          </div>
          </Container>
          <Footer/>
            
        </div>
    )
}

export default Login;
