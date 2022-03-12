const express = require("express");
const app = express();
const port = process.env.PORT || 8081;
const knex = require("knex")(require("./db/config.js")[process.env.NODE_ENV||'development']);

app.get("/", (request, response) => {
    response.send("Application up and running!")
})


app.get("/pets", (request, response) => {
    knex("pet")
        .select("*")
        .then(pets => {
            let petNames = pets.map(pet => pet.name);
            response.json(petNames)
        })
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`)
})