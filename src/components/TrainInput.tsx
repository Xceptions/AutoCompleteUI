import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

// import "./TrainInput.css";

function TrainInput() {
  return (
    <>
      <h3>Input train data</h3>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
      />
      <br />
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default TrainInput;
