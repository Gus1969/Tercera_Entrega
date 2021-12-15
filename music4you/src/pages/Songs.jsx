import React from "react";
import { Container } from "react-bootstrap";
import canciones from "../canciones.json";


const Songs = () => {
  return (
    <div className="posting">
      {canciones.map((cancion) => {
        return (
          <>
          <Container>
            <h3>{canciones.nombre}</h3>,
            <audio controls src={canciones.ruta}></audio>,
            <img src={canciones.icono} alt="Boney" />,
            <h2>{canciones.artista}</h2>,
            <h5>{canciones.reproducciones}</h5>
            </Container>
          </>
        );
      })}
    </div>
  );
};

export default Songs;
