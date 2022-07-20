import React from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Spinner, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";

function DetailProfesional() {
  const [cart, setCart, addItems] = useContext(CartContext);
  const [valor, setValor] = useState([]);
  const [profesional, setProfesional] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProfesional = doc(db, "profesionales", id);
    getDoc(queryProfesional)
      .then((resp) => {
        setProfesional({ id: resp.id, ...resp.data() });
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const {
    nombre,
    localidad,
    rate,
    img,
    especialidad,
    cantidad,
    practica1,
    practica2,
  } = profesional;

  let stars = [];
  for (let i = 0; i < rate; i++) {
    stars[i] = <FontAwesomeIcon icon={faStar} />;
  }
  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <div className="container">
      <div className="row mt-4 border rounded-1 shadow w-100">
        <div className="col-md-6 text-center">
          <img src={img} alt="" className="w-50 p-4 rounded-5" />
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
          <div className="d-flex justify-content-between">
            <div>
              <label htmlFor="selectToastPlacement">Elegir Práctica</label>
              <Form.Select
                id="selectToastPlacement"
                className="mt-2"
                onChange={(e) => setValor(e.currentTarget.value)}
              >
                {[practica1, practica2].map((p) => (
                  <>
                    <option key={p} value={p.precio}>
                      {p.practica}
                    </option>
                  </>
                ))}
              </Form.Select>
            </div>
            <div>
              <p>Cantidad: {cantidad}</p>
            </div>
            <div>$ {valor}</div>
          </div>
          <div className="text-end">
            <button
              className="css-button-sliding-to-left--sky text-decoration-none text-center mt-4"
              onClick={() => {
                addItems(profesional);
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
