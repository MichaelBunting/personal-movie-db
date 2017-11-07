const path = require('path');
const axios = require('axios');
const dotenv = require('dotenv').config();

function handleError(res, err) {
    res.statusMessage = err.message;
    res.status(401).send(err.message);
}

module.exports = (app, db) => {
    app.get('/getMovies/:query', (req, res) => {
        axios.get(`${process.env.TMDB_BASE_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${req.params.query}&language=en-US&page=1`)
            .then(data => { res.send(data.data) })
            .catch(err => { handleError(res, err) });
    })

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    });
}