#!/usr/bin/node

/**
 * write a function that prints the number of arguments already printed
 * and the new argument value e.g.
 *
 * Prototype: exports.logMe = function (item)
 * Output format: <number arguments already printed>: <current argument value>
 */

let count = 0;

exports.logMe = function (item) {
  console.log(`${count++}: ${item}`);
};
