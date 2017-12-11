'use strict';

let path = require('path');

let express = require('express');
let url = require('url');
let bodyParser = require('body-parser');

let pkg = require('./package.json');
let config = process.env === 'production' ? require('./app.json') : require('./app-dev.json');
let router = require('./src/router');

let app = express();

app.use(bodyParser.json());

// API
app.use('/api', router);

if (config.proxy) {
    let proxy = require('proxy-middleware');
    console.log(`Proxying client to ${config.dev.client.port}`);
    app.use('/', proxy(url.parse(`http://localhost:${config.dev.client.port}`)));
} else {
    // serve client from public folder
    app.use('/', express.static(path.join(__dirname, 'public')));
}

let server = app.listen(config.server.port, () => {
    console.info(`Express server started at http://localhost:${config.server.port}`);
});