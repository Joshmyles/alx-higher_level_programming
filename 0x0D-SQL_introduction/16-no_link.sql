-- that lists all records of the second_table
-- dont list rows without a name value
-- results should display the score and the name in this order
-- records should be listed by descending order
SELECT score, name FROM second_table WHERE name IS NOT NULL AND name != '' ORDER BY score DESC; 