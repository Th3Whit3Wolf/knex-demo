const path = require("path");
// Update with your config settings.
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	development: {
		client: "postgresql",
		connection: {
			host: "127.0.0.1",
			password: "docker",
			user: "postgres",
			port: 5432,
			database: "pet_store"
		},
		migrations: {
			directory: path.join(__dirname, "./migrations")
		}
	},
	test: {
		client: "postgresql",
		connection: {
			host: "127.0.0.1",
			password: "docker",
			user: "postgres",
			port: 5432,
			database: "pet_store"
		},
		migrations: {
			directory: path.join(__dirname, "./migrations")
		}
	}
};
