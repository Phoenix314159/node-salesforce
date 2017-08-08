const session = require('express-session'),
    config = require('../config'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    jsforceAjaxProxy = require('jsforce-ajax-proxy'),
    corsOptions = {
        origin: 'https://localhost:8443'
    };

module.exports = app => {
    app.use(session({
        secret: config.session_secret,
        resave: false,
        saveUninitialized: true,
        rolling: true
    }))
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use('/proxy/?*', jsforceAjaxProxy())
}