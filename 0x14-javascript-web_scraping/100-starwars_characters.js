#!/usr/bin/node

// a script that prints all characters of a Star Wars movie
// the first argument is the Movie ID - example: 3 = "Return of the Jedi"
// Display one character name by line
// you must use the Star Wars API
//  You must use the module request

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';
const movieId = process.argv[2];

request.get(url + movieId, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const movies = JSON.parse(body);
    const characters = movies.characters;
    for (const index in characters) {
      request.get(index, function (err, response, body) {
        if (err) {
          console.log(err);
        } else if (response.statusCode === 200) {
          const characterDetails = JSON.parse(body);
          console.log(characterDetails.name);
        }
      });
    }
  } else {
    console.log('Error : ' + response.statusCode);
  }
});
