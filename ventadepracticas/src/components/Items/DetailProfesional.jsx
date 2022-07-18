import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { gFetchProfesional } from "../../helpers/Profesionales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

function DetailProfesional() {
  const [cart, setCart, addItems] = useContext(CartContext);

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
          <img src={img} alt="" className="w-75 p-4 rounded-5" />
        </div>
        <div className="col-md-6 p-4">
          <div className="d-flex justify-content-between">
            <h3>{nombre}</h3>
            <h4 className="text-muted">{stars}</h4>
          </div>
          <p className="">{especialidad}</p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} />
            <span> {localidad}</span>
          </p>
          <p>{descripcion}</p>
          <p>{}</p>
          <div className="text-end">
            <h3>$ {precio}</h3>
          </div>
          <div className="text-end d-flex justify-content-end my-2">
            <div className="d-flex justify-content-between px-4 border align-items-center">
              <button className="rounded mx-3 border-0" onClick={() => {}}>
                -
              </button>
              <p className="align-self-center pt-2">{cantidad}</p>
              <button className="rounded mx-3 border-0" onClick={() => {}}>
                +
              </button>
            </div>
          </div>
          <div className="text-end">
            <button
              className="css-button-sliding-to-left--sky text-decoration-none text-center"
              onClick={() => {
                addItems({ profesional, quantity: 1 });
              }}
            >
              Contratar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProfesional;
