const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    short_description: String,
    author: String,
    photo: String,
    price: String
})

module.exports = mongoose.model('Book', bookSchema);