const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const dashboardController = require('../controllers/dashboard');
const todosController = require('../controllers/todos');


//* Main Routes
// @desc dashboard
// @route GET /dashboard
router.get('/', dashboardController.getDashbaord)

// @desc create todo items
// @route POST /todos
router.post('/createTodos', todosController.createTodos)

module.exports = router