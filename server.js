const express = require('express'),
    app = express(),
    config = require('./config');


require('./middleware/session')(app);
require('./routes/accounts')(app);
require('./routes/auth')(app);

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || config.port);
// app.listen(config.port, () => {
//     console.log(`listening on port ${config.port}`)
// })






