use mysql;
update user set authentication_string=password(''), plugin='mysql_native_password' where user='root';

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
    devoured boolean NOT NULL,
	PRIMARY KEY (id)
);