import pool from "../model/db.js";

export const getAllOrders = async(req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM orders',[]);
        const results = result.rows.length ?result.rows:[]
        res.status(200).json({message:'Data received successfully',result:results})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getOrdersById = async(req,res)=>{
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM orders WHERE order_id=$1',[id]);
        const results = result.rows.length ? result.rows[0] : [];
        res.status(200).json({message:'Data received successfully', result: results})
        
    } catch (error) {
        res.status(200).json({message: error.message}); 
    }
}
export const createOrders = async(req,res)=>{
    const { customer_id, order_date}= req.body;
    try {
        const result = await pool.query('INSERT INTO orders(customer_id, order_date) VALUES($1, $2)',[customer_id, order_date]);
        res.status(201).json({message:'Data created successfully', result: result.rowCount});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
   
}
export const updateOrders = async(req, res) => {
    const { customer_id, order_date } = req.body;
    const { id } = req.params;
    try {
        const result = await pool.query('UPDATE orders SET customer_id=$1, order_date=$2 WHERE order_id=$3',[customer_id, order_date, id]);
        res.status(200).json({message: 'Data updated successfully',result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
        
}
export const deleteOrders = async(req, res)=>{
    const {id} = req.params;
    try {
        const result = await pool.query('DELETE FROM orders WHERE order_id=$1',[id]);
        res.status(200).json({message:'Data deleted successfully'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
