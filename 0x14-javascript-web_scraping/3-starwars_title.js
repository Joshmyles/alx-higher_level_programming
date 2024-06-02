#!/usr/bin/node

//  a script that prints the title of a Star Wars Movie
// where the episode number matches a given integer
// u must use the Star Wars API with the endpoint: https://swapi-api.alx-tools.com/api/films/:id
// u must use the module request

const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const episodeNumber = process.argv[2];

request(url + episodeNumber, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
