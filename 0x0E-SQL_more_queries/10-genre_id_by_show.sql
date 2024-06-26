-- hbtn_0d_tvshows 
-- a script that lists all shows contained in hbtn_0d_tvshows that have atleast one genre 
-- each record show display tv_shows.title - tv_show_genres.genre_id 
-- results must be sorted in ascending order by tv.shows.title and tv_show_genre_id
-- you can use only one SELECT statement

SELECT tv_shows.title, tv_show_genres.genre_id 
FROM tv_shows 
INNER JOIN tv_show_genres 
ON tv_shows.id=tv_show_genres.show_id
ORDER BY tv_shows.title, tv_show_genres.genre_id;
