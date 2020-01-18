const express = require('express');
const dotenv = require("dotenv");
const routes = require("./routes");
const genreInitialier = require("./workers/genre_initializer")

if(process.env.NODE_ENV === 'development')
    dotenv.config();

genreInitialier();

const app = express();
app.use(express.static('dist'));
routes(app);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

module.exports = app;
