const http = require("http");

const data = [
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

const server = http.createServer((req, res) => {
  if (req.url === "/info") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const nowDate = new Date();

    const responseData = `
      <p>Phonebook has info for ${data.length} people</p>
      <p>${nowDate}</p>
    `;

    return res.end(responseData);
  }

  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(data));
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`listnening on PORT: ${PORT}`);
});
