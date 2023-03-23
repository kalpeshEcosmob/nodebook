const express = require('express');
const router = express.Router();
const authController = require('../controller/auth')

const isauth = require('../middleware/is-auth').getauth;

// auth files
router.get('/', authController.getLogin)

router.route('/login')
    .get(authController.getLogin)
    .post(authController.postLogin)

router.get('/logout', isauth, authController.getLogout)

router.route('/signin')
    .get(authController.getSignin)
    .post(authController.postSignin)


module.exports = router;