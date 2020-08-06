const express = require('express')
const app = express()
const port = 5000
// info
const movieInfo = require('./data/movieInfo');
// Model
const { Movie } = require('./models/Movie');




const mongoose = require('mongoose');
const { get } = require('request-promise');
mongoose.connect('mongodb+srv://seonho:a382214160@project.cas3u.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect...'))
    .catch(err => console.log(err))
    


app.get('/movie', (req, res) => {
    Movie.find({},
        function (err, data) {
            console.log("Data", data)
            const movies = data.map((item) => {
                return {
                    title: item.title,
                    poster: item.poster,
                    audience: item.audience,
                    country: item.country,
                    genre: item.genre,
                    view_age: item.view_age,
                    running_time: item.running_time,
                    relese_date: item.relese_date,
                    actor: item.actor,
                    rate: item.rate,
                    summary: item.summary
                }
            })
            res.json(movies)
        }
    );
})


app.get('/api/hello', (req, res) => {
    res.send(안녕)
})


app.get('/update_movie', async (req, res) => {
    try {
        await movieInfo();
        res.json({
            success: true,
        })
    }
    catch (e) {
        res.json({
            success: false,
            errorMessage: e
        })

    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})