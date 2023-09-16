const asyncHandler = require('express-async-handler');
const Product = require('../Models/productModel');
const Category = require('../Models/categoryModel');

const addOrder = asyncHandler(async (req, res) => {
    const { name, email, address, phone, order } = req.body;
    try {
        const orders = await Order.create({ name, email, address, phone, order, status1 });
        if (orders) {
            console.log("Order Placed");
            res.send({});
        }
    }
    catch (error) {
        res.status(400);
        throw new Error("Could not place order");
    }
});

const updateOrder = asyncHandler(async (req, res) => {
    const { _id, status1 } = req.body;
    try {
        const orders = await Product.findByIdAndUpdate(_id, {
            status1: status1
        });
        if (orders) {
            console.log("Updated");
            res.send({});
        }
    }
    catch (error) {
        res.send(error);
    }
});

const allOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

module.exports = { addOrder, allOrder, updateOrder };