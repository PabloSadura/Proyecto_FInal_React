import { memo } from "react";

import Items from "../Items/Items";

const ItemsList = memo(({ producto }) => {
  return (
    <div className="container-fluid d-flex justify-content-evenly mt-4 flex-wrap ">
      {producto.map((element) => (
        <Items products={element} key={element.id} />
      ))}
    </div>
  );
});

export default ItemsList;
