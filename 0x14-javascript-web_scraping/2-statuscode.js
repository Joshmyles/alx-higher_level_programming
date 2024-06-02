#!/usr/bin/node

// a script that display the status code of a get request
// the status code must be printed like this: code: <status code>
// you must use the module request

const request = require('request');
const url = process.argv[2];

request(url, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
