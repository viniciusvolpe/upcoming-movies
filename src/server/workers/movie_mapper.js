const { IMAGE_API } = require("../constants/api_urls");

function mapResume(movie) {
    return {
        id: movie.id,
        name: movie.title,
        poster: `${IMAGE_API}/${movie.poster_path}`,
        backdrop: `${IMAGE_API}/${movie.backdrop_path}`,
        genre: movie.genre_ids.join(", "),
        releaseDate: movie.release_date
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