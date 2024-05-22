
// working with tables and columns @@@@@@@@
export const employees: string = `CREATE TABLE employees (
        employee_id INT,
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        hourly_pay DECIMAL(5,2),
        hire_date DATE
     );
`
// * means all, and in this case it's all columns and all rows
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
export const alterTableType: string = `
  ALTER TABLE employees CHANGE COLUMN phone_number email varchar(15);
`

// alter datatype for column
export const alterDataType: string = `
  ALTER TABLE employees 
  MODIFY COLUMN email VARCHAR(100);
` 

export const changeColumn : string = `
   ALTER TABLE employees
   MODIFY email VARCHAR(100)
   AFTER last_name;
`

export const changeColumnFirst : string = `
   ALTER TABLE employees 
   MODIFY email VARCHAR(100)
   FIRST
`

//delete a whole column
export const deleteColumn: string = `
   ALTER TABLE employees 
   DROP COLUMN email;
`

export const insertSingleValueToRow: string = `
  INSERT INTO employees 
  VALUES (1,"Tom", "Ford", 25.50, "2024-01-17");
` 
export const insertMultipleValuesToRow: string = `
     INSERT INTO employees 
     VALUES (2,"Jane", "Ford", 25.50, "2024-01-17"),
     (3,"Kerry", "Jolly", 25.50, "2024-01-17"),
     (4,"Adam", "Polly", 25.50, "2024-01-17"),
     (5,"John", "Muhsen", 25.50, "2024-01-17"),
     (6,"Kerry", "Yon", 25.50, "2024-01-17");
`
export const insertMultipleValuesWithLimitedRows: string = `
   INSERT INTO employees (employee_id, first_name, last_name)
   VALUES (6, "Sheldon", "Plankton");
`
// selected columns, you change the order of the columns too 
export const selectedColumns: string = `
  SELECT first_name, last_name 
  FROM employees;
`




