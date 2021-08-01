// -- CREATE TABLE students(
//   -- 	id SERIAL PRIMARY KEY,
//   -- 	last_name VARCHAR(20),
//   -- 	first_name VARCHAR(20),
//   -- 	birth_date DATE
//   -- )
  
  
  
//   -- INSERT INTO students (first_name, last_name, birth_date)
//   -- VALUES
   
//   --   ('Yoan', 'Cohen', '2010-12-03'),
//   -- 	('Lea', 'Benichou','1987-07-27'),
//   -- 	('Amelia','Dux', '1996-04-07'),
//   -- 	('David', 'Grez', '2003-06-14'),
//   -- 	('Omer', 'Simpson', '1980-10-03');
  
//   --Exercises--
//   -- 	SELECT * FROM students
//   -- 	SELECT first_name, last_name FROM students
//   -- 	SELECT first_name, last_name FROM students where id=2;
//   -- 	SELECT first_name, last_name FROM students WHERE first_name = 'Marc' and last_name = 'Benichou';
//   -- 	SELECT * FROM students where first_name = 'Marc' OR last_name = 'Benichou';
//   -- 	SELECT * FROM students where first_name LIKE '%a%';
//   -- 	SELECT * FROM students where first_name LIKE 'A%';
//   -- 	SELECT * FROM students where first_name LIKE '%a';
//   -- 	SELECT * FROM students where first_name LIKE '_a%';
//   -- 	SELECT * FROM students where id NOT IN (1,3) ;
//   -- 	SELECT * FROM students where birth_date >= '2000-01-01'