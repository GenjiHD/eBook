const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://localhost:27017/eBooks')

const BooksSchema = new mongoose.Schema({
    Author: [Array],
    ItemCode: String,
    ISBN: String,
    Name: String,
    Genres: [Array],
    Editorial: String,
    Binding: String,
    Typeofbook: String
})

const BooksModel = mongoose.model("Books", BooksSchema)

app.get("/getBooks", (req, res) => {
    BooksModel.find({}).then(function(Books){
        res.json(Books)
    }).catch(function(err){
        console.log(err)
    })
})

app.listen(3000, () => {
    console.log('Server is running')
})