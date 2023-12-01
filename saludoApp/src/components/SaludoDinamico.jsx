import React from "react";
import InputNombre from "./InputNombre";

const SaludoDinamico = () => {
  const [nombre, setNombre] = React.useState("");

  const handleInputChange = (event) => {
    setNombre(event.target.value);
  };

  return (
    <div>
      <InputNombre
        value={nombre}
        onChange={handleInputChange}
      />
      <h6>
        {nombre !== "" ? (
          <>
            Hola, {nombre}! <br />
            Estamos encantados de tenerte aquí.
            <br /> Que tengas un excelente día! 👋👋
          </>
        ) : (
          "Esperando..."
        )}
      </h6>
    </div>
  );
};

export default SaludoDinamico;
