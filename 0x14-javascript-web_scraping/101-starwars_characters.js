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
    console.error(err);
  } else {
    const characters = JSON.parse(body).characters;
    printMovieCharacters(characters, 0);
  }
});

const printMovieCharacters = (characters, index) => {
  request(characters[index], function (err, response, body) {
    if (err) {
      console.error(err);
    } else {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printMovieCharacters(characters, index + 1);
      }
    }
  });
};
