const mongoose = require('mongoose');

const SubjectsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    subjPic: {
        type: String,
        require: false
    },
    subjFullName: {
        type: String,
        require: true
    },
    subjStudyNum: {
        type: Number,
        require: false,
    },
    gender:{
        type: String,
        require: false,
    },
    dob: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    telephone: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    studyIn: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true,
    },
    subjHomeAdress: {
        type: String,
        require: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    }
})
module.exports = new mongoose.model('Subjects', SubjectsSchema)