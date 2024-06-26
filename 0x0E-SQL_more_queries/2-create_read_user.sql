-- a script that creates the database hbtn_0d_2 and the user user_0d_2
-- user should have only select privileges in the database
-- the user password should be set to user_0d_2_pwd
-- if database already exists, script should not fail
-- if user already exists, script should not fail

CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXISTS 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON `hbtn_0d_2`.* TO 'user_0d_2'@'localhost';
FLUSH PRIVILEGES;