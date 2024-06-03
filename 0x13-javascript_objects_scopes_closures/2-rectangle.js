#!/usr/bin/node

/**
 * write a class Rectangle the defines a rectangle
 * you must use the class notation for defining your class
 * the constructor must take 2 arguments w and h
 *
 * initialize the instance attribute width with the value of w and height
 * with the value h
 *
 * if w or h is equal to 0 or not a positive integer, create an empty object
 */

module.exports = class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      [this.width, this.height] = [w, h];
    }
  }
};
