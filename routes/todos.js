const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const todosController = require('../controllers/todos');




//* Main Routes
// @desc post individual subject page
// @route POST /todos/createTodo
router.post('/createTodos', todosController.createTodos);


module.exports = router 