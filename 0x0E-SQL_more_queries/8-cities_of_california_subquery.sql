-- a script that lists all the cities of california found in the db
-- the states table contains only one record where name=California
-- but the id can be different, as per the example
-- results must be sorted in ascending order by cities.id
-- You are not allowed to use the JOIN keyword

SELECT id, name FROM cities WHERE state_id = (SELECT id FROM states WHERE name='California') ORDER BY id ASC;