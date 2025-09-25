import express, { Response } from "express";
import patientService from "../services/patientService";
import { NonSensitivePatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  console.log("Fetching all patients!");
  const data = patientService.getNonSensitivePatients();
  res.json(data);
});

export default router;
