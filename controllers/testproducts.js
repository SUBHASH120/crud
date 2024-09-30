import pool from "../model/db.js";
export const getAllTestProducts = async(req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM testproducts');
        const results = result.rows.length ? result.rows : [];
        res.status(200).json({message: 'Data received successfully', result: results})
        
    } catch (error) {
        res.status(200).json({message: error.message});
        
    }
}
export const getTestProductsById = async(req,res)=>{
    const { id } = req.params
    try {
        const result = await pool.query('SELECT * FROM testproducts WHERE testproduct_id=$1',[id]);
        const results = result.rows.length ? result.rows : [];
        res.status(200).json({message: 'Data received successfully', result: results})
        
    } catch (error) {
        res.status(200).json({message: error.message});
        
    }
}
export const createTestProducts = async(req,res)=>{
    const { product_name, category_id } = req.body;
    try {
        const result = await pool.query('INSERT INTO testproducts(product_name, category_id) VALUES($1, $2)',[product_name, category_id]);
        res.status(201).json({message: 'Data inserted successfully',result: result.rowCount})
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}
export const updateTestProducts = async(req,res)=>{
    const { product_name, category_id } = req.body;
    const { id } = req.params;
    try {
        const result = await pool.query('UPDATE testproducts SET product_name=$1, category_id=$2 WHERE testproduct_id=$3',[product_name, category_id, id]);
        res.status(200).json({message: 'Data updated successfully',result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}
export const deleteTestProducts = async(req,res)=>{
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM testproducts WHERE testproduct_id=$1',[id]);
        res.status(200).json({message: 'Data deleted successfully'})
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

