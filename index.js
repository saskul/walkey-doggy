require('dotenv').config();

const { PORT } = process.env;

const express = require('express');

const app = express();

app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`\n\n App is listening on port ${PORT}, enjoy :) \n\n`);
});