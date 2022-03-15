const express = require("express");

const app = express();
const db = require("./db");

app.use(express.json());


require("./api")(app, db);

function createServer() {
	return app;
}

module.exports = createServer;
