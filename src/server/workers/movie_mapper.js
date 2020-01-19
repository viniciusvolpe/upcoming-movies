const moment = require("moment");
const { IMAGE_API } = require("../constants/api_urls");
const genreDAO = require("../database/genre_dao");

async function mapResume(movie) {
    const genres = await Promise.all(movie.genre_ids.map(genreDAO.getById));
    return {
        id: movie.id,
        name: movie.title,
        poster: `${IMAGE_API}/${movie.poster_path}`,
        backdrop: `${IMAGE_API}/${movie.backdrop_path}`,
        genre: genres.join(", "),
        releaseDate: moment(movie.release_date, "yyyy-MM-dd").format("LL")
    }
}

function mapDetails(movie) {
    return {
        id: movie.id,
        name: movie.title,
        poster: `${IMAGE_API}/${movie.poster_path}`,
        genre: movie.genres.map(genre => genre.name).join(", "),
        overview: movie.overview,
        releaseDate: movie.release_date
    }
}

module.exports = {
    mapResume,
    mapDetails
}