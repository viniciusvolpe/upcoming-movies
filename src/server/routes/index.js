const express = require("express");
const moviesRouter = require("./movies_routes");

module.exports = function(app) {
    const mainRouter = express.Router();
    mainRouter.get("/", (reuqest, response) => response.status(200).send("api running"))
    moviesRouter(mainRouter);
    app.use("/api", mainRouter);
}