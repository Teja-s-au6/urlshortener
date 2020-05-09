var Url = require("../../models/Url");
var shortid = require("shortid");
const dotenv = require("dotenv");
dotenv.config()

const DOMAIN_NAME = process.env.DOMAIN_NAME || "http://localhost:1234/"

module.exports = {
    urlCreate: function(req, res) {
        const user = req.user;
        const url = new Url({ ...req.body });

        const urlcode = shortid.generate()
        url.originalUrl = req.body.OriginalUrl
        url.shortUrl = DOMAIN_NAME  + '/' +  urlcode
        url.urlCode = urlcode
        url.user = user._id;
        user.shorturl.push(url._id)

        user
        .save()
        .then(function(user) {
            console.log('User has successfully created new url');
        })
        .catch(function(err) {
            if (err.name === 'ValidationError') return res.status(400).send(`Validation Error: ${err.message}`);
            console.log(err);
            return res.status(500).send('Server Error');
        });

        url
        .save()
        .then(function(blogObj) {
            console.log('Save Successfully');
            return res.redirect('/allshorturl');
        })
        .catch(function(err) {
            console.log(err.message);
            return res.status(500).send('server Error');
        });

        
    }
}