import express, { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import { Diagnosis } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<Diagnosis[]>) => {
  console.log("Fetching all diagnoses!");
  const data = diagnosesService.getDiagnoses();
  res.json(data);
});

export default router;
