export default function Persons({ personsList = [] }) {
  return personsList.map((person) => (
    <p key={person.name}>
      {person.name} - {person.phone_number}
    </p>
  ));
}
