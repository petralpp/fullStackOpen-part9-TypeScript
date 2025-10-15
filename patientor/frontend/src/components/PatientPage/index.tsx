import { useParams } from "react-router-dom";
import { Patient } from "../../types";
import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import patientService from "../../services/patients";
import EntryInfo from "./EntryInfo";

const PatientPage = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      patientService.getPatient(params.id).then((result) => {
        setPatient(result);
      });
    }
  }, [params.id]);

  return (
    <div>
      {patient ? (
        <Container style={{ marginTop: "1em" }}>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            {patient.name}
          </Typography>
          {patient.gender === "female" ? <FemaleIcon /> : <MaleIcon />}
          <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
            ssn: {patient.ssn}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
            occupation: {patient.occupation}
          </Typography>
          <Typography
            variant="h4"
            style={{ marginBottom: "0.5em", marginTop: "0.5em" }}
          >
            Entries
          </Typography>
          <>
            {patient.entries.map((entry, index) => (
              <EntryInfo key={index} entry={entry} />
            ))}
          </>
        </Container>
      ) : (
        <p>Nothing here</p>
      )}
    </div>
  );
};

export default PatientPage;
