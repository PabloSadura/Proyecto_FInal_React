import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { gFetchProfesional } from "../../helpers/Profesionales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";

function DetailProfesional() {
  const [profesional, setProfesional] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    gFetchProfesional
      .then((resp) =>
        setProfesional(resp.find((item) => item.id === Number(id)))
      )
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));
  }, [id]);

  let stars = [];
  for (let i = 0; i < profesional.rate; i++) {
    stars[i] = <FontAwesomeIcon icon={faStar} />;
    console.log(stars);
  }

  const {
    nombre,
    localidad,
    rate,
    img,
    especialidad,
    precio,
    cantidad,
    descripcion,
  } = profesional;

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow w-100">
        <div className="col-md-6 text-center">
          <img src={img} alt="" className="w-100 p-4 rounded-5" />
        </div>
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between">
            <h3>{nombre}</h3>
            <h3>{stars}</h3>
          </div>
          <div>
            <p className="">{especialidad}</p>
          </div>
          <div>
            <p>
              {" "}
              <FontAwesomeIcon icon={faLocationDot} />
              <span> {localidad}</span>
            </p>
          </div>
          <div>
            <p>{descripcion}</p>
          </div>
          <div className="text-end">
            <h3>$ {precio}</h3>
          </div>
          <div className="text-end">
            <Link
              to="/cart"
              className="css-button-sliding-to-left--sky text-decoration-none text-center"
            >
              Contratar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProfesional;
