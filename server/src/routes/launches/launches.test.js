const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should response with 200 success", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-type", /json/)
      .expect(200);
  });
});

describe("Test POST /launche", () => {
  const completeLaunchData = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "January 4, 2028",
  };

  const launchDateWithoutDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
  };

  test("IT should response with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-type", /json/)
      .expect(201);
    const requestDate = completeLaunchData.launchDate;
    expect(response.body).toMatchObject(launchDateWithoutDate);
  });

  test("It should catch missing required properties", () => {});
  test("it should catch invalid dates", () => {});
});
