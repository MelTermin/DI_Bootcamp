// --Exercise 2/XP/Day3

// --select * from language

// --Q1
// -- update language
// -- set name= 'Turkish'
// -- where language_id= 6;


// -- update language
// -- set name= 'Russian'
// -- where language_id= 4;

// --Q2
// --The foreign key in the customer table is address_id is the foreign key. We need to use subqueries to insert row in the table likely using full,left, right or inner joins

// --Q3 when you drop the table it will be deleted

// --Q4

// --select * from film

// -- select * from rental where return_date IS NULL

// -- Q5
// --select distinct film_id, title, description, rental_rate, return_date from film 
// -- inner join rental 
// -- on film_id = film.film_id 
// -- where return_date is null 
// -- order by rental_rate 
// -- desc limit 30

// --Q6
// --SELECT description FROM FILM where description like '%Sumo%'
// --SELECT * FROM ACTOR 


// -- select * from actor 
// -- inner join film_actor on actor.actor_id = film_actor.actor_id
// -- inner join film on film.film_id = film_actor.film_id where first_name = 'Penelope' and last_name = 'Monroe'
// -- and film.description like '%Sumo%'



// -- select * from category 
// -- inner join film_category 
// -- on category.category_id = film_category.category_id
// -- inner join film 
// -- on film.film_id = film_category.film_id
// -- where film_category.category_id = 6 and film.rating = 'R' and length < 60