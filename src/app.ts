import express from 'express';
import pool from './db';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM your_table'); // Replace 'your_table' with your table name
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
