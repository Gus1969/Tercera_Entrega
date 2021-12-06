import React, { useState} from "react";

import { Container, Navbar, Nav, Modal, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavFile.css";

const NavFile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="header" closeButton>
          <Modal.Title className="title"> Login </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="Form">
            <Form.Group className="mb-3" controlId="formBasicUsert">
              <Form.Label className="labelModal"> Full Name </Form.Label>
              <Form.Control
                className="InputModal"
                type="text"
                name="fullname"
                placeholder="Your name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="labelModal">Email address</Form.Label>
              <Form.Control
                className="inputModal"
                type="email"
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="footer">
          
          <Button variant="primary" className="login-btn" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar collapseOnSelect expand="lg" className="Navigation">
        <Container>
          <Navbar.Brand className="content" as={Link} to={"../pages/Home"}>
            {" "}
            Music<span>4</span>You
          </Navbar.Brand>{" "}
          <i class="fal fa-cloud-music"></i>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" m-auto links">
              <Nav.Link className="enlace" as={Link} to={"../pages/Home"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"../pages/Songs"}>
                {" "}
                Songs
              </Nav.Link>
            </Nav>
            <Nav className="farrightlinks">
              <Nav.Link id="loginModal" onClick={handleShow}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"../pages/Register"}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavFile;
