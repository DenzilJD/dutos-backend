const mongoose = require('mongoose');

const orderProductSchema = mongoose.Schema({
    product: { type: String, required: true },
    quantity: { type: String, required: true }
},
    { timestamp: true }
);

const OrderProduct = mongoose.model("OrderProduct", orderProductSchema);
module.exports = OrderProduct;