-- script creates database hbtn_0d_usa and table states
-- states id INT, cant be null, is primary key, unique, auto generated
-- name varchar(256) cant be null
-- if exists, should not throw any error

CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS hbtn_0d_usa.states (id INT UNIQUE NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(256) NOT NULL);