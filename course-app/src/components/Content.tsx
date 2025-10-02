import Part from "./Part";
import type { CoursePart } from "../types";

interface ContentProps {
  content: CoursePart[];
}

const Content = (props: ContentProps) => {
  return props.content.map((course: CoursePart) => (
    <Part key={course.name} part={course} />
  ));
};

export default Content;
