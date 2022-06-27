import { useState } from "react";
import { useEffect } from "react";
import Items from "../Items/Items";

function ItemsList({ producto }) {
  console.log(producto);
  return (
    <div className="w-25 px-1">
      <Items productos={producto} />
    </div>
  );
}

export default ItemsList;
