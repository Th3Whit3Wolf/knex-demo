/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("food_types").del();
	await knex("food_types").insert([
		{ id: 1, name: "puppy chow", description: "food for pups" },
		{ id: 2, name: "fish flakes", description: "food for fish" },
		{
			id: 3,
			name: "meow mix",
			description: "taste so good cats ask for it by name"
		},
		{ id: 4, name: "bird seed", description: "food for birds" }
	]);
};
