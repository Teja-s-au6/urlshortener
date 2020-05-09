var express = require("express");
var urlApiControllers = require('../../controllers/apicontroller/urlapicontroller');
var authenticate = require("../../middlewares/authenticate");

var router = express.Router()

router.post('/shortUrl/url', authenticate, urlApiControllers.urlCreate);

module.exports = router;