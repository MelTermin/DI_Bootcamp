// -- SELECT * FROM items order by price asc;
// -- SELECT * FROM items where price>=80
// -- order by price desc;

// -- SELECT first_name, last_name FROM customers order by first_name, last_name desc limit 3
// -- SELECT last_name from customers order by last_name asc;


// -- CREATE TABLE purchases (
// --     customer_id INTEGER REFERENCES customers(customer_id),
// --     item_id INTEGER REFERENCES items(product_id)
// -- )

// -- INSERT INTO purchases (customer_id)
// -- VALUES (2);



// -- INSERT INTO purchases
// -- VALUES
// --     (1, 1),
// --     (1, 2),
// --     (3, 3),
// --     (4, 2),
// --     (5, 1);

// -- select * from purchases;



// -- SELECT  *
// -- FROM purchases
// -- WHERE customer_id = 4
	

//Part 2//

// -- select * from customer
// -- select  first_name || ' ' || last_name AS full_name from customer
// -- select DISTINCT create_date from customer
// -- SELECT * FROM CUSTOMER ORDER BY first_name ASC
// -- select film_id, title,description, release_year,rental_rate from film order by rental_rate asc
// -- select address,phone from address where district = 'Texas'
// -- select * from film where film_id= 15 or film_id= 150
// -- select title from film where title='Holiday Games'
// -- select title, MIN(rental_rate) from film group by title limit 10

// -- select customer.customer_id, amount, payment_date from payment
// -- inner join customer
// -- on payment.customer_id=customer.customer_id
// -- order by customer.customer_id  asc