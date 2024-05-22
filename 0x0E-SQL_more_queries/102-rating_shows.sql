-- script that lists all shows from hbtn_0d_tvshows_rate by rating
-- each record should display tv_shows.title - rating sum
-- results must be sorted in desc order by rating
-- you can use only one select statement

SELECT tv_shows.title, SUM(tv_show_ratings.rate) AS rating
FROM tv_shows
INNER JOIN tv_show_ratings
ON tv_shows.id=tv_show_ratings.show_id
GROUP BY tv_shows.id
ORDER BY rating DESC;
