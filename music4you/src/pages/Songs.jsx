import React from "react";
import {Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import canciones from "../canciones.js";
import "./Songs.css";

const Songs = () => {
  return (
    <div className="grid">
      {canciones.map((cancion, i) => {
        return (
          
          
           
              <Card style={{ width: "22rem" }} className="card">
                <Card.Header className="card-image">
                  <Image
                    className="img"
                    src={cancion.icono}
                    variant="top"
                    alt=""
                    key={i}
                  />
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
                  <audio className="audio" controls src={cancion.ruta}></audio>
                </Card.Footer>
              </Card>
              
          
        );
      })}
      </div>
  );
};

export default Songs;
