import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleNewName = (event) => {
    event.preventDefault();
    if (newName === "") {
      alert(`Name can't be empty!`);
      return;
    }

    const foundedList = persons.filter((person) => person.name === newName);

    if (foundedList.length < 1) {
      setPersons(persons.concat({ name: newName }));
      setNewName("");
      alert(`${newName} was successfully added!`);
    } else {
      alert(`${newName} is already added to phonebook!`);
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;
