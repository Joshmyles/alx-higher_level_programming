#!/usr/bin/node

/**
 * a script that fetches and lists the title for all movies by using this
 * url: https://swapi-api.alx-tools.com/api/films/?format=json
 *
 * all movie titles must be list in the html tag UL#list_movies
 *
 * you can't use document.querySelector
 * you must use jquery api
 */

const url = 'https://swapi-api.alx-tools.com/api/films/?format=json';

$.get(url, function (data) {
  $('UL#list_movies').append(
    ...data.results.map((movie) => `<li>${movie.title}</li>`)
  );
});
