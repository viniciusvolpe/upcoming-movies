const { IMAGE_API } = require("../constants/api_urls");

function mapResume(movie) {
    return {
        name: movie.title,
        poster: `${IMAGE_API}/${movie.poster_path}`,
        backdrop: `${IMAGE_API}/${movie.backdrop_path}`,
        genre: movie.genre_ids.join(", "),
        releaseDate: movie.release_date
    }
}

module.exports = {
    mapResume
}