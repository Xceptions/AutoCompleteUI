import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import "./ResultCard.css";

export default function ResultCard() {
  return (
    <Card sx={{ minWidth: 275 }} className="cardContainer">
      <CardContent>
        <Typography variant="h5" component="div">
          Result
        </Typography>
        <br />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Type word (currently supports only one word)
        </Typography>
        <TextField id="outlined-basic" variant="outlined" />
      </CardContent>
      <CardActions>
        <Button size="small">Complete</Button>
      </CardActions>
    </Card>
  );
}
