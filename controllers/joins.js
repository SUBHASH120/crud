import pool from "../model/db.js";

export const getJoins = async (req, res) => {
  try {
    const item = `SELECT COUNT(customer_id) AS CNT, country FROM customers GROUP BY CNT;`;
    const result = await pool.query(item, []);
    const results = result.rows.length ? result.rows : [];
    res
      .status(200)
      .json({ message: "Data received successfully", result: results });
  } catch (error) {
    res.result(500).json({ message: error.message });
  }
};
export const createJoins = async (req, res) => {
  try {
  } catch (error) {}
};
