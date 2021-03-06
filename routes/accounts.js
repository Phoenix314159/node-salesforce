const jsforce = require('jsforce');

module.exports = app => {

    app.get('/accountspersonal', (req, res) => {
        if (!req.session.accessToken || !req.session.instanceUrl) {
            res.redirect('/');
        }
        let query = 'SELECT id, name FROM account LIMIT 10',
            conn = new jsforce.Connection({
                accessToken: req.session.accessToken,
                instanceUrl: req.session.instanceUrl
            });

        conn.query(query, (err, result) => {
            if (err) {
                console.error(err);
                res.redirect('/');
            }
            res.json(result.records);
        });
    });
}
