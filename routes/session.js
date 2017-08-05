const session = require('express-session'),
    config = require('../config');

module.exports = app => {
    app.use(session({
        secret: config.session_secret,
        resave: false,
        saveUninitialized: true,
        rolling: true
    }))
}