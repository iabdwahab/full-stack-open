export default function Persons({ personsList = [] }) {
  return personsList.map((person) => (
    <p key={person.name}>
      {person.name} - {person.number}
    </p>
  ));
}
