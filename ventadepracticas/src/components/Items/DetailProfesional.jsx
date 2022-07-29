import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMinusCircle,
  faPlusCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import ItemCount from "./itemsCount/ItemCount";

function DetailProfesional() {
  const [profesional, setProfesional] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  // TRAIGO DE FIRESTORE UN PROFESIONAL
  useEffect(() => {
    const db = getFirestore();
    const queryProfesional = doc(db, "profesionales", id);
    getDoc(queryProfesional)
      .then((resp) => {
        setProfesional({
          id: resp.id,
          ...resp.data(),
          quantity: 1,
        });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  // FUNCIONES PARA SUMAR Y RESTAR CANTIDADES

  const add = (item) => {
    item.quantity++;
    item["total"] = item.precio * item.quantity;
    setProfesional({ ...item });
  };
  const rest = (item) => {
    item.quantity > 1 ? item.quantity-- : null;
    item["total"] = item.precio * item.quantity;
    setProfesional({ ...item });
  };
  // DESTRUCTURING DEL PROFESIONAL
  const {
    nombre,
    localidad,
    rate,
    img,
    especialidad,
    practica,
    precio,
    quantity,
  } = profesional;

  // FUNCION QUE ME PINTA LA CANTIDAD DE ESTRELLAS DEL PROFESIONAL
  const star = () => {
    let stars = [];
    for (let i = 0; i < rate; i++) {
      stars[i] = <FontAwesomeIcon icon={faStar} key={i} />;
    }
    return stars;
  };

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow">
        <div className="col-md-6 text-center">
          <img src={img} alt="" className="w-50 p-4 rounded-5" />
        </div>
        <div className="col-md-6 p-4 text-md-start text-center">
          <div className="d-md-flex justify-content-between">
            <h3>{nombre}</h3>
            <h4 className="text-muted">{star()}</h4>
          </div>
          <p className="">{especialidad}</p>
          <p>
            {" "}
            <FontAwesomeIcon icon={faLocationDot} key={id} />
            <span> {localidad}</span>
          </p>
          <div className="d-md-flex justify-content-between">
            <div className="text-center text-md-start">
              <h4>Practica Ofrecida:</h4>
              <h5>
                {practica} <span>${precio}</span>
              </h5>
            </div>
            <div className="">
              <div className="d-flex justify-content-center">
                <p>Cantidad:</p>
                <FontAwesomeIcon
                  icon={faMinusCircle}
                  className="mx-3"
                  onClick={() => {
                    rest(profesional);
                  }}
                />
                <p>{quantity}</p>
                <FontAwesomeIcon
                  icon={faPlusCircle}
                  className="ms-3"
                  onClick={() => {
                    add(profesional);
                  }}
                />
              </div>
              <h4 className="text-md-end">$ {profesional.precio * quantity}</h4>
            </div>
          </div>
          <div className="text-md-end">
            <ItemCount profesional={profesional} key={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProfesional;
