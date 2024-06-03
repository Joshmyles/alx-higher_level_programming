#!/usr/bin/node

/**
 * a script that imports a dictionary of occurences by user id and computes
 * a dictionary of user ids by occurence
 *
 * script must import dict from the file 101-data.js
 *
 * in the new dictionary, a key is a number of occurences
 * a value is list of user ids
 *
 * print the new dictionary at the end
 */

const data = require('./101-data');
const dict = data.dict;
const newDict = {};

for (const userId in dict) {
  const occurrences = dict[userId];
  if (!newDict[occurrences]) {
    newDict[occurrences] = [];
  }
  newDict[occurrences].push(userId);
}

console.log(newDict);
