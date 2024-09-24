import express from 'express';
import dotenv from 'dotenv';
import customers from './routes/customers.js';
import categories from './routes/categories.js'
// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/',customers);
app.use('/',categories);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})