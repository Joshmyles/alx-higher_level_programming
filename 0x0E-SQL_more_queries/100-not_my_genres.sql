-- a script that uses the hbtn_0d_tvshows database to list all genres not linked to the show Dexter
-- the tv_shows table contains only one record where title = Dexter (but id can be different)
-- each record should display:  tv_genres.name
-- results must be sorted in asc order by the genre_name
-- you can use max of two select statements
-- database name will be passed as an argument of the mysql command
-- cat 100-not_my_genres.sql | mysql -hlocalhost -uroot -p hbtn_0d_tvshows

SELECT tv_genres.name
FROM tv_genres
WHERE tv_genres.id NOT IN
(SELECT tv_genres.id
FROM tv_genres
INNER JOIN tv_show_genres
ON tv_genres.id=tv_show_genres.genre_id
INNER JOIN tv_shows
ON tv_show_genres.show_id=tv_shows.id
WHERE tv_shows.title="Dexter")
ORDER BY tv_genres.name;