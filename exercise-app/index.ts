import express from "express";
import calculateBmi from "./bmicalculator";
import calculateExercises from "./exerciseCalculator";
const app = express();
app.use(express.json());

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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  const hours = daily_exercises as number[];
  const targetHour = target as number;
  if (!hours || !targetHour) {
    res.status(400).json({ error: "parameters missing" });
    return;
  }
  if (!Array.isArray(hours) || isNaN(targetHour) || hours.some(isNaN)) {
    res.status(400).json({ error: "malformatted parameters" });
    return;
  }
  const result = calculateExercises(hours, targetHour);
  res.json(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
