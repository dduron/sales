CREATE DATABASE dev

CREATE TABLE clients (
	id serial primary key,
	name varchar(255) not null,
	email varchar (255) not null
);

CREATE TABLE products (
	id serial primary key,
	name varchar(255) not null,
	price numeric(10,2) not null,
	stock integer not null
);

CREATE TABLE sales (
	id serial primary key,
	date date not null,
	clientid integer references clients(id),
	productid integer references products(id),
	quantity integer not null,
	total numeric(10,2) not null
);