const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    category: String,
    wish: {
        type: Boolean,
        default: false
    },
    img: {
        type: String,
        default: 'default.jpg'
    }
})

module.exports = mongoose.model("Product", ProductSchema);
