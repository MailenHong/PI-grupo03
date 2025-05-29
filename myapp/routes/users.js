var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/register', userController.showRegister);
router.post('/register', userController.createRegister);
router.get('/login', userController.showLogin)
router.post('/login', userController.createLogin);
//router.get('/profile', userController.profile);

module.exports = router;
