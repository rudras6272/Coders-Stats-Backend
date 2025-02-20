const mongoose = require('mongoose') ; 

const UserSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    email : {
        type : String , 
        required : true , 
    },
    gfgUsername : {
        type : String , 
        required : true ,
    },
    codeChefUsername : {
        type : String , 
        required : true ,
    },
    leetCodeUsername : {
        type : String ,
        required : true ,
    },
})

const User = mongoose.model('User' , UserSchema) ; 
module.exports = User ; 