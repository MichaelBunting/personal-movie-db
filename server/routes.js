const path = require('path');

module.exports = (app, db) => {
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    });
}