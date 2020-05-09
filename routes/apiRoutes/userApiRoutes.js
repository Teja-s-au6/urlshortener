var express = require('express');
var userApiController = require('../../controllers/apicontroller/userapicontroller');


var router = express.Router();

router.post('/register', userApiController.registerUser);

router.post('/login', userApiController.loginUser);

router.delete('/logout' ,userApiController.logoutUser);

module.exports = router;