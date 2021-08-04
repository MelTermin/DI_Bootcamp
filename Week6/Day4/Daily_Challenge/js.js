// --Daily Challenge--

// -- create table items (
// -- 	item_id serial primary key,
// -- 	name varchar(255) not null,
// -- 	price int not null
// -- )

// -- insert into items (name, price)
// -- values ('sun glasses', 20), ('socks', 5), ('tshirt', 40)

// -- create table order_exercise (
// -- 	order_id int not null,
// -- 	item_id int references items(item_id) on delete cascade
// -- )

// -- insert into order_exercise (order_id, item_id)
// -- values (1, 2), (1, 2), (1, 3), (1, 1),
// -- (2, 1), (2, 3), (3, 1)

// --select * from items
// --select * from order_exercise

// -- select sum(price) total from order_exercise
// -- inner join items on order_exercise.item_id = items.item_id 
// -- where order_id = 1