import pool from "../model/db.js";
import multer from 'multer';
import path from 'path';
// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where images will be stored
    },
    filename: function (req, file, cb) {
        const originalName = file.originalname;
        const uniqueName = Date.now() + '-' + originalName;
        cb(null, uniqueName);
    }
});

 export const upload = multer({ storage: storage });

export const getImages=async(req,res)=>{
    try {
        const result = await pool.query('SELECT * FROM images',[]);
        const results = result.rows.length ? result.rows : [];
        res.status(200).json({message:'Data receive successfully',result:results})

        
    } catch (error) {
        res.status(500).json({message:error.message});
        
    }
}
export const createImages = async(req,res)=>{
    const { name, email } = req.body;
    const profileImage = req.file ? req.file.filename : null;
    console.log(req.file);
    try {
        const result = await pool.query('INSERT INTO images(name, email, profile_image) VALUES($1, $2, $3) RETURNING *',[name, email, profileImage]);
        res.status(201).json({message:'Data inserted successfully',result:result.rows});
       
    } catch (error) {
        res.status(500).json({message:error.message});
    }
 

}