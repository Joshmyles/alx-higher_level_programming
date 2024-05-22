-- a script that lists all shows without the genre Comedy in the db hbtn_0d_tvshows
-- the tv_genres table contains only one record where name=Comedy but the id can be different
-- each record should display tv_shows.title
-- results must be sorted in ascending order by the show title
-- you can use a max of 2 select statements
-- database name will be passed as an argument 

SELECT tv_shows.title
FROM tv_shows
WHERE tv_shows.id NOT IN 
(
SELECT tv_shows.id 
FROM tv_shows
INNER JOIN tv_shows_genre
ON tv_shows.id=tv_shows_genres.show_id
INNER JOIN tv_genres
ON tv_shows_genres.genre_id=tv_genres.id 
WHERE tv_genres.name="Comedy"
)
ORDER BY tv_shows.title;