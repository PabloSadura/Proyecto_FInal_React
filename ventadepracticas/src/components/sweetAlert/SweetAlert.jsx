import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../Context/CartContext";
import "./SweetAlert.css";
function SweetAlert() {
  const [
    cart,
    setCart,
    addItems,
    removeItem,
    clear,
    isInCart,
    addCount,
    removeCount,
  ] = useContext(CartContext);
  const sweet = () => {
    Swal.fire({
      title: "Esta seguro que desea vaciar el carrito?",
      text: "Esto no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar todo!",
    }).then((result) => {
      if (result.isConfirmed) {
        clear();
        Swal.fire(
          "Eliminado!",
          "El carrito se vacio correctamente.",
          "success"
        );
      }
    });
  };

  return (
    <div className="text-end">
      <button onClick={sweet} className="css-button-rounded--red mt-3 ">
        Vaciar Carrito
      </button>
      <Link
        to={"/payLoad"}
        className="css-button-rounded--green ms-4 text-decoration-none"
      >
        Generar Orden
      </Link>
    </div>
  );
}

export default SweetAlert;
