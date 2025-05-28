var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/register', userController.create);
//router.get('/login', userController.login);
router.get('/profile', userController.profile);

module.exports = router;
