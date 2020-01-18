const express = require("express");
const moviesRouter = require("./movies_routes");

module.exports = function(app) {
    const mainRouter = express.Router();
    moviesRouter(mainRouter);
    app.use("/api", mainRouter);
}