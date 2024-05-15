-- import db dump
-- script that displays the max temp. of each statae ordered by state name

SELECT state, MAX(value) AS max_temp FROM temperatures 