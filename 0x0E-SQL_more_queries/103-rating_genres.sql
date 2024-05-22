-- a script that lists all genres in the database hbtn_0d_tvshows_rate by their rating
-- each record should display tv_genres.name - rating(sum)
-- results must be sorted in desc order by their rating
-- you can use only one select statement
-- database name will be passed as an argument of the mysql command

SELECT tv_genres.name, SUM(tv_show_ratings.rate) AS rating
FROM tv_genres
INNER JOIN tv_show_genres
ON tv_genres.id=tv_show_genres.genre_id
INNER JOIN tv_show_ratings
ON tv_show_genres.show_id=tv_show_ratings.show_id
GROUP BY tv_genres.id
ORDER BY rating DESC;