const express = require("express"); // imports express
const server = express();

let users = [
    {
        id: "a_unique_id", // hint: use the shortid npm package to generate it
        name: "Jane Doe", // String, required
        bio: "Not Tarzan's Wife, another Jane",  // String, required
    }
];

// middleware 
server.use(express.json()); // teaches the server to parse JSON from the body

// endpoints
server.get("/", (req, res) => {
    res.json({ api: "running....." });
  });

  
const port = 5000; // the server is running on http://localhost:5000
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));
