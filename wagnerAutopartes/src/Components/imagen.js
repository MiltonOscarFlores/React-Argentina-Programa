import React from "react";
import opticas from "./imagen/opticas.png";

const Imagen = () => {
  return (
    <div className="div">
      <img src={opticas} alt="foto opticas" width={350} height={400} />
    </div>
  );
};

export default Imagen;
