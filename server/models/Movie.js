const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        unique: 1
    },
    poster: {
        type: String
    },
    audience: {
        type: Number,
        type: String
    },
    country: {
        type: String
    },
    genre: {
        type: String,
        maxlength: 30
    },
    view_age: {
        type: Number,
        type: String,
        maxlength: 30
    },
    running_time: {
        type: Number,
        type: String,
        maxlength: 10
    },
    relese_date: {
        type: Number,
        type: String,
        maxlength: 20
    },
    actor: {
        type: String,
        maxlength: 30
    },
    rate: {
        type: Number,
        maxlength: 10
    },
    summary: {
        type: Number,
        type: String,
        maxlength: 300
    }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie } ;