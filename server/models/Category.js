const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category_id: {
      type: Number
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    subcategories: Array
})

module.exports = mongoose.model("Category", CategorySchema);
