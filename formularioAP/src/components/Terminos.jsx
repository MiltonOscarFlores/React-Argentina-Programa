import React from "react";

const Terminos = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input custom-checkbox"
          id="terminos"
        />
        <label
          htmlFor="terminos"
          className="form-check-label"
        >
          Acepto todos los Términos y Condiciones
        </label>
      </div>
    </div>
  );
};

export default Terminos;
