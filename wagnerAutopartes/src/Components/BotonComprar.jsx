import React, { useState } from "react";

const BotonComprar = () => {
  const [graciasVisible, setGraciasVisible] = useState(false);

  const handleClick = () => {
    setGraciasVisible(true);

    setTimeout(() => {
      setGraciasVisible(false);
    }, 3000);
  };

  return (
    <div>
      <button
        className="botonComprar"
        onClick={handleClick}
      >
        <b>Comprar ahora</b>
      </button>
      {graciasVisible && (
        <div
          class="alert-success"
        >
          Gracias por su compra!
        </div>
      )}
    </div>
  );
};

export default BotonComprar;
