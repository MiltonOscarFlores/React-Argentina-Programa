import React from "react";

const Email = () => {
  return (
    <div className=" container mb-3">
      <label
        htmlFor="email"
        className="form-label"
      >
        Dirección de Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="tunombre@ejemplo.com"
      />
    </div>
  );
};

export default Email;
