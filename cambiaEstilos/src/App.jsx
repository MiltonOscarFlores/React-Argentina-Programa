import { useState } from "react";
import "./App.css";

function App() {
  const [estilo, setEstilo] = useState({
    backgroundColor: "#1f1f1f",
    borderRadius: "30px",
    color: "#535bf2",
    padding: "15px",
    fontWeight: "400",
    transition: "all 1s",
  });

  const cambiarEstilo = () => {
    setEstilo({
      backgroundColor:
        estilo.backgroundColor === "#1f1f1f" ? "#535bf2" : "#1f1f1f",
      color: estilo.color === "#535bf2" ? "#1f1f1f" : "#535bf2",
      fontWeight: estilo.fontWeight === "400" ? "bold" : "400",
      padding: estilo.padding === "15px" ? "25px" : "15px",
      transition: estilo.transition === "all 1s" ? "all 1s" : "all 1s",
      borderRadius: estilo.borderRadius === "30px" ? "10px" : "30px",
    });
  };

  return (
    <div className="App">
      <button onClick={cambiarEstilo}>Cambiar Estilos</button>
      <p style={estilo}>Este es un párrafo que cambia de estilos.</p>
    </div>
  );
}

export default App;
