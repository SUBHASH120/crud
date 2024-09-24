import pool from "../model/db.js";
export const getAllCategories = async(req,res)=>{
   try {
    const result = await pool.query('SELECT * FROM categories',[]);
    res.status(200).json({message:'Categoris receive successfully',result:result.rows});
    
   } catch (error) {
    res.status(500).json({message:error.message});
   } 
}
export const getCategoriesById=async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await pool.query('SELECT * FROM categories WHERE category_id=$1',[id]);
        const results = result.rowCount > 0 ? result.rows[0]:[];
        res.status(200).json({message:'Category received successfully', result: results});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const createCategories = async(req,res)=>{
    const {category_name, description } = req.body;
    try {
        const result = await pool.query('INSERT INTO categories (category_name, description) VALUES($1, $2) RETURNING *',[category_name, description]);
        res.status(200).json({message:'Data inserted successfully', result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}
export const updateCategories = async(req,res)=>{
    const {category_name, description}=req.body;
    const {id}=req.params;
    try {
        const result = await pool.query('UPDATE categories SET category_name=$1, description = $2 WHERE category_id=$3',[category_name, description, id]);
        res.status(200).json({message:'Data updated successfully',result:result.rowCount})
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const deleteCategories = async(req,res)=>{
    const {id} = req.params;
    try {
        const result = await pool.query('DELETE FROM categories WHERE category_id=$1',[id]);
        res.status(200).json({message:'Data deleted successfully',result:result.rowCount});
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
