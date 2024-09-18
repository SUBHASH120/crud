import express from 'express';
import customers from './routes/customers.js';
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/',customers);

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})