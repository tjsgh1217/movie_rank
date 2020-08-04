const mongoose = require("mongoose");


const movieSchema = mongoose.Schema({
    title: {
        type: String,
        maxlength: 50,
        unique: 1
    },
    poster: {
        type: String,
    },
    country: {
        type: String,
    },
    genre: {
        type: String,
        maxlength: 30
    },
    view_age: {
        type: Number,
        maxlength: 30
    },
    running_time: {
        type: Number,
        maxlength: 10
    },
    relese_date: {
        type: Number,
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
        type: String,
        maxlength: 100
    }
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = { Movie };