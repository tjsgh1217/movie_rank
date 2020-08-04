const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seonho:a382214160@project.cas3u.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connect...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('으익 이이깅 익')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})