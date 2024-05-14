-- that lists the number of records with the same score in second_table
-- result should display score
-- result should display the number of records for this score with the label number
-- the list should be sorted by the number of records (desc)

SELECT score, COUNT(*) AS number FROM second_table GROUP BY score ORDER BY number DESC;