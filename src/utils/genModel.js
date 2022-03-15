// The guts of a model that uses Knexjs to store and retrieve data from a
// database using the provided `knex` instance. Custom functionality can be
// composed on top of this set of common guts.
//
// The idea is that these are the most-used types of functions that most/all
// "models" will want to have. They can be overriden/modified/extended if
// needed by composing a new object out of the one returned by this function ;)
module.exports = ({
	knex = {},
	tableName = "tablename",
	selectableProps = [],
	timeout = 1000
}) => {
	const create = (props, displayProps = selectableProps) => {
		delete props.id; // not allowed to set `id`

		return knex
			.insert(props)
			.returning(displayProps)
			.into(tableName)
			.timeout(timeout);
	};

	const update = (id, props, displayProps = selectableProps) => {
		delete props.id; // not allowed to set `id`

		return knex
			.update(props)
			.from(tableName)
			.where({ id })
			.returning(displayProps)
			.timeout(timeout);
	};

	const destroy = id =>
		knex.del().from(tableName).where({ id }).timeout(timeout);

	const getAll = (displayProps = selectableProps) =>
		knex.select(displayProps).from(tableName).timeout(timeout);

	const getByID = (id, displayProps = selectableProps) =>
		knex
			.select(displayProps)
			.from(tableName)
			.where({ id })
			.timeout(timeout);

	const query = (filters, displayProps = selectableProps) =>
		knex
			.select(displayProps)
			.from(tableName)
			.where(filters)
			.timeout(timeout);

	// Same as `query` but only returns the first match if >1 are found.
	const queryFirst = (filters, displayProps = selectableProps) =>
		query(filters, displayProps).then(results => {
			if (!Array.isArray(results)) return results;
			return results[0];
		});





	return {
		create,
		update,
		destroy,
		getAll,
		getByID,
		query,
		queryFirst
	};
};
