const express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/accounts');
require('./routes/auth');
require('./routes/session');

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})






