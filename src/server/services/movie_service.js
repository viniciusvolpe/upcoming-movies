const axios = require("axios");
const { MOVIES_API } = require("../constants/api_urls");
const movieMapper = require("../workers/movie_mapper");

function loadSummary(request, response) {
    axios.get(`${MOVIES_API}/movie/upcoming`, {
        params: {
            api_key: process.env.MOVIES_API_KEY,
            page: request.params.page
        }
    })
    .then(({ status, data }) => 
        response.status(status).json({
            ...data,
            results: data.results.map(movieMapper.mapResume)
        })
    )
    .catch(error => {
        const { response: { status = 500 } = {} } = error;
        response.status(status).send(error)
    });
}

function searchMovies(request, response) {
    response.send("ok");
}

function loadDetails(request, response) {
    response.send("ok");
}

module.exports = {
    loadSummary,
    searchMovies,
    loadDetails
}