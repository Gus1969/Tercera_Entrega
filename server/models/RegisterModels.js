const mongoose = require('mongoose');
const registering = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirm: {
        type: String,
        required: true
    }, 
    // This date parameter is not visible in the front end  but tells us when a new user signsup
    date : {
        type: Date,
        required: Date.now

    }

})
module.exports = mongoose.model('mytable', registering)