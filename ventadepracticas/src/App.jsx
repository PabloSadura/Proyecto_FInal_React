import { useState } from "react";

import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/navBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
