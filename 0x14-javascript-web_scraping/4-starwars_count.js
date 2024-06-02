#!/usr/bin/node

// a script that prints the number of movies where the character "Wedge Antilles" is present
// first argument of url, Star wars API: https://swapi-api.alx-tools.com/api/films/
// Wedge Antilles is character ID 18, your script must use this ID for filtering the result
//  You must use module request

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const character = 'Wedge Antilles';
const id = 18;

request(url + id, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    let movieCount = 0;
    const responseBody = data.body;
    for (const charc in responseBody) {
      if (charc === character) {
        movieCount++;
      }
    }
    console.log(movieCount);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
