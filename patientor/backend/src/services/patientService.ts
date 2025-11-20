import { v1 as uuid } from "uuid";
import patients from "../../data/patients";
import {
  Patient,
  NonSensitivePatient,
  NewPatient,
  EntryWithoutId,
  Entry,
} from "../types";

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const getPatient = (id: string): Patient | undefined => {
  const foundPatient = patients.find((p) => p.id === id);
  return foundPatient;
};

const addNewPatient = (patient: NewPatient): Patient => {
  const newPatient: Patient = {
    id: uuid(),
    entries: [],
    ...patient,
  };
  patients.push(newPatient);
  return newPatient;
};

const addNewEntry = (id: string, entry: EntryWithoutId): Entry => {
  const patient = getPatient(id);
  if (!patient) {
    throw new Error("Adding the entry failed: patient not found");
  }
  const newEntry: Entry = {
    id: uuid(),
    ...entry,
  };
  patient.entries.push(newEntry);
  return newEntry;
};

export default {
  getNonSensitivePatients,
  getPatient,
  addNewPatient,
  addNewEntry,
};
