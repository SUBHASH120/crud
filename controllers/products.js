import pool from "../model/db.js";
export const getAllProducts = async(req, res)=>{
    try {
        const result = await pool.query('SELECT * FROM products',[]);
        res.status(200).json({message:'Products receive successfully',result: result.rows});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const getProductsById = async (req,res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM products WHERE product_id=$1',[id]);
        const results = result.rowCount > 0 ? result.rows[0] : [];
        res.status(200).json({message: 'Product receive successfully', result: results});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const createProducts = async (req,res) => {
    const {product_name, category_id, unit, price } = req.body;
    console.log(req.body);
    try {
        const result = await pool.query('INSERT INTO products(product_name, category_id, unit, price) VALUES($1, $2, $3, $4)',[product_name, category_id, unit, price]);
        res.status(201).json({message: 'Product insert successfully', result: result.rowCount});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
export const updateProducts = async(req,res)=>{
    const {product_name, category_id, unit, price } = req.body;
    const {id } = req.params;
    try {
        const result = await pool.query('UPDATE products SET product_name=$1, category_id=$2, unit=$3, price=$4 WHERE product_id=$5',[product_name, category_id, unit, price, id]);
        res.status(200).json({message: 'Data updated successfully', result: result.rowCount});
        
    } catch (error) {
        res.status(200).json({message: error.message});
        
    }
}
export const deleteProducts = async(req, res)=>{
    const {id}=req.params;
    try {
        const result = await pool.query('DELETE FROM products WHERE product_id=$1',[id]);
        res.status(200).json({message: 'Data deleted successfully'});
        
    } catch (error) {
        res.status(500).json({message: 'Data deleted successfully'});
    }
}