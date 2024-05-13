-- create a table first_table
-- details: id INT, name VARCHAR(256)
-- database name passed as an argument
-- if table exists, script should not fail
-- not allowed to use SELECT or SHOW
CREATE TABLE IF NOT EXISTS first_table(id INT, name VARCHAR(256));
