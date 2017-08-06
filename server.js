const express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser'),
    fileArr = require('./fileArr'),
    cors = require('cors'),
    corsOptions = {
    origin: config.callbackUrl
    };
    jsforce = require('jsforce'),
    oauth2 = new jsforce.OAuth2({
        clientId: config.clientID,
        clientSecret: config.clientSecret,
        redirectUri: config.callbackUrl
    });

app.use(bodyParser.json());
app.use(cors(corsOptions));

// require('./routes/accounts')(app);
require('./routes/auth')(app);
// require('./routes/session')(app);

app.get('/auth', (req, res) => {
    console.log('yo man')
    res.send(oauth2.getAuthorizationUrl({scope: 'full'}));
});

fileArr.arr.map(file => {
    app.use(express.static(__dirname + file));
})



app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})






