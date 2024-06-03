#!/usr/bin/node

/**
 * a script that imports an array and computes a new array
 *
 * the script must import list from the file 100-data.js
 * you must use a map
 *
 * a new list must be created with each value equal to the value of the
 * initial list, multiplied by the index in the list
 *
 * print both the initial list and the new list
 */

const data = require('./100-data.js');
const dataList = data.list;

const newList = dataList.map((value, index) => value * index);
console.log(dataList);
console.log(newList);
