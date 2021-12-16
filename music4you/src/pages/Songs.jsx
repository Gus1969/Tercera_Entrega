import React from "react";
import { Container, Row, Col, Card, Image  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import canciones from "../canciones.json";
import "./Songs.css";
import Footer from "../common/Footer";


const Songs = () => {
  return (
    <div className="posting">
      {canciones.map((cancion, i) => {
        return (
          <>
          <Container>
            <Row>
              <Col lg={6}>
                <Card>
                  <Card.Header>
                    <Image src={cancion.icono} variant="top" alt="" key={i} />
                  </Card.Header>

                  <Card.Body>
                    <Card.Title>
                      <h3>{cancion.nombre}</h3>
                    </Card.Title>
                    <Card.Text>
                      <h2>{cancion.artista}</h2>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <audio controls src={cancion.ruta}></audio>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
          <Footer/>
         </>
          
        );
      })}
    </div>
  );
};

export default Songs;
