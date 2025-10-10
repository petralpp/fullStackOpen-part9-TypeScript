import { z } from "zod";
import newPatientSchema from "./utils";

export interface Entry {
  paska: string;
}

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export type NonSensitivePatient = Omit<Patient, "ssn" | "entries">;

export type NewPatient = z.infer<typeof newPatientSchema>;

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}
