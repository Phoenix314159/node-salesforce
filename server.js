const express = require('express'),
    app = express(),
    config = require('./config');


require('./middleware/session')(app);
require('./routes/accounts')(app);
require('./routes/auth')(app);
process.env.PWD = process.cwd();
app.use(express.static(process.env.PWD + '/public'));

let port = process.env.PORT || config.port;

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})






