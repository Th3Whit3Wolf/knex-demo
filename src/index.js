const createServer = require("./server");

const app = createServer();
const port = process.env.PORT || 8081;

app.get("/", (request, response) => {
	response.send("Application up and running!");
});

app.listen(port, () => {
	console.log(`server listening on localhost:${port}`);
});
