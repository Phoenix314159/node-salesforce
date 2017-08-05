const config = require('../config'),
    jsforce = require('jsforce'),
    oauth2 = new jsforce.OAuth2({
        clientId: config.clientID,
        clientSecret: config.clientSecret,
        redirectUri: config.callbackUrl
    });
module.exports = app => {
    app.get('/oauth/auth', (req, res) => {
        res.redirect(oauth2.getAuthorizationUrl({scope: 'api id web'}));
    });
    app.get('/oauth/callback', (req, res) => {
        let conn = new jsforce.Connection({oauth2: oauth2}),
            code = req.query.code;
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
            res.redirect('/accounts');
        });
    });
}