import { Box } from "@mui/material";
import React from "react";

const SaludoEstatico = () => {
  return (
    <Box sx={{ paddingTop: 3, paddingBottom: 2 }}>
      <h3>Bienvenido! </h3>
      <h6>
        Ingresá tu nombre <br /> para obtener un saludo personalizado:
      </h6>
    </Box>
  );
};

export default SaludoEstatico;
