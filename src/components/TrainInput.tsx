import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import AlertBox from "./AlertBox";
import "./TrainInput.css";

function TrainInput() {
  const [inputCorpus, setInputCorpus] = useState("");
  const [trainingComplete, setTrainingComplete] = useState(false);

  const onInputCorpusChange = (e) => setInputCorpus(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/train", {
      method: "POST",
      body: JSON.stringify({
        input_corpus: inputCorpus,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTrainingComplete(result["result"]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form>
      <Box className="trainInputContainer">
        <TextField
          id="outlined-multiline-static"
          label="paste input here and hit train"
          multiline
          rows={10}
          fullWidth
          // defaultValue="Input text"
          // value={inputCorpus}
          onChange={onInputCorpusChange}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          train
        </Button>
        <br />
        {trainingComplete && <AlertBox />}
      </Box>
    </form>
  );
}

export default TrainInput;
