import { useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone_number: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone_number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone_number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone_number: "39-23-6423122", id: 4 },
  ]);

  const [filteredList, setFilteredList] = useState(persons);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter persons={persons} setFilteredList={setFilteredList} />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons personsList={filteredList} />
    </div>
  );
};

export default App;
