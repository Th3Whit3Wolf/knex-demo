const pets = "pets";
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex(pets).del();
	await knex(pets).insert([
		{ id: 1, name: "Figaro", pet_types_id: 2, food_types_id: 3 },
		{ id: 2, name: "Fat Sam", pet_types_id: 3, food_types_id: 1 },
		{ id: 3, name: "Moki", pet_types_id: 3, food_types_id: 1 },
		{ id: 4, name: "Cleo", pet_types_id: 4, food_types_id: 2 }
	]);
};
