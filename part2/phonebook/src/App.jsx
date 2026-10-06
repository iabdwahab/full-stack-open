import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone_number: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone_number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone_number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone_number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [filteredList, setFilteredList] = useState(persons);

  const handleNewName = (event) => {
    event.preventDefault();
    if (newName === "" || phoneNumber === "") {
      alert(`Name & Phone number must be filled!`);
      return;
    }

    const foundedList = persons.filter((person) => person.name === newName);

    if (foundedList.length < 1) {
      setPersons(
        persons.concat({
          name: newName,
          phone_number: phoneNumber,
          id: persons.length + 1,
        }),
      );
      setNewName("");
      alert(`${newName} was successfully added!`);
    } else {
      alert(`${newName} is already added to phonebook!`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFilteredNameChange = (event) => {
    const inputValue = event.target.value;

    if (inputValue === "") {
      setFilteredList(persons);
    } else {
      setFilteredList(
        persons.filter((person) =>
          person.name.toLowerCase().includes(inputValue.toLowerCase()),
        ),
      );
    }

    setFilteredName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with
        <input value={filteredName} onChange={handleFilteredNameChange} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={handleNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone number:{" "}
          <input value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredList.map((person) => (
        <p key={person.name}>
          {person.name} - {person.phone_number}
        </p>
      ))}
    </div>
  );
};

export default App;
