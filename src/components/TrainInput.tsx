import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

// import "./TrainInput.css";

function TrainInput() {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <TextField
        id="outlined-multiline-static"
        label="paste input here and hit train"
        multiline
        rows={10}
        fullWidth
        // defaultValue="Input text"
        placeholder=""
      />
      <br />
      <br />
      <Button variant="contained">train</Button>
    </Box>
  );
}

export default TrainInput;
