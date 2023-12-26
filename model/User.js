const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: String,
        Admin: String,
        SuperAdmin: String
    },
    password: {
        type: String,
        required: true
    },
    organization: {
        type: String
    },
     isActive: {
        type: Boolean,
        default: true
    }, 
    refreshToken: [String]
});

module.exports = mongoose.model('User', userSchema);