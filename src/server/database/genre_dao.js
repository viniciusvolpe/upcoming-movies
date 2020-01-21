const redis = require("./connector");
const {promisify} = require('util');


const COLLECTION_KEY = "genres"

function saveAll(genres) {
    redis.getInstance().mset(genres.flatMap(({ id, name }) => [`${COLLECTION_KEY}/${id}`, name]))
}

async function getById(id) {
    const client = redis.getInstance()
    const getAsync = promisify(client.get).bind(client);
    return await getAsync(`${COLLECTION_KEY}/${id}`);
}

module.exports = {
    saveAll,
    getById
}