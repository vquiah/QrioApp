const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    todoItem: {
        type:String,
        require: true,
    },
    completed: {
        type:Boolean,
        require: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})

module.exports = new mongoose.model('Todos', TodosSchema)