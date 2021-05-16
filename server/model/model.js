const mongoose= require('mongoose');
const { string } = require('prop-types');


//Schema will allow us to specify the shape of our document and what it contains
var schema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    gender:String,
    status:String
})


const Userdb=mongoose.model('userdb',schema);

module.exports=Userdb;