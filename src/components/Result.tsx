import Box from "@mui/material/Box";
import ResultCard from "./ResultCard";
import "./Result.css";

function Result() {
  return (
    <Box className="resultContainer">
      {/* <h1>The result</h1> */}
      <ResultCard />
    </Box>
  );
}

export default Result;
