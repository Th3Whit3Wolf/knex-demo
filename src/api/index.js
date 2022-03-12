const fs = require("fs");

const requireFiles = (directory, app, db) => {
	fs.readdirSync(directory).forEach(fileName => {
		// Recurse if directory
		if (fs.lstatSync(`${directory}/${fileName}`).isDirectory()) {
			requireFiles(`${directory}/${fileName}`, app, db);
		} else if (fileName === "index.js" && directory !== __dirname) {
            require(`${directory}/${fileName}`)(app, db);
        } else {
            return;
        }
	});
};

module.exports = (app, db) => {
	requireFiles(__dirname, app, db);
};