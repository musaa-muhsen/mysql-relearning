import pool from './db';
import {
     employees,
     employeesSelect, 
     employeesRename,
     deleteTable,
     addToTable,
     alterTableType,
     alterDataType,
     changeColumn,
     changeColumnFirst,
     deleteColumn,
     insertSingleValueToRow,
     insertMultipleValuesToRow,
     insertMultipleValuesWithLimitedRows,
     selectedColumns
    } from './queries';


async function createTable() {
  
  try {
    const [result] = await pool.query(selectedColumns);
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
