import { useState } from "react";
import axios from "axios";

export default function PersonForm({ persons, setPersons }) {
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
      const newPersonObj = {
        name: newName,
        number: phoneNumber,
      };

      axios
        .post("http://localhost:3001/persons", newPersonObj)
        .then((response) => {
          console.log(response.data);
          setPersons(persons.concat(response.data));
          setNewName("");
          setPhoneNumber("");
          alert(`${newName} was successfully added!`);
        })
        .catch((error) => {
          console.log(error);
          alert("Error in adding!");
        });
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
  );
}
