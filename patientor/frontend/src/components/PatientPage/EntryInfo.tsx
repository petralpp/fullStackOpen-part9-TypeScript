import { Container, Typography } from "@mui/material";
import { Diagnosis, Entry } from "../../types";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import WorkIcon from "@mui/icons-material/Work";

interface Props {
  entry: Entry;
  diagnoses: Diagnosis[];
}

const EntryInfo = ({ entry, diagnoses }: Props) => {
  const getDiagnoses = (code: string, index: number) => {
    const found = diagnoses.filter((d) => d.code === code);

    if (found.length === 0) {
      return null;
    }
    return (
      <Typography component="li" key={index}>
        {found[0].code} {found[0].name}
      </Typography>
    );
  };

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const getEntryType = () => {
    switch (entry.type) {
      case "OccupationalHealthcare":
        return (
          <>
            <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
              <WorkIcon />
              Occupational: {entry.employerName}
            </Typography>
            {entry.sickLeave ? (
              <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
                Sick leave: from <i>{entry.sickLeave.startDate}</i> to{" "}
                <i>{entry.sickLeave.endDate}</i>{" "}
              </Typography>
            ) : null}
          </>
        );
      case "Hospital":
        return (
          <>
            <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
              <LocalHospitalIcon />
              Hospital
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
              Discharged: {entry.discharge.criteria} ({entry.discharge.date})
            </Typography>
          </>
        );
      case "HealthCheck":
        return (
          <>
            <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
              <CheckCircleOutlineIcon />
              Health check
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
              Health check rating: {entry.healthCheckRating}
            </Typography>
          </>
        );
      default:
        return assertNever(entry);
    }
  };

  return (
    <Container
      style={{
        marginTop: "1em",
        paddingTop: "1em",
        paddingBottom: "1em",
        border: "solid",
        borderRadius: "1em",
      }}
    >
      <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
        {entry.date} <i>{entry.description}</i>
      </Typography>
      {getEntryType()}
      <Typography component="ul">
        {entry.diagnosisCodes?.map((diagnose, index) =>
          getDiagnoses(diagnose, index)
        )}
      </Typography>
    </Container>
  );
};

export default EntryInfo;
