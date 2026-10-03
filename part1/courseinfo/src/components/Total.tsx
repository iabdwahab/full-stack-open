export default function Total(props: {
  parts: [
    {
      name: string;
      exercises: number;
    },
    {
      name: string;
      exercises: number;
    },
    {
      name: string;
      exercises: number;
    },
  ];
}) {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
}
