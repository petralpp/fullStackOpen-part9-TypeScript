import express, { Request, Response } from "express";
import patientService from "../services/patientService";
import { NonSensitivePatient, NewPatient } from "../types";
import toNewPatient from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  const data = patientService.getNonSensitivePatients();
  res.json(data);
});

router.post("/", (req: Request<NewPatient>, res: Response) => {
  try {
    const patient = toNewPatient(req.body);
    const savedPatient = patientService.addNewPatient(patient);
    res.json(savedPatient);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong.";
    if (error instanceof Error) {
      errorMessage += " Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
