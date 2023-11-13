import "./DisplayPrediction.css";

function DisplayPrediction({ prediction = "default val" }) {
  return (
    <h3>
      Prediction is <span id="pred">{prediction}</span>
    </h3>
  );
}

export default DisplayPrediction;
