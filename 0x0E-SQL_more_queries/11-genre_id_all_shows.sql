-- import database dump of hbtn_0d_tvshows  
-- script that lists all shows contained in db hbtn_0d_tvshows
-- each record should display tv_shows.title, tv_show_genres.genre_id
-- results are sorted in ascending order by tv_shows.title, tv_show_genres.genre_id
-- if a show doesn't have a genre, display NuLL
-- you can use one select statement

SELECT tv_shows.title, tv_show_genres.genre_id 
FROM tv_shows
LEFT JOIN tv_show_genres 
ON tv_shows.id=tv_show_genres.show_id
ORDER BY tv_shows.title, tv_show_genres.genre_id;