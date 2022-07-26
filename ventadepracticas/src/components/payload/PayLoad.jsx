import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";

function PayLoad() {
  const { order } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return loading ? (
    <div className="text-center">
      <Spinner
        animation="border"
        role="status"
        variant="info"
        className=" mt-4"
      />
    </div>
  ) : (
    <>
      <div className="m-4 text-center">
        <div className="border">
          <h4 className="text-center mt-4">
            Su compra fue realizada con exito!
          </h4>
          <h5 className="ms-4">Id de la orden: {order}</h5>
          <p>Gracias vuelva pronto!</p>
        </div>
        <Link
          to={"/"}
          className="text-center text-decoration-none css-button-sliding-to-left--sky mt-4"
        >
          Ir al Incio
        </Link>
      </div>
    </>
  );
}

export default PayLoad;
