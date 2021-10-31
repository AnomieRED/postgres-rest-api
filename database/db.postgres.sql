drop table if exists person
create table person(
	id serial primary key,
	name varchar(100) not null,
	surname varchar(100) not null
);

drop table if exists post
create table post(
	id serial primary key,
	title varchar(255) not null,
	content varchar(255) not null,
	person_id int,
	foreign key(person_id) references person(id)
);	