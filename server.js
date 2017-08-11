const express = require('express'),
    app = express(),
    config = require('./config');


require('./middleware/session')(app);
require('./routes/accounts')(app);
require('./routes/auth')(app);

app.use(express.static(__dirname + '/public'));

let port = process.env.port || config.port;
console.log(process.env);
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})






