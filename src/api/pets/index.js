module.exports = (app, db) => {
	const Pets = require("./model")(db);
	const { getAllPets, getPetByID, addPet } = require("./controller")(Pets, db);

	app
		.route("/pets")
		.get(getAllPets)
		.post(addPet);

	app
		.route("/pets/:id")
		.get(getPetByID);
};
