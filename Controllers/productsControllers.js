const asyncHandler = require('express-async-handler');
const Product = require('../Models/productModel');
const Category = require('../Models/categoryModel');

const addProducts = asyncHandler(async (req, res) => {
    const { name, price, categories, quantity } = req.body;
    const productExists = await Product.findOne({ name,price,categories,quantity });
    if (productExists) {
        res.status(400).send({
            message: "Product already exists!"
        });
        throw new Error("Product already exists!");
    }
    try {
        const product = await Product.create({ name: name, price: price, categories: categories, quantity: quantity });
        if (product) {
            console.log("Added Product");
            res.send({});
        }
    }
    catch (error) {
        res.status(400);
        throw new Error("Could not add Product");
    }
});

const updateProducts = asyncHandler(async (req, res) => {
    const { _id, quantity } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(_id, {
            quantity: quantity
        });
        if (product) {
            console.log("Updated");
            res.send({});
        }
    }
    catch (error) {
        res.send(error);
    }
});

const allProducts = asyncHandler(async (req, res) => {
    const products = await Product.find().populate("categories","name");
    res.send(products);
});

const addCategory = asyncHandler(async (req, res) => {
    const {name} = req.body;
    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
        res.status(400).send({
            message: "Category already exists!"
        });
        throw new Error("Category already exists!");
    }
    try {
        const category = await Category.create({ name: name });
        if (category) {
            console.log("Added Category");
            res.send({});
        }
    }
    catch (error) {
        res.status(400);
        throw new Error("Registration failed!");
    }
});

const allCategory = asyncHandler(async (req, res) => {
    const categories = await Category.find();
    res.send(categories);
});

module.exports = { addProducts, allProducts, updateProducts, addCategory, allCategory };