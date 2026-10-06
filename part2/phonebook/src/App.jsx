import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone_number: "123456789" },
  ]);
  const [newName, setNewName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNewName = (event) => {
    event.preventDefault();
    if (newName === "" || phoneNumber === "") {
      alert(`Name & Phone number must be filled!`);
      return;
    }

    const foundedList = persons.filter((person) => person.name === newName);

    if (foundedList.length < 1) {
      setPersons(persons.concat({ name: newName, phone_number: phoneNumber }));
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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map((person) => (
        <p key={person.name}>
          {person.name} - {person.phone_number}
        </p>
      ))}
    </div>
  );
};

export default App;
