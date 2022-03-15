const modelValidator = (reqBody) => {
	let {name, pet_types_id, food_types_id} = reqBody;
	if (name !== undefined &&  pet_types_id !== undefined && food_types_id !== undefined) {
		return {name: name, pet_types_id: parseInt(pet_types_id), food_types_id: parseInt(food_types_id)}
	}
} 

module.exports = Pets => {
	const getAllPets = (req, res, next) => {
		if (Object.keys(req.query).length > 0) {
			Pets.query(req.query)
			.then(pets => {
				res.json(pets[0]);
			})
			.catch(next);
		} else {
			Pets.getAll()
			.then(pets => {
				res.json(pets);
			})
			.catch(next);
		}
	};

	const getPetByID = (req, res, next) => {
		let { id } = req.params;
		id = parseInt(id);
		Pets.getByID(id, ["name"])
			.then(pets => {
				const petNames = pets[0];
				res.json(petNames);
			})
			.catch(next);
	}

	const addPet = (req, res, next) => {
		const body = modelValidator(req.body);
		if (body !== undefined) {
			Pets.create(body)
			.then(pet => res.json({
				ok: true,
				message: 'Pet created',
				pet
			}))
			.catch(next)
		}
	}

	return { getAllPets, getPetByID, addPet };
};
