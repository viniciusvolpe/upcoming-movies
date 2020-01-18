const axios = require("axios");
const { MOVIES_API } = require("../constants/api_urls");
const movieMapper = require("../workers/movie_mapper");
const defaultErrorHandler = require("../helpers/defaultErrorHandler");

function loadSummary(request, response) {
    axios.get(`${MOVIES_API}/movie/upcoming`, {
        params: {
            api_key: process.env.MOVIES_API_KEY,
            page: request.query.page
        }
    })
    .then(({ status, data }) => 
        response.status(status).json({
            ...data,
            results: data.results.map(movieMapper.mapResume)
        })
    )
    .catch(defaultErrorHandler(response));
}   

function searchMovies(request, response) {
    axios.get(`${MOVIES_API}/search/movie`, {
        params: {
            api_key: process.env.MOVIES_API_KEY,
            query: request.query.query
        }
    })
    .then(({ status, data }) => 
        response.status(status).json({
            ...data,
            results: data.results.map(movieMapper.mapResume)
        })
    )
    .catch(defaultErrorHandler(response));
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