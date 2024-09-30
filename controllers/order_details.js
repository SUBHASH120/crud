import pool from "../model/db.js";
export const getAllOrderDetails = async(req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM order_details',[]);
        const results = result.rows.length ? result.rows:[];
        res.status(200).json({message:'Data received successfully', result:results})
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}
export const getOrderDetailsById = async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * FROM order_details WHERE order_detail_id=$1',[id]);
        const results = result.rows.length ? result.rows[0] : [];
        res.status(200).json({message: 'Data received sussessfully', result: results});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const createOrderDetails = async(req,res)=>{
    const { order_id, product_id, quantity } = req.body;
    try {
        const result = await pool.query('INSERT INTO order_details(order_id, product_id, quantity) VALUES($1, $2, $3)',[order_id, product_id, quantity]);
            res.status(201).json({message: 'Data inserted successfully',result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateOrderDetails = async(req,res)=>{
    const { order_id, product_id, quantity }= req.body;
    const { id } = req.params;
    try {
        const result = await pool.query('UPDATE order_details SET order_id=$1, product_id=$2, quantity=$3 WHERE order_detail_id=$4',[order_id, product_id, quantity, id]);
        res.status(200).json({message: 'Data updated successfully', result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const deleteOrderDetails = async(req,res)=>{
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM order_details WHERE order_detail_id=$1',[id]);
        res.status(200).json({message: 'Data deleted successfully'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}