import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputNombre({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          width: "25ch",
          marginBottom: 4,
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Tu Nombre"
        variant="standard"
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
