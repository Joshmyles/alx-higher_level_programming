-- script that converts hbtn_0c_0 database to UTF8
-- utf8mb4, collate utf8mb4_unicode_ci
-- convert all the following to utf8: database, first_table, field name in first_table

ALTER DATABASE hbtn_0c_0 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hbtn_0c_0;
ALTER TABLE first_table CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;