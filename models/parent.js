var mongoose = require('mongoose');
var child = require('./child');

var parentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        min:5,
        max:50
    },
    username: {
        type:String,
        unique:true,
        required:true,
        min:5,
        max:255
    },
    password:{
        type:String,
        required:true,
        min:5,
        max:1024
    },
    children:[{ type: mongoose.Types.ObjectId, ref: 'child' }]
    
});

const Parent = mongoose.model('parent', parentSchema);
module.exports = Parent;