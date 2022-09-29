const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const homeController = require('../controllers/home');
const loginController = require('../controllers/login');
const dashboardController = require('../controllers/dashboard');
// const SubjectsController = require('../controllers/Subjects');
// const StudiesController = require('../controllers/Studies');

//* Main Routes
// @desc Home
// @route GET /
router.get('/', homeController.getHomePage)
// @desc Login
// @route GET /
router.get('/login', loginController.getloginPage)

// @desc dashboard
// @route GET /dashboard
router.get('/dashboard',ensureAuth, dashboardController.getDashbaord)
router.get('/dashboard',ensureAuth, dashboardController.getStudies)

module.exports = router