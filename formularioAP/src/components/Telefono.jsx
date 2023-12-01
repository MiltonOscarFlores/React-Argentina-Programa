import React from "react";

const Telefono = () => {
  return (
    <div className=" container mb-3">
      <label
        htmlFor="telefono"
        className="form-label"
      >
        Teléfono
      </label>
      <input
        type="tel"
        className="form-control"
        id="telefono"
        placeholder="Ej: 555-125-5525"
      />
    </div>
  );
};

export default Telefono;
