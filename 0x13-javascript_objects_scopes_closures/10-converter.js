#!/usr/bin/node

/**
 * a function that converts a number from base 10 to another base passed
 * as argument
 *
 * Prototype: exports.converter = function (base)
 * You are not allowed to import any file
 *
 * you are not allowed to declare any new variable
 */

exports.converter = function (base) {
  return (num) => num.toString(base);
};
