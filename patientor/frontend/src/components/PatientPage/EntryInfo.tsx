import { Typography } from "@mui/material";
import { Entry } from "../../types";

interface Props {
  entry: Entry;
}

const EntryInfo = ({ entry }: Props) => {
  return (
    <div>
      <div>
        <Typography variant="body1" style={{ marginBottom: "0.5em" }}>
          {entry.date} {entry.description}
        </Typography>
        <Typography component="ul">
          {entry.diagnosisCodes?.map((diagnose, index) => (
            <Typography key={index} component="li">
              {diagnose}
            </Typography>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default EntryInfo;
