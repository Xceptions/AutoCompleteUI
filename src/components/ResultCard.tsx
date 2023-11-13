import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import "./ResultCard.css";

export default function ResultCard() {
  const [wordToComplete, setWordToComplete] = useState("");

  const onWordToCompleteChange = (e) => setWordToComplete(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/complete/" + wordToComplete, {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(JSON.stringify(result));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Card sx={{ minWidth: 275 }} className="cardContainer">
        <CardContent>
          <Typography variant="h5" component="div">
            Result
          </Typography>
          <br />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Type word (currently supports only one word)
          </Typography>
          <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={onWordToCompleteChange}
          />
        </CardContent>
        <CardActions>
          <Button type="submit" size="small" onClick={handleSubmit}>
            Complete
          </Button>
        </CardActions>
      </Card>
      <p>Prediction: </p>
      {wordToComplete}
    </>
  );
}
