import React from "react";
import "./Components/estilos.css";
import Imagen from "./Components/imagen";
import Nombre from "./Components/nombre";
import Descripcion from "./Components/descripcion";
import Precio from "./Components/precio";
import SKU from "./Components/SKU";
import Disponibilidad from "./Components/disponibilidad";
import logo from "../src/Components/imagen/logo.png";
import BotonComprar from "../src/Components/BotonComprar";

function App() {
  return (
    <div className="App">
      <div className="contenedorTitulo">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="h1">
          AUTOPARTES <br /> WAGNER
          <input
            type="text"
            placeHolder="   Buscá un producto"
          />
          <span class="material-symbols-outlined">search</span>
        </h1>
      </div>

      <div className="contenedorMain">
        <div className="columna-imagen">
          <Imagen />
        </div>
        <div className="columna-datos">
          <h4 className="estadoProducto">Nuevo | 4 Vendidos</h4>
          <Nombre />
          <Precio />
          <Descripcion />
          <SKU />
          <div className="contenedorDescripcionBoton">
            <Disponibilidad />
            <BotonComprar className="botonComprar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
