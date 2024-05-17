export const employees: string = `CREATE TABLE employees (
        employee_id INT,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        hourly_pay DECIMAL(5,2),
        hire_date DATE
     );
`
// * means all
export const employeesSelect: string = `
   SELECT * FROM employees;
` 
export const employeesRename: string = `
  RENAME TABLE workers TO employees;
`

// delete table
export const deleteTable:string = `
   DROP TABLE users
` 

//add to able 
export const addToTable: string = `
   ALTER TABLE employees 
   ADD phone_number VARCHAR(15);
`

// alter phone number to email 
export const alterTable: string = `
  ALTER TABLE employees CHANGE COLUMN phone_number email varchar(15);
`

