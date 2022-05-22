var mongoose = require('mongoose');
var childSchema = new mongoose.Schema({
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
    }
    
    
});

const Child = mongoose.model('child', childSchema);
module.exports = Child;