import express from "express";
import calculateBmi from "./bmicalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req, res) => {
  const height = req.query.height;
  const weight = req.query.weight;

  if (Number(height) && Number(weight)) {
    const bmiRange = calculateBmi(Number(height), Number(weight));
    res.json({ weight: weight, height: height, bmi: bmiRange });
  } else {
    res.json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
