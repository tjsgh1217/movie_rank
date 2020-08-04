const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        unique: 1
    },
    poster: {
        type: String,
    }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {Movie};