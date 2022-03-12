module.exports = (app, db) => {
	const Pets = require("./model")(db);
	const { getAllPets } = require("./controller")(Pets);

	app.route("/pets").get(getAllPets);
};
