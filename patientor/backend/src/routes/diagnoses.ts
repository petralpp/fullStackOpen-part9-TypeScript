import express from "express";
import diagnosesService from "../services/diagnosesService";

const router = express.Router();

router.get("/", (_req, res) => {
  console.log("Fetching all diagnoses!");
  const data = diagnosesService.getDiagnoses();
  res.json(data);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
