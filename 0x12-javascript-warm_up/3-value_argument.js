#!/usr/bin/node

const firstArg = process.argv[2];
const secondArg = process.argv[3];

if (secondArg) {
  console.log('Arguments found');
} else if (firstArg) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
