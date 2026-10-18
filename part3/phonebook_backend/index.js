const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");

const Person = require("./modules/persons");

app.use(cors());
app.use(express.json());

const morgan = require("morgan");

morgan.token("request-body", (req, res) => {
  return JSON.stringify(req.body);
});

app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :request-body",
  ),
);

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

// I inserted it to solve a problem of serving FRONTEND CODE on Vercel.
// As when entering /index.html it showed, but when entering / it didn't show the frontend code.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/api/persons", (req, res) => {
  Person.find({})
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(`error fetching persons:`, error.message);
      res.status(500).json({
        error: "Error finding persons",
      });
    });
});

app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  // const person = persons.find((person) => person.id === id);

  Person.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      console.log(`error getting person's data:`, error.message);
      res.status(404).json({
        error: "person NOT FOUND!",
      });
    });
});

app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;

  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const personData = req.body ?? {};

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
