import React from "react";

const ConfirmarPassword = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="confirmarPassword"
        className="form-label"
      >
        Confirmar contraseña
      </label>
      <input
        type="Password"
        className="form-control"
        id="confirmarPassword"
      />
    </div>
  );
};

export default ConfirmarPassword;
