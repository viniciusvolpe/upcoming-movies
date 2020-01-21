const axios = require("axios");
const { MOVIES_API } = require("../constants/api_urls");
const movieMapper = require("../workers/movie_mapper");
const defaultErrorHandler = require("../helpers/default_error_handler");

function callSummaryApi({ response, path, params }) {
    axios.get(`${MOVIES_API}${path}`, { params })
    .then(async ({ data }) => ({
        ...data,
        results: await Promise.all(data.results.map(movieMapper.mapResume))
    }))
    .then(movieResponse => response.status(200).json(movieResponse))
    .catch(defaultErrorHandler(response));
}

function loadSummary(request, response) {
    callSummaryApi({ response, path: "/movie/upcoming", params: {
        api_key: process.env.MOVIES_API_KEY,
        page: request.query.page
    }})
}   

function searchMovies(request, response) {
    callSummaryApi({ response, path: "/search/movie", params: {
        api_key: process.env.MOVIES_API_KEY,
        query: request.query.query,
        page: request.query.page
    }})
}

function loadDetails(request, response) {
    axios.get(`${MOVIES_API}/movie/${request.params.id}`, {
        params: {
            api_key: process.env.MOVIES_API_KEY
        }
    })
    .then(({ status, data }) => 
        response.status(status).json(movieMapper.mapDetails(data))
    )
    .catch(defaultErrorHandler(response));
}

module.exports = {
    loadSummary,
    searchMovies,
    loadDetails
}