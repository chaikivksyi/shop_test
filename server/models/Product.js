const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    price: Number,
    category: Number,
    img: 'default.jpg'
})

module.exports = mongoose.model("Product", schema);