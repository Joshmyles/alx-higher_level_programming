#!/usr/bin/node

/**
 * function that returns the reversed version of a list
 *
 * Prototype: exports.esrever = function (list)
 *
 * you are not allowed to use the built in method reverse
 */

exports.esrever = function (list) {
  return list.reduceRight(function (array, current) {
    array.push(current);
    return array;
  }, []);
};
