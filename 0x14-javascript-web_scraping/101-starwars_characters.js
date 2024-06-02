#!/usr/bin/node

// a script that prints all characters of a star wars movie
// the first argument is the movie id
// display one character name line by line in the same order of the list
// "characters"in the /films/ response
// Must use Star Wars API
// must use module request

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const movieId = process.argv[2];

request.get(url + movieId, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const movies = JSON.parse(body);
    for (const movie in movies) {
      const movieCharacters = movie.characters;
      request.get(movieCharacters, function (err, response, body) {
        if (err) {
          console.error(err);
        } else {
          const characterDetails = JSON.parse(body);
          console.log(characterDetails.name);
        }
      });
    }
  } else {
    console.log('Error : ' + response.statusCode);
  }
});
