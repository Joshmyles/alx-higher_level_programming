-- script that uses hbtn_0d_tvshows  lists all genres of the show Dexter
-- the tv_shows contains only one record where title = Dexter but id can be different
-- each record should display tv_genres.name
-- results must be sorted in asc order by genre name
-- you can use only one select statement
SELECT tv_genres.name 
FROM tv_genres
INNER JOIN tv_show_genres
ON  tv_genres.id=tv_show_genres.genre_id
INNER JOIN tv_shows
ON tv_show_genres.show_id=tv_shows.id
WHERE tv_shows.title = 'Dexter'
ORDER BY tv_genres.name;