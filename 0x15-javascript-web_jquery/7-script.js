#!/usr/bin/node

/**
 * a script that fetches the character name from this
 * url: https://swapi-api.alx-tools.com/api/people/5/?format=json
 *
 * the name must be displayed in the html tag DIV#character
 *
 * you can't use document.querySelector
 * you must use the jquery api
 */

const url = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

$.get(url, function (data) {
  $('DIV#character').text(data.name);
});
