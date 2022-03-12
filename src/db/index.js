const env = process.env.NODE_ENV || "development";
const configuration = require("./config");
const db = require("knex")(configuration[env]);

module.exports = db;
