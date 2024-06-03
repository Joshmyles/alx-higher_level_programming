#!/usr/bin/node

/**
 * a function that returns the number of occurrences in a list
 *
 * prototype: exports.nbOccurences = function (list, searchElement)
 */

exports.nbOccurences = function (list, searchElement) {
  return list.filter((element) => element === searchElement).length;
};
