import pool from './db';
import {
     employees,
     employeesSelect, 
     employeesRename,
     deleteTable
    } from './queries'
async function createTable() {
  const createTableSQL = deleteTable;

  try {
    const [result] = await pool.query(createTableSQL);
    console.log('RESULT',result)
   // console.log('Table created successfully:', result);
  } catch (err) {
    console.error('Error creating table:', err.message);
  }
}

createTable().then(() => {
  console.log('Done');
  process.exit(0);
});
