const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PersonSchema = new Schema ({
    std_id: {
        type: Number,
        require: true
    },
    std_fullname: {
        type: String,
        require: true
    },
    std_login: {
        type: String,
        require: true
    },
    std_pswd: {
        type: String,
        require: true
    }
})

mongoose.model('persons', PersonSchema)