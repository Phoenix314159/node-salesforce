const config = require('../config'),
    jsforce = require('jsforce'),
    oauth2 = new jsforce.OAuth2({
        clientId: config.clientID,
        clientSecret: config.clientSecret,
        redirectUri: config.callbackUrl
    }),
    url = oauth2.getAuthorizationUrl({scope: 'full'});

module.exports = app => {
    app.get('/', (req, res) => {
       res.send('yo man');
    });
    app.get('/oauth/auth', (req, res) => {
        res.send(url);
    });
    app.get('/oauth/callback', (req, res) => {
        let conn = new jsforce.Connection({oauth2: oauth2}),
            code = req.query.code;
        console.log('code:', code);
        conn.authorize(code, (err, userInfo) => {
            if (err) {
                return console.error(err);
            }
            console.log('Access Token: ' + conn.accessToken);
            console.log('Instance URL: ' + conn.instanceUrl);
            console.log('User ID: ' + userInfo.id);
            console.log('Org ID: ' + userInfo.organizationId);
            req.session.accessToken = conn.accessToken;
            req.session.instanceUrl = conn.instanceUrl;
            res.redirect('http://localhost:8443/accounts');
        });
    });
}