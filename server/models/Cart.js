const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            productsId: String,
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
})

module.exports = mongoose.model("Cart", schema);