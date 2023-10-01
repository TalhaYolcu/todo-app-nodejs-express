//import mongoose
const mongoose = require('mongoose');

//set the Task schema and data types
const TaskSchema = new mongoose.Schema({
    //set validation options
    name : {
        type : String,
        required:[true,'must provide name'],
        trim:true,
        maxlength : [20,'name cannot be more than 20 characters']
    },
    completed : {
        type : Boolean,
        default : false
    }
})

//export the model , set its name as Task, use it in controller
module.exports = mongoose.model('Task',TaskSchema)

