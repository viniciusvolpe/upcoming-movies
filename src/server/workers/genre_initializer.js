const axios = require("axios");
const genreDAO = require("../database/genre_dao");
const { MOVIES_API } = require("../constants/api_urls");

module.exports = function initialize() {
    axios.get(`${MOVIES_API}/genre/movie/list`, {
        params: {
            api_key: process.env.MOVIES_API_KEY
        }
    })
    .then(({ data }) => genreDAO.saveAll(data.genres))
    .catch(console.error);
}