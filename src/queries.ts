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


