const supertest = require("supertest");
const createServer = require("../../server");

const app = createServer();
const request = supertest(app);

describe("GET /pets", () => {
	test("Return all pet names", async () => {
		const response = await request.get("/pets");

		expect(response.statusCode).toBe(200);
		expect(response.body.length).toBe(4);
	});
});
