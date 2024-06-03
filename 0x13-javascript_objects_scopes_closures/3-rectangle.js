#!/usr/bin/node

/**
 * a class rectangle that defines a rectangle
 *
 * you must use class notation for defining your class
 * the constructor must take 2 arguments w, and h
 * initialize the instance attribute width with the value w, and height , h
 *
 * if w or h is equal to 0 or not a positive integer, create an empty object
 *
 * create an instance method called print() that prints the rectangle using
 * character x
 */

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) [this.width, this.height] = [w, h];
  }

  print () {
    for (let i = 0; i < this.height; i++) console.log('x'.repeat(this.width));
  }
};
