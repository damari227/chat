const app = require('express');

const route = () => {
    app.get('/', (req, res) => {
        res.send('Hello world');
    });
}

module.exports = {
    route()
}