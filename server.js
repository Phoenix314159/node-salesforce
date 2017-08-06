const express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser'),
    fileArr = require('./fileArr'),
    cors = require('cors'),
    fs = require('fs'),
    corsOptions = {
        origin: 'https://localhost:8443'
    };

app.use(bodyParser.json());
app.use(cors(corsOptions));

require('./routes/accounts')(app);
require('./routes/auth')(app);
require('./routes/session')(app);

fileArr.arr.map(file => {
    app.use(express.static(__dirname + file));
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})






