import serverConnection from "../server/persons";

export default function Persons({ personsList = [], setPersons }) {
  const handleDeletePerson = (person) => {
    const { id: personId, name: personName } = person;
    const isConfirmed = confirm(`Delete ${personName}?`);

    if (!isConfirmed) return;

    serverConnection
      .deletePerson(personId)
      .then((data) => {
        console.log(data);
        setPersons(personsList.filter((person) => person.id !== personId));
        alert(`${data.name} Deleted Succesully!`);
      })
      .catch((error) => {
        console.log(error);
        alert("ERROR deleting person!");
      });
  };

  return personsList.map((person) => (
    <p key={person.name}>
      {person.name} - {person.number}
      <button onClick={() => handleDeletePerson(person)}>delete</button>
    </p>
  ));
}
