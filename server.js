const express = require('express'),
    app = express(),
    config = require('./config'),
    port = process.env.PORT || config.port;

require('./middleware/session')(app);
require('./routes/accounts')(app);
require('./routes/auth')(app);

process.env.PWD = process.cwd();
app.use('/', express.static(process.env.PWD + '/public'));

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})






