import Part from "./Part";

export default function Content(props: {
  part1: {
    name: string;
    exercises: number;
  };
  part2: {
    name: string;
    exercises: number;
  };
  part3: {
    name: string;
    exercises: number;
  };
}) {
  return (
    <div>
      <Part name={props.part1.name} number={props.part1.exercises} />
      <Part name={props.part2.name} number={props.part2.exercises} />
      <Part name={props.part3.name} number={props.part3.exercises} />
    </div>
  );
}
