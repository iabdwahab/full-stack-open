import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

import serverConnection from "./server/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState("");

  useEffect(() => {
    serverConnection.getAllPersons().then((personsList) => {
      setPersons(personsList);
    });
  }, []);

  const [filterName, setFilterName] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} />

      <Filter
        value={filterName}
        onChange={(event) => setFilterName(event.target.value)}
      />
      <h2>add a new</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
      />
      <h2>Numbers</h2>
      <Persons personsList={personsToShow} setPersons={setPersons} />
    </div>
  );
};

export default App;
