const pets = "pets";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable(pets, table => {
		table.increments("id");
		table.string("name", 250);
		table.integer("pet_types_id");
		table.foreign("pet_types_id").references("pet_types.id");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists(pets);
};
