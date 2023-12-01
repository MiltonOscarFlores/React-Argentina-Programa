import React from "react";

const Password = () => {
  return (
    <div className="mb-3">
      <label
        htmlFor="password"
        className="form-label"
      >
        Contraseña
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
      />
    </div>
  );
};

export default Password;
