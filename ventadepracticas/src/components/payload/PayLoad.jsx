import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

function PayLoad() {
  const { order } = useContext(CartContext);
  const [buyer, setBuyer] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="m-4">
        <div className="border">
          <h4 className="text-center mt-4">
            Su compra fue realizada con exito!
          </h4>
          <h5 className="ms-4">Id de la orden: {order}</h5>
        </div>
      </div>
      <Link to={"/"} className="text-center">
        Volver
      </Link>
    </>
  );
}

export default PayLoad;
