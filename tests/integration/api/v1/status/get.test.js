import orquestrador from "tests/orquestrador";

beforeAll(async () => {
  await orquestrador.waitForAllServices();
});

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependendencies.database.version).toEqual("16.0");
  expect(responseBody.dependendencies.database.max_connections).toEqual(100);
  expect(responseBody.dependendencies.database.opened_connections).toEqual(1);
});
