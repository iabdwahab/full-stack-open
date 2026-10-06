import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone_number: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone_number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone_number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone_number: "39-23-6423122", id: 4 },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  const [filterName, setFilterName] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        value={filterName}
        onChange={(event) => setFilterName(event.target.value)}
      />

      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} />

      <h2>Numbers</h2>
      <Persons personsList={personsToShow} />
    </div>
  );
};

export default App;
