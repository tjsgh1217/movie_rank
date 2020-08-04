const express = require('express')
const app = express()
const port = 3000

// Crawler
const movieCrawler = require('./crawler/movieCrawler');

// Model
const { Movie } = require('./models/Movie');

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seonho:a382214160@project.cas3u.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect...'))
    .catch(err => console.log(err))


app.get('/movie', (req, res) => {
    Movie.find({}, 
        function (err, data) {
            console.log("Data",data)
            const movies = data.map((item)=>{
                return {
                    title: item.title,
                    poster: item.poster
                }
            })
            res.json(movies)
        }
    );
}
)
app.get('/drama', (req, res) => {
    const data = [];
    res.json(data)
})

app.get('/update_movie', async (req, res) => {
    try {
        await movieCrawler();
        res.json({
            success: true,
        })
    }
    catch(e){
        res.json({
            success: false,
            errorMessage: e
        })

    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})