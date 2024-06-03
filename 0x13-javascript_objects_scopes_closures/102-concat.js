#!/usr/bin/node

/**
 * a script that concats 2 files
 *
 * the first argument is the file path of the first source file
 * the second argument is the file path of the second source file
 * the third argument is the file path of the destination
 *
 */

const fs = require('fs');

const firstFile = process.argv[2];
const secondFile = process.argv[3];
const finalFile = process.argv[4];

// check if all arguments are passed
if (!firstFile || !secondFile || !finalFile) {
  console.error('Usage: ./102-concat.js <file1> <file2> <file3>');
  process.exit(1);
}

// reading contents of the first file
let file1Data;
fs.readFile(firstFile, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  }
  file1Data = data;
  process.exit(1);
});

// reading contents of the second file
let file2Data;
fs.readFile(secondFile, 'utf8', function (err, data) {
  if (err) {
    console.error(err);
  }
  file2Data = data;
  process.exit(1);
});

// concatenating the content
const file3Data = file1Data + file2Data;

// writing the content to the final file
fs.writeFile(finalFile, file3Data, 'utf8', function (err) {
  if (err) {
    console.error(err);
  }
  console.log(
    'Successfully concatenated contents of file1 and file2 into file3'
  );
  process.exit(1);
});
