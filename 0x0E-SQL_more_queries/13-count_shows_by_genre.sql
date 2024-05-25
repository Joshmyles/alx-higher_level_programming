-- script that lists all genres from hbtn_0d_tvshows and displays the number of shows
-- linked to each
-- each record should display TV Show genre, Number of shows linked to this genre
-- first column must be called genre
-- second column must be called number_of_shows
-- don't display a genre that doesn't have any shows linked
-- results must be sorted in descending order by the number of shows linked
-- you can use only one select statement

SELECT g.name AS genre, COUNT(*) AS number_of_shows
FROM tv_genres AS g
INNER JOIN tv_show_genres AS t
ON g.id=t.genre_id
GROUP BY g.name
ORDER BY number_of_shows DESC;