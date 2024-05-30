#!/usr/bin/node

// a script that writes a string to a file
// the argument is the file path
// the second argument is the string to write
// the content of the file must be written in utf-8
// if an error occurs, print the error object

const fs = require('fs');
const file = process.argv[2];
const str = process.argv[3];

fs.writeFile(file, str, 'utf-8', function (err) {
  if (err) console.log(err);
});
