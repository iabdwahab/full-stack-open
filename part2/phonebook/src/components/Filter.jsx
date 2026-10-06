export default function Filter({ value, onChange }) {
  // const handleFilteredNameChange = (event) => {
  //   const inputValue = event.target.value;

  //   if (inputValue === "") {
  //     setFilteredList(persons);
  //   } else {
  //     setFilteredList(
  //       persons.filter((person) =>
  //         person.name.toLowerCase().includes(inputValue.toLowerCase()),
  //       ),
  //     );
  //   }

  //   setFilteredName(event.target.value);
  // };
  return (
    <div>
      filter shown with
      <input value={value} onChange={onChange} />
    </div>
  );
}
