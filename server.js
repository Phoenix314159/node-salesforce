const express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes/accounts')(app);
require('./routes/auth')(app);
require('./routes/session')(app);

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})






