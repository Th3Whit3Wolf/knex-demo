const genModel = require("../../utils/genModel");
const name = 'Pets'
const tableName = 'pets'

// Properties that are allowed to be selected from the database for reading.
const selectableProps = [
    "id",
    "name",
    "pet_types_id",
    "food_types_id"
];

module.exports = knex => {
    const model = genModel({
        knex,
        name,
        tableName,
        selectableProps
    })

    return {
        ...model,
    }
}