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
fs.readFile(firstFile, 'utf8', function (err, data1) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // reading contents of the second file
  fs.readFile(secondFile, 'utf8', function (err, data2) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    // concatenating the content
    const data3 = data1 + '\n' + data2;

    // writing the content to the final file
    fs.writeFile(finalFile, data3, 'utf8', function (err) {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(
        'Successfully concatenated contents of file1 and file2 into file3'
      );
    });
  });
});
