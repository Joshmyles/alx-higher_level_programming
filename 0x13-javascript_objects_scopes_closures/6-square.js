#!/usr/bin/node

/**
 * a class Square that defines a square and inherits from Square of 5-square.js
 *
 * you must use the class notation for defining your class and extends
 *
 * create an instance method called charPrint(c) that prints the rectangle
 * using the character c, if c is undefined, use x
 */

const parentSquare = require('./5-square');

module.exports = class Square extends parentSquare {
  charPrint (c) {
    if (c === undefined) {
      this.print();
    } else {
      for (let i = 0; i < this.size; i++) console.log('C'.repeat(this.size));
    }
  }
};
