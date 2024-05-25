-- a script that creates a table unique_id 
-- id INT, default value 1 must be unique
-- name varchar (256)
-- if exists should not throw error

CREATE TABLE IF NOT EXISTS unique_id (id INT DEFAULT 1 UNIQUE, name VARCHAR(256));