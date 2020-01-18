const express = require("express");
const movieService = require("../services/movie_service");
module.exports = function (app) {
    const moviesRouter = express.Router();
    moviesRouter.get("/", movieService.loadResume);
    moviesRouter.get("/search", movieService.searchMovies);
    moviesRouter.get("/:id", movieService.loadDetails);
    app.use("/movies", moviesRouter);
}