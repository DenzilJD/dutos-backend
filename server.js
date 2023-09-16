const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require("./Config/db");
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const orderRoutes = require('./Routes/orderRoutes');

const port = process.env.PORT || 5000;
dotenv.config();
connectDB();
app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/order', orderRoutes);
app.get('/api', (req, res) => {
    res.send("API is running.");
    console.log("API is running.");
});
app.listen(port, console.log(`Server is running at port ${port}`));