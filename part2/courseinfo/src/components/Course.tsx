import Content from "./Content";
import Header from "./Header";

const Course = (props) => {
  const { course } = props;

  // Already done
  const totalExercies = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  console.log(totalExercies);
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <h4>total of {totalExercies} exercies</h4>
    </div>
  );
};

export default Course;
