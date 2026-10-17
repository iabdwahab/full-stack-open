// This is a solution for a problem on my local machine:
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");

// Password did not added:
if (process.argv.length < 3) {
  console.log("Add your password!");
  process.exit(1);
}

// Name was added but number was not.
if (process.argv.length === 4) {
  console.log(`Add person's number!`);
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://fullstack:${password}@cluster0.comfbgv.mongodb.net/phonebook`;

mongoose.connect(url, { family: 4 });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log("phonebook:");
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
