import React from "react";
import Apellido from "./components/Apellido";
import ConfirmarPassword from "./components/ConfirmarPassword";
import Email from "./components/Email";
import Nombre from "./components/Nombre";
import Password from "./components/Password";
import Telefono from "./components/Telefono";
import "bootstrap/dist/css/bootstrap.min.css";
import Terminos from "./components/Terminos";
import Boton from "./components/Boton";
import logo from "../src/images/logo.jpg";
import "../src/index.css";

function App() {
  return (
    <>
      <div className="col-2"></div>
      <div className="container col-5 mt-3 card rounded-5">
        <div className="row">
          <div className="pb-4 text-center">
            {" "}
            <img
              className="img-fluid rounded-5"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="col-6">
            <Nombre />
          </div>
          <div className="col-6">
            <Apellido />
          </div>
        </div>
        <div className="row">
          <Email />
          <Telefono />
          <div className="col-6">
            <Password />
          </div>
          <div className="col-6">
            <ConfirmarPassword />
          </div>
          <Terminos />
          <div className="text-end mb-3">
            <Boton />
          </div>
        </div>
      </div>
      <div className="col-2"></div>
    </>
  );
}

export default App;
