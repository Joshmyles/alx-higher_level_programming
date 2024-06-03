#!/usr/bin/node

/**
 * a class Square that defines a square and inherits from Rectangle of 4-rectangle.js
 *
 * must use the class notation for defining your class and extends
 *
 * the constructor must take 1 argument: size
 *
 * the constructor of Rectangle must be called(by using super())
 */

const Rectangle = require('./4-rectangle');

module.exports = class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
};
