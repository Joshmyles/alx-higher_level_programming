-- a script that lists all cities contained in the database
-- each record should display cities.id, cities.name, states.name
-- results are sorted in ascending order by cities.id
-- you can use only one select statement

SELECT cities.id, cities.name, states.name 
FROM cities
INNER JOIN states ON cities.state_id=states.id 
ORDER BY cities.id;