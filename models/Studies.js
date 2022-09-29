const mongoose = require('mongoose');

const StudiesSchema = new mongoose.Schema({
    studyName: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    doctorName: {
        type: String,
        require: true,
    },
    mainCoordinator: {
        type: String,
        require: true,
    },
    enrolledSubjects: {
        type: Number,
        require: true,
    }
})
module.exports = new mongoose.model('Studies', StudiesSchema)