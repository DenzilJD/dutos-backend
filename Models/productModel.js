const mongoose = require('mongoose');
const Category = require('./categoryModel');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: Category }],
    quantity: { type: String, required: true }
},
    { timestamp: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;