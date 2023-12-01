import React from "react";

const Apellido = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="apellido"
        className="form-label"
      >
        Apellido:
      </label>
      <input
        type="text"
        className="form-control"
        id="apellido"
        placeholder="Ingrese su apellido"
      />
    </div>
  );
};

export default Apellido;
