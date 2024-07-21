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

  const launchDataWithInvalidDate = {
    mission: "USS Enterprise",
    rocket: "NCC 1701-D",
    target: "Kepler-186 f",
    launchDate: "zoot",
  };

  test("IT should response with 201 created", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-type", /json/)
      .expect(201);
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);
    expect(response.body).toMatchObject(launchDateWithoutDate);
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDateWithoutDate)
      .expect("Content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Missing required launch property",
    });
  });

  test("it should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(launchDataWithInvalidDate)
      .expect("Content-type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "Invalid launch date",
    });
  });
});
