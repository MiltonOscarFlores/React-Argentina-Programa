import React from "react";
import "../index.css";

const Nombre = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="nombre"
        className="form-label"
      >
        Nombre:
      </label>
      <input
        type="text"
        className="form-control custom-input"
        id="nombre"
        placeholder="Ingrese su nombre"
      />
    </div>
  );
};

export default Nombre;
