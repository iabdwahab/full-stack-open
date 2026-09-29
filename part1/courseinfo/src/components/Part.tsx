export default function Part(props: { name: string; number: number }) {
  return (
    <p>
      {props.name} {props.number}
    </p>
  );
}
