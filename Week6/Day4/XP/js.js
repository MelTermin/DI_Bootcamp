// -- Basic Select Statement
// -- Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.
// --answer;
// --select first_name as "First Name" , last_name as "Last Name" from employees

// --Write a query to get unique departments ID from the employee table (ie. without duplicates).
// --answer;
// --answer;
// --select distinct(department_id) from employees

// --Write a query to get the details of all employees from the employee table, do so in descending order by first name.
// --answer;
// --select * from employees order by last_name desc

// --Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
// --answer;
// --select first_name,last_name, salary, salary *.15 as PF from employees

// --Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
// --answer;
// --select employee_id, first_name, last_name, salary from employees order by salary desc;


// --Write a query to get the total sum of all salaries paid to the employees.
// --answer;
// --select SUM(salary) from employees

// --Write a query to get the maximum and minimum salaries paid to the employees.
// --answer;
// --select MIN(salary), MAX(salary) from employees

// --Write a query to get the average salary paid to the employees.
// --answer;
// --select Round(AVG(salary),2) from employees


// --Write a query to get the number of employees working in the company.
// --answer;
// --select count(employee_id) from employees

// --Write a query to get all the first names from the employees table in upper case.
// --answer;
// --select upper(first_name) from employees

// --Write a query to get the first three characters of each first name of all the employees in the employees table.
// --answer;
// --select substring(first_name,1,3) from employees

// --Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
// --answer;
// --select concat( first_name, ' ', last_name) AS "Full Name" from employees

// --Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
// --answer;
// -- SELECT
// -- first_name || ' ' || last_name AS "Full Name",
// -- LENGTH (first_name || ' ' || last_name) len
// -- FROM employees

// --Write a query to check whether the first_name column of the employees table contains any numbers.
// --answer;
// --SELECT *  FROM employees WHERE  first_name REGEXP  '[0-9]';

// --Write a query to select the first ten records from a table
// --select * from employees limit 10

// --Restricting And Sorting
// --Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
// --answer;
// --select first_name,last_name, salary from employees where salary between 10000 and 15000

// --Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
// --answer;
// --select first_name,last_name, hire_date from employees where hire_date between '1987-01-01' and '1987-12-31'

// --Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
// --answer;
// --select first_name from employees where first_name like '%c%' and first_name like '%e%'

// --Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
// --answer;
// --select * from employees
// -- select first_name,last_name,department_name,salary from employees
// -- inner join departments
// -- on employees.department_id=departments.department_id
// -- where department_name !='Shipping' AND department_name !='IT'
// -- AND salary NOT IN (4500,10000, 15000);

// --Write a query to display the last names of all employees whose last name contains exactly six characters.
// --answer;
// --SELECT last_name FROM employees WHERE last_name LIKE '______';

// --Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
// --answer;
// --SELECT last_name FROM employees WHERE last_name LIKE '__e%';

// --Write a query to display the jobs/designations available in the employees table.
// --answer;
// --SELECT DISTINCT job_id  FROM employees;

// --answer;
// -- SELECT * 
// -- FROM employees 
// -- WHERE last_name IN('Jones', 'Blake', 'Scott', 'King', 'Ford');