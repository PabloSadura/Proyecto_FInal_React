import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { gFetch } from "../../helpers/BDatos";
import Items from "../Items/Items";
import { Spinner } from "react-bootstrap";
import ItemsList from "../ItemsList/ItemsList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { tipo } = useParams();

  useEffect(() => {
    if (tipo) {
      gFetch
        .then((resp) => {
          setProducts(resp.filter((element) => element.tipo === tipo));
        })
        .catch((rej) => {
          console.log(rej);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      gFetch
        .then((resp) => {
          setProducts(resp);
        })
        .catch((rej) => {
          console.log(rej);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [tipo]);

  return loading ? (
    <div className="text-center mt-4">
      <Spinner animation="border" role="status" variant="info" />
    </div>
  ) : (
    <ItemsList producto={products} />
  );
};

export default ItemListContainer;
