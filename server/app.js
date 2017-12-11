let path = require('path');

let express = require('express');
let url = require('url');
let bodyParser = require('body-parser');

let pkg = require('./package.json');

let config = require('./app.json');
let router = require('./src/router');

let app = express();

app.use(bodyParser.json());

// API
app.use('/api', router);

let server = app.listen(config.server.port, () => {
    console.info(`Express server started at http://localhost:${config.server.port}`);
});