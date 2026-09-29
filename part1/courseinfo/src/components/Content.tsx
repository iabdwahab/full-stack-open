export default function Content(props: {
  part1: string;
  exercises1: number;
  part2: string;
  exercises2: number;
  part3: string;
  exercises3: number;
}) {
  return (
    <>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </>
  );
}
