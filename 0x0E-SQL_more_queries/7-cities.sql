-- create database hbtn_0d_usa table cities
-- cities id INT unique, auto generated, cant be null primary key
-- state_id int cant be null and must be a foreign key that references id of the states table
-- name varchar(256) cant be null
-- if already exists, should not throw error

CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.cities (id INT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, 
state_id INT NOT NULL, 
name VARCHAR(256) NOT NULL,
FOREIGN KEY (state_id) REFERENCES hbtn_0d_usa.states(id));