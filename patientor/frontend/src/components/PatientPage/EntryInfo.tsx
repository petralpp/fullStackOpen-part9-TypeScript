import { Typography } from "@mui/material";
import { Diagnosis, Entry } from "../../types";

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

  return (
    <div>
      <div>
        <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
          {entry.date} <i>{entry.description}</i>
        </Typography>
        <Typography component="ul">
          {entry.diagnosisCodes?.map((diagnose, index) =>
            getDiagnoses(diagnose, index)
          )}
        </Typography>
      </div>
    </div>
  );
};

export default EntryInfo;
