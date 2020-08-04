const mongoose = require("mongoose");


const dramaSchema =  mongoose.Schema({

});




const Drama = mongoose.model("Drama", dramaSchema);

module.exports = { Drama };
