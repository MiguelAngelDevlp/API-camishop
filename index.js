const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');

const teams = require("./teams.json");

app.use(cors())
app.get("/", (request, response) => {
    response.send({response: true, code: 200, teams: teams});
});

app.get("/:id", (request, response) => {
    const { id } = request.params;
    const results = teams.filter(team => team.id === Number(id));
    response.status(200).send({response: true, teams: results});
});

app.use(cors());
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
