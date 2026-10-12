const express = require("express");
const app = express();

app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).json({
      error: "person NOT FOUND!",
    });
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const personData = req.body;

  if (!personData.name) {
    return res.status(400).json({
      error: "name is required.",
    });
  }

  if (!personData.number) {
    return res.status(400).json({
      error: "number is required.",
    });
  }

  const existingPerson = persons.find(
    (person) => person.name.toLowerCase() === personData.name.toLowerCase(),
  );

  if (existingPerson) {
    return res.status(409).json({ error: "name must be unique" });
  }

  const newPerson = {
    id: Math.floor(Math.random() * 9999999).toString(),
    name: personData.name,
    number: personData.number,
  };

  persons = persons.concat(newPerson);

  res.status(201).json(newPerson);
});

app.get("/info", (req, res) => {
  res.send(`
      <p>Phonebook has info for ${persons.length} people</p>
      <p>${new Date()}</p>
    `);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
