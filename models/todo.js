const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:Date
    },
    sts:{
        type:String,
        required:true
    }    
},{
    timestamps:true
});

const Todo = mongoose.model('TodoList',todoSchema);

module.exports = Todo;