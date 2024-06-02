#!/usr/bin/node

// a script that prints all characters of a Star Wars movie
// the first argument is the Movie ID - example: 3 = "Return of the Jedi"
// Display one character name by line
// you must use the Star Wars API
//  You must use the module request

const req = require('request');
const movieId = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

req.get(url + movieId, function (error, res, body) {
  if (error) {
    console.log(error);
  }
  const data = JSON.parse(body);
  const characters = data.characters;
  for (const i of characters) {
    req.get(i, function (error, res, body1) {
      if (error) {
        console.log(error);
      }
      const data1 = JSON.parse(body1);
      console.log(data1.name);
    });
  }
});
