const Header = (props) => <h1>{props.course}</h1>;

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

const Content = (props) => (
  <div>
    {props.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
);

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return courses.map((course) => <Course key={course.id} course={course} />);
};

export default App;
