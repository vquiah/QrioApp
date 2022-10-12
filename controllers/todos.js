const Todos = require('../models/Todos');

module.exports = {
  createTodos: async (req, res) => {
    try{
    await Todos.create(
      console.log(req.body), {
      user: req.params.id,
      todoItem: req.body.todoItem,
      completed: false
    });
       console.log("todo item was added!");
       res.render("/dashboard"+ req.params.id);
    }catch (err) {
    console.log(err);
    }
   },
}