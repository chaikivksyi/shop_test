const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    userId: {type: String, required: true},
    products: [
        {
            productsId: String,
            quantity: {
                type: Number,
                default: 1
            },
            amount: {
                type: Number,
                required: true
            },
            address: Object,
            status: {
                type: String,
                default: 'pending'
            }
        }
    ]
})

module.exports = mongoose.model("Order", schema);