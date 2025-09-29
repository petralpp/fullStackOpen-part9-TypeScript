import { Gender } from "./types";
import { z } from "zod";

const newPatientSchema = z.object({
  name: z.string().trim().min(1),
  dateOfBirth: z.iso.date(),
  ssn: z.string().trim().min(10),
  gender: z.enum(Gender),
  occupation: z.string(),
});

export default newPatientSchema;
