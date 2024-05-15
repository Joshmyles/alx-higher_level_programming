-- a script that creates the table id_not_null
-- id_not_null id INT with default value 1
-- name VARCHAR(256)
-- if the table already exists, should not fail

CREATE TABLE IF NOT EXISTS id_not_null (id INT DEFAULT 1, name VARCHAR(256));