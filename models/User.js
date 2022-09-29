const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId: {
        type: String,
        require: true
    },
    displayName: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    LastName: {
        type: String,
        require: true,
    },
    jobTitle: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    },
    signedInAt: {
        type: Date,
        default: Date.now,
    }
})
module.exports = new mongoose.model('User', UserSchema)