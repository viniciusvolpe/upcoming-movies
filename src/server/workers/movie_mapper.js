const moment = require("moment");
const { IMAGE_API } = require("../constants/api_urls");
const genreDAO = require("../database/genre_dao");

function formatDate(releaseDate) {
    return moment(releaseDate, "yyyy-MM-dd").format("LL")
}

async function mapResume(movie) {
    const genres = await Promise.all(movie.genre_ids.map(genreDAO.getById));
    return {
        id: movie.id,
        name: movie.title,
        poster: `${IMAGE_API}/w185/${movie.poster_path}`,
        backdrop: `${IMAGE_API}/w185/${movie.backdrop_path}`,
        genre: genres.join(", "),
        releaseDate: formatDate(movie.release_date)
    }
}

function mapDetails(movie) {
    return {
        id: movie.id,
        name: movie.title,
        poster: `${IMAGE_API}/w185/${movie.poster_path}`,
        backdrop: `${IMAGE_API}/w500/${movie.backdrop_path}`,
        genre: movie.genres.map(genre => genre.name).join(", "),
        overview: movie.overview,
        releaseDate: formatDate(movie.release_date)
    }
}

module.exports = {
    mapResume,
    mapDetails
}