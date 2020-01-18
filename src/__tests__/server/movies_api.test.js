const request = require("supertest")
const app = require("../../server")

describe("Movies api", () => {
  it("Should get movie summary", async () => {
    const res = await request(app)
      .get("/api/movies")
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("results");
    expect(res.body.page).toEqual(1);
  });

  it("Should get second page movie summary", async () => {
    const res = await request(app)
      .get("/api/movies")
      .query({ page: 2 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("results");
    expect(res.body.page).toEqual(2);
  });

  it("Should search movies by query", async () => {
    const res = await request(app)
      .get("/api/movies/search")
      .query({ query: "bad" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("results");
    expect(res.body.page).toEqual(1);
  });

  it("Should get movie detail by id", async () => {
    const res = await request(app)
      .get("/api/movies/38700")
      .send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toEqual("Bad Boys for Life");
  });

  it("Should return auth error when api key does not exist", async () => {
    process.env.MOVIES_API_KEY = null;
    const res = await request(app)
      .get("/api/movies")
      .send();
    expect(res.statusCode).toEqual(401);
  });
});