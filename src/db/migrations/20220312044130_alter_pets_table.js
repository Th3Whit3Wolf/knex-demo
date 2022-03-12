const pets = "pets";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.alterTable(pets, table => {
		table.integer("food_types_id");
		table.foreign("food_types_id").references("food_types.id");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema
		.alterTable(pets, table => {
			table.dropForeign("food_types_id");
		})
		.then(() => {
			return knex.schema.dropTableIfExists(pets);
		});
};
