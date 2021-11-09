/*          DEPENDENCIES            */
const express = require('express')

/*          APPLICATION OBJECT          */
const app = express()

/*          MIDDLEWARE          */
app.use(express.json()) // Parse json bodies, and make req.body

/*          DATA            */
const projects = require("./projects.json");
const about = require("./about.json");

/*          ROUTES          */

// Home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello World");
}); 

// Projects show route
app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});

// About show route
app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
});

/*          SERVER LISTENER         */
app.listen(1337, () => console.log("listening on port 1337"))