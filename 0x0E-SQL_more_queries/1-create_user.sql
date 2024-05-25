-- a script that creates the mysql user user_0d_1
-- should have all privileges on the server
-- user should password should be set to user_0d_1_pwd
-- if user already exists, script should not fail

CREATE USER IF NOT EXISTS 'user_0d_1'@'localhost' 
IDENTIFIED BY 'user_0d_1_pwd';
GRANT ALL PRIVILEGES ON *.* TO 'user_0d_1'@'localhost';