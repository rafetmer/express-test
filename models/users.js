const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        index:true,
    },
    password:{
        type:String,
        required:true,    
    },

});

//Export the model
module.exports = mongoose.model('User', userSchema);