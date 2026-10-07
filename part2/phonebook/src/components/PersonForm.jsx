import { useState } from "react";

import serverConnection from "../server/persons";

export default function PersonForm({
  persons,
  setPersons,
  setNotificationMessage,
  setNotificationType,
}) {
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

      serverConnection
        .addNewPerson(newPersonObj)
        .then((data) => {
          setPersons(persons.concat(data));
          setNewName("");
          setPhoneNumber("");
          setNotificationMessage(`${newName} was successfully added!`);
          setNotificationType(`succeed`);
          setTimeout(() => {
            setNotificationMessage(``);
          }, 2000);
        })
        .catch((error) => {
          console.log(error);
          alert("Error in adding!");
        });
    } else {
      const foundedPerson = foundedList[0];

      const isUpdatingConfirmed = confirm(
        `${foundedPerson.name} is already added to phonebook, replace the old number with a new one?`,
      );

      if (isUpdatingConfirmed) {
        serverConnection
          .updatePerson(foundedPerson.id, {
            ...foundedPerson,
            number: phoneNumber,
          })
          .then((updatedPerson) => {
            setPersons(
              persons.map((person) => {
                if (person.id === foundedPerson.id) {
                  return updatedPerson;
                } else {
                  return person;
                }
              }),
            );

            setNewName("");
            setPhoneNumber("");
            setNotificationMessage(`${newName} was successfully updated!`);
            setNotificationType(`succeed`);
            setTimeout(() => {
              setNotificationMessage(``);
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
            setNotificationMessage(
              `Information of ${newName} has already been removed from server`,
            );
            setNotificationType(`error`);
            setTimeout(() => {
              setNotificationMessage(``);
            }, 2000);
          });
      }
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
