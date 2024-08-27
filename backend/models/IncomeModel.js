const mongoose = require('mongoose');
//here we are creating a schema from mongoose to specify how the data should be i.e, the structural representation..
const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
        maxLength: 50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true,
    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        trim:true,
    },
    category:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxLength:25,
    },
},{timestamps:true});//timestamps here mean for every everytime a schema is called the timestamps are created for them..

module.exports = mongoose.model('IncomeSchema',schema);