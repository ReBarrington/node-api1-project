const express = require("express"); // imports express
const cors = require('cors')
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
server.use(cors()); // cors middleware for stretch

// endpoints

// check for API running:
server.get("/", (req, res) => {
    res.json({ api: "running....." });
  });

// Returns an array of users:
server.get("/api/users", (req, res) => {
    if (users) {
        res.json(users);
    } else {
        // if any errors retrieving users, 500 (Internal Server Error)
        res.status(500).json({ errorMessage: "The users information could not be retrieved."})
    }
})

// Creates a user using the information sent inside the request body:
server.post("/api/users", (req, res) => {
    const userInfo = req.body;
    if (!userInfo.name|| !userInfo.bio){
        // if missing name or bio, 400 (Bad Request)
        res.status(400).json({ errorMessage: "Please provide name and bio for the user."})
    } else {
        // if valid: try to save new user to database, 201 (Created)
        try {
            users.push(userInfo);
            res.status(201).json(users);
        }
        catch(error) {
            console.log(error)
            res.status(500).json({ errorMessage: "There was an error while saving the user to the database."})
        }
    }
})

// Returns the user object with the specified id:
server.get("/api/users/:id", (req, res) => {
    let id = req.params.id;
    // find user with id that matches id of param:
    const user = users.find((user) => user.id == id);
    if (user) {
        try {
            res.status(200).json(user);
        }
        catch(err) {
            console.log(err)
            res.status(500).json({ errorMessage: "The users information could not be retrieved."})
        }
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist."})
    }
})

// Removes the user with the specified id and returns the deleted user:
server.delete("/api/users/:id", (req, res) => {
    let id = req.params.id;
    // find user with matching id:
    const deletedUser = users.find((user) => user.id == id);
    if (deletedUser) {
        try {
            res.status(200).json(deletedUser);
            users = users.filter(user => user !== deletedUser);
        }
        catch(err) {
            console.log(err)
            res.status(500).json({ errorMessage: "The user could not be removed."})
        }
    } else {
        res.status(404).json({ message: "The user with the specified ID does not exist."})
    }
})


const port = 5000; // the server is running on http://localhost:5000
server.listen(port, () => console.log(`\n== api on port ${port} ==\n`));
