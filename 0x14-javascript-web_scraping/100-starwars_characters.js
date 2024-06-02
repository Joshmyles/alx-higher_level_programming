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
    console.error(err);
  } else if (response.statusCode === 200) {
    const characters = JSON.parse(body).characters;
    for (const characterUrl in characters) {
      request.get(characterUrl, function (err, response, body) {
        if (err) {
          console.error(err);
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
