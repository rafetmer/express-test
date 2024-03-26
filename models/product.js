const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        index:true,
    },
    price:{
        type:Number,
    },
    category:{
        type:String,

    }
});

//Export the model
module.exports = mongoose.model('Product', productSchema);