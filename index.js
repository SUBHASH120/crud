import express from 'express';
import dotenv from 'dotenv';
import customers from './routes/customers.js';
import categories from './routes/categories.js'
import products from './routes/products.js';
import orders from './routes/orders.js';
import order_details from './routes/order_details.js';
import testproducts from './routes/testproducts.js';
// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/',customers);
app.use('/',categories);
app.use('/',products);
app.use('/',orders);
app.use('/',order_details);
app.use('/',testproducts);

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})