import SaludoEstatico from "./components/SaludoEstatico";
import SaludoDinamico from "./components/SaludoDinamico";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Container
        maxWidth="lg"
        sx={{
          boxShadow: 5,
          pb: 1,
          borderRadius: 1,
          display: "grid",
          gridTemplateRows: "repeat(2, 1fr)",
          marginTop: "40px",
          width: "40%",
          textAlign: "center",
        }}
      >
        <SaludoEstatico />
        <SaludoDinamico />
      </Container>
    </div>
  );
}

export default App;
