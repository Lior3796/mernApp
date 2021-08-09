const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const studentSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    age:{
        type:Number,
        required:true

    }
})
module.exports = mongoose.model("student",studentSchema);