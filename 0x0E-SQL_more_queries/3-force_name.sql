-- a script that creates a table force_name 
-- force name id - INT, name - varchar(256) cant be null
-- if already exists should not throw error

CREATE TABLE IF NOT EXISTS force_name(id INT, name VARCHAR(256) NOT NULL);