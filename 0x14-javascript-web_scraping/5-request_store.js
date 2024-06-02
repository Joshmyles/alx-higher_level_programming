#!/usr/bin/node

// a script that gets the contents of a webpage and stores it in a file
// the first argument is the URL to request
// the second argument is the file path to store the body response
// the file must be UTF-8 encoded
// you must use the module request

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    fs.writeFileSync(filePath, body, 'utf8');
  } else {
    console.log('Error Message: ' + response.statusCode);
  }
});
