const express = require('express');
const dotenv = require("dotenv");
const routes = require("./routes")

if(process.env.NODE_ENV === 'development')
    dotenv.config();

const app = express();
app.use(express.static('dist'));
routes(app);
app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
