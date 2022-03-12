module.exports = Pets => {
	const getAllPets = (req, res, next) => {
		Pets.findAll()
			.then(pets => {
				const petNames = pets.map(pet => pet.name);
				res.json(petNames);
			})
			.catch(next);
	};

	return { getAllPets };
};
