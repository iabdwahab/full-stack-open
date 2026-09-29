export default function Total(props: {
  exercises1: number;
  exercises2: number;
  exercises3: number;
}) {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
}
