import pool from "../model/db.js";

export const getAllCustomers = async(req, res)=>{
    try {
        const result = await pool.query('SELECT * FROM customers',[]);
        res.status(200).json({message:'Data receive successfully',results: result.rows});
        
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const getCustomerById = async(req,res)=>{
    const { id }= req.params;
    try {
        const result = await pool.query('SELECT * FROM customers WHERE customer_id = $1',[id])
        const results = result.rowCount > 0 ? result.rows[0]:[];
        res.status(200).json({message:'Data receive successfully', result:results})
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }

}
export const createCustomers = async(req,res)=>{
    let {customer_name, contact_name, address, city, postal_code, country} = req.body;
    try {
        const result = await pool.query("INSERT INTO customers (customer_name, contact_name, address, city, postal_code, country) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",[customer_name, contact_name, address, city, postal_code, country])
        res.status(200).json({message:'Data inserted successfully',result:result.rowCount});
        
    } catch (error) {
        res.status(200).json({message:error.message});
        
    }

}
export const updateCustomer = async(req,res)=>{
    let {customer_name, contact_name, address, city, postal_code, country} = req.body;
    const {id} = req.params;
    console.log(req.params);
    try {
        const result = await pool.query('UPDATE customers SET customer_name=$1, contact_name=$2, address=$3, city=$4, postal_code=$5, country=$6 WHERE customer_id = $7',[customer_name, contact_name, address, city, postal_code, country, id]);
        res.status(200).json({message:"Data updated successfully",result: result}); 
        
    } catch (error) {
        res.status(500).json({message:error.message}); 
    }
    
}
export const deleteCustomer = async(req, res)=>{
    const {id}= req.params;
    try {
        const result = await pool.query('DELETE FROM customers WHERE customer_id=$1',[id]);
        res.status(200).json({message:'Data deleted successfully',result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}