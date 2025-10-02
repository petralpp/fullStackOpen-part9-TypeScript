import type { CoursePart } from "../types";

const Part = ({ part }: { part: CoursePart }) => {
  {
    switch (part.kind) {
      case "basic":
        return (
          <div>
            <p>
              <b>
                {part.name} {part.exerciseCount}
              </b>
            </p>
            <i>{part.description}</i>
          </div>
        );
      case "group":
        return (
          <div>
            <p>
              <b>
                {part.name} {part.exerciseCount}
              </b>
            </p>
            <p>{part.groupProjectCount}</p>
          </div>
        );
      case "background":
        return (
          <div>
            <p>
              <b>
                {part.name} {part.exerciseCount}
              </b>
            </p>
            <i>{part.description}</i>
            <p>{part.backgroundMaterial}</p>
          </div>
        );
      case "special":
        return (
          <div>
            <p>
              <b>
                {part.name} {part.exerciseCount}
              </b>
            </p>
            <i>{part.description}</i>
            <p>
              required skills:{" "}
              {part.requirements.map((detail, index) =>
                index === 0 ? detail + ", " : detail
              )}
            </p>
          </div>
        );
      default:
        break;
    }
  }
};

export default Part;
