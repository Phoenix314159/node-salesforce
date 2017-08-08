const express = require('express'),
    app = express(),
    config = require('./config'),
    fileArr = require('./fileArr');

require('./middleware/session')(app);
require('./routes/accounts')(app);
require('./routes/auth')(app);

// fileArr.arr.map(file => {
//     app.use(express.static(__dirname + file));
// })
app.set('view engine', 'ejs');
app.listen(config.port, () => {
    console.log(`listening on port ${config.port}`)
})






