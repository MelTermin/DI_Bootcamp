// -- CREATE TABLE FirstTab (
//   --      id integer, 
//   --      name VARCHAR(10)
//   -- )
  
  
  
//   -- INSERT INTO FirstTab VALUES
//   -- (5,'Pawan'),
//   -- (6,'Sharlee'),
//   -- (7,'Krish'),
//   -- (NULL,'Avtaar')
  
//   --select * from FirstTab
//   -- CREATE TABLE second_tab (
//   --     id integer 
//   -- )
  
//   -- INSERT INTO second_tab VALUES
//   -- (5),
//   -- (NULL)
  
//   --select * from second_tab
  
//   --Q1;
  
//   --     SELECT COUNT(*) 
//   --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM second_tab WHERE id IS NULL )
//   --ANSWER: You cant use IN with null values
//   --Q2;
//   --     SELECT COUNT(*) 
//   --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM second_tab  WHERE id = 5 )
//   --ANSWER: We cannot use not in with null values because NULL is not a value, therefore we cannot compare it with any other values like number or string. We need to use IS/IS NOT NULL
  
//   --Q3;
//   --     SELECT COUNT(*) 
//   --     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM second_tab )
//     --ANSWER will be zero because of the above mentioned reason 
//   --Q4;
//   SELECT COUNT(*) 
//       FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM second_tab WHERE id IS NOT NULL )
  
  
  
  