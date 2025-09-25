import express, { Request, Response } from "express";
import patientService from "../services/patientService";
import { Patient, NonSensitivePatient, NewPatient } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  const data = patientService.getNonSensitivePatients();
  res.json(data);
});

router.post("/", (req: Request<NewPatient>, res: Response<Patient>) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const patient = req.body;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const savedPatient = patientService.addNewPatient(patient);
  res.json(savedPatient);
});

export default router;
