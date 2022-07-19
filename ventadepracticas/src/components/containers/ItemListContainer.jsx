import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../helpers/BDatos";
import { Spinner } from "react-bootstrap";
import ItemsList from "../ItemsList/ItemsList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipo } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCategorias = collection(db, "categorias");
    console.log(tipo);

    if (tipo) {
      const queryCategoriaFilter = query(
        queryCategorias,
        where("tipo", `==`, `${tipo}`)
      );
      getDocs(queryCategoriaFilter)
        .then((resp) =>
          setCategoria(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCategorias)
        .then((resp) =>
          setCategoria(resp.docs.map((el) => ({ id: el.id, ...el.data() })))
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [tipo]);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsList producto={categoria} />
  );
};

export default ItemListContainer;
