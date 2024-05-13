-- creates a table second_table
-- adds multiple rows - id INT, name VARCHAR(256), score INT
-- database name passed as an argument
-- if table already exists, script should not fail
-- not allowed to use the SELECT and SHOW
-- script should create records : id = 1, name = "John", score = 10 | id = 2, name = "Alex", score = 3 | id = 3, name = "Bob", score = 14 | id = 4, name = " George", score = 8
CREATE TABLE IF NOT EXISTS second_table(id INT, name VARCHAR(256), score INT);
INSERT INTO second_table(id, name, score) VALUES(1, "John", 10), (2, "Alex", 3), (3, "Bob", 14), (4, "George", 8);
