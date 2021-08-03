// --DAY3  Daily Challenge

// -- create table artists(
// -- 	artist_id serial primary key,
// -- 	song_name text,
// -- 	artist_name text,
// -- 	nationality text
// -- );

// --select * from artists

// -- insert into artists (song_name, artist_name, nationality)
// -- values ('Cheap Thrills', 'Sia', 'Australian'),
// -- 		('The Pheonix', 'Fall Out Boy', 'American'),
// -- 		('Are We Alive', 'Augustines,', 'English');

// -- create table orders (
// -- 	order_id serial primary key,
// -- 	artist_id int not null,
// -- 	total int not null,
// -- 	store_id int not null,
// -- 	foreign key (artist_id) references artists(artist_id) on delete cascade
	
// -- )

// -- insert into orders (artist_id, total, store_id)
// -- values (1, 349, 1), (2, 220, 2), (3, 450, 3)

// --select * from orders

// -- create table stores (
// -- 	store_id serial primary key,
// -- 	name text not null,
// -- 	country text
// -- )

// --select * from stores

// -- insert into stores (name, country)
// -- values ('Store 1', 'Turkey'), ('Store 2', 'United States'), ('Store 3', 'Israel')

// -- select * from artists
// -- inner join orders 
// -- on artists.artist_id = orders.artist_id;

// -- select * from artists
// -- left join stores 
// -- on artists.artist_name = stores.name 

// -- select * from artists
// -- full join stores 
// -- on artists.artist_name = stores.name 