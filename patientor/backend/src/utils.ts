import { Gender, NewPatient } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const isEmpty = (text: string): boolean => {
  return text.trim().length === 0;
};

const parseStringValue = (value: unknown): string => {
  if (!isString(value)) {
    throw new Error("Incorrect or missing value");
  }
  if (isEmpty(value)) {
    throw new Error("Incorrect or missing value");
  }
  return value;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseGender = (value: unknown): Gender => {
  if (!isString(value) || !isGender(value)) {
    throw new Error("Incorrect or missing value");
  }
  return value;
};

const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newPatient: NewPatient = {
      name: parseStringValue(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseStringValue(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseStringValue(object.occupation),
    };
    return newPatient;
  }
  throw new Error("Incorrect data: some fields are missing");
};

export default toNewPatient;
