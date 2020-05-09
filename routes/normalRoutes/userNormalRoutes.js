var express = require('express');
var router = express.Router();
var userNormalController = require('../../controllers/normalcontroller/usernormalcontroller');

router.get('/register', userNormalController.renderRegisterPage);

router.get('/login', userNormalController.renderLoginPage);

module.exports = router;
