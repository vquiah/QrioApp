const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const homeController = require('../controllers/home');
const loginController = require('../controllers/login');


//* Main Routes
// @desc Home
// @route GET /
router.get('/', homeController.getHomePage)
// @desc Login
// @route GET /
router.get('/login', loginController.getloginPage)


module.exports = router