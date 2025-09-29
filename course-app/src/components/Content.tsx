interface Course {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  content: Course[];
}

const Content = (props: ContentProps) => {
  return props.content.map((course: Course) => (
    <p key={course.name}>
      {course.name} {course.exerciseCount}
    </p>
  ));
};

export default Content;
