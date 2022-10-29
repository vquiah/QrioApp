const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require('../controllers/dashboard');



//* Main Routes
// @desc dashboard
// @route GET /dashboard
router.get('/', dashboardController.getDashbaord)



// @desc create todo items
// @route POST /dashboard/createTodos
router.post('/createTodos', dashboardController.createTodos)
router.delete('/deleteTodos/:id', dashboardController.deleteTodos)


module.exports = router