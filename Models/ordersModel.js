const mongoose = require('mongoose');
const OrderProduct = require('./orderProductModel');

const orderSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    order: [{ type: mongoose.Schema.Types.ObjectId, ref: OrderProduct }],
    status1: {type: String, default: 'Pending'}
},
    { timestamp: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;