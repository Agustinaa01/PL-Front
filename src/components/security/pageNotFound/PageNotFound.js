import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFoundImage from "./not-found-image.jpg";

const PageNotFound = () => {
  return (
    <div className="container text-center">
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <img src={notFoundImage} alt="Error 404" className="img-fluid mb-4" />
      <Button as={Link} to="/login" variant="primary">
        Volver a iniciar sesión
      </Button>
    </div>
  );
};

export default PageNotFound;
