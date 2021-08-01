// -- CREATE TABLE items (
//   -- 	product_id SERIAL PRIMARY KEY,
//   -- 	product_name VARCHAR(20) NOT NULL,
//   -- 	quantity SMALLINT NOT NULL
//   -- )
  
//   -- CREATE TABLE customers (
//   -- 	customer_id SERIAL PRIMARY KEY,
//   -- 	first_name VARCHAR(20) NOT NULL,
//   -- 	last_name  VARCHAR(20) NOT NULL
//   -- )
  
//   -- SELECT * FROM items
//   -- SELECT * FROM customers
  
//   -- INSERT INTO items (product_name, quantity)
//   -- VALUES
//   --    ('Samll Desk', 100),
//   --    ('Large Desk', 300),
//   --    ('Fan', 80);
     
//   --    SELECT * FROM items
  
//   -- INSERT INTO customers(first_name, last_name)
//   -- values 
//   -- 	('Greg', 'Jones'),
//   -- 	('Sandra', 'Jones'),
//   -- 	('Scott', 'Scott'),
//   -- 	('Trevor', 'Green'),
//   -- 	('Melaine', 'Johnson');
  
//   -- 	SELECT * FROM customers
    
//   -- 	DELETE FROM customers WHERE customer_id = 6;
    
//   -- 	SELECT * FROM customers;
    
//   -- 	DELETE FROM  customers
//   -- WHERE customer_id IN (6,7,8,9,10)
//   -- RETURNING *;
  
//   -- Use SQL to fetch the following data from the database:
//   -- 	SELECT * FROM items;
    
//   -- 	SELECT * FROM items WHERE quantity >80;
//   -- 	SELECT * FROM items WHERE quantity <300;
//   -- 	SELECT * FROM customers where last_name ='Smith'; --this will be empty
//   -- 	SELECT * FROM customers WHERE last_name ='Jones';
//   -- 	SELECT * FROM customers WHERE(first_name!= 'Scott');