const Url = require("../../models/Url");

module.exports = {
    getUrls: function(req, res) {
        const user = req.user;

        Url.find({user: req.user._id}).then(function(urls) {
            return res.render('dashboard', {
                userId: req.session.userId,
                name: req.user.name,
                urls: urls,
                length: urls.length
                
            })
        })
        .catch(function(err) {
            console.log(err.message);
            return res.status(500).send('Server error');
        });
    },

    createUrl: function(req, res) {
        res.render('shorturl', {
            userId: req.session.userId,
            title: 'Shorten Url Page'
        })
    }
}