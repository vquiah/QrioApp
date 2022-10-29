const Todos = require("../models/Todos");

module.exports = {
    getDashbaord: async (req, res) => {
      console.log(req.body)
      try {
        const todos = await Todos.find({user: req.user.id});
        res.render("dashboard.ejs", { todos: todos, user: req.user });
      } catch (err) {
        
      }
  
    },
    createTodos: async (req, res) => {
      try{
      await Todos.create({
        user: req.user.id,
        todoItem: req.body.todoItem,
        completed: false
      });
         console.log("todo item was added!");
         res.redirect("/dashboard");
      }catch (err) {
      console.log(err);
      }
     },
     deleteTodos: async(req, res)=>{
      try{
      const todo = await Todos.findById({ _id: req.params.id });
      await Todos.remove({ _id: req.params.id});
      console.log("Deleted todo");
      res.redirect("/dashboard");
    } catch (err) {
      res.redirect("/dashboard");
    }
  }


}