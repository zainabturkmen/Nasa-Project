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
  test("IT should response with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send({
        mission: "USS Enterprise",
        rocket: "NCC 1701-D",
        target: "Kepler-186 f",
        launchDate: "January 4, 2028",
      })
      .expect("Content-type", /json/)
      .expect(201);
    expect(response.body).toMatchObject({
      mission: "USS Enterprise",
      rocket: "NCC 1701-D",
      target: "Kepler-186 f",
    });
  });

  test("It should catch missing required properties", () => {});
  test("it should catch invalid dates", () => {});
});
