#!/usr/bin/node

/**
 * a class Rectangle that defines a rectangle
 *
 * you must use the class notation for defining your class
 * the constructor must take 2 arguments w and h
 *
 * initialize the instance attribute width with the value of w, and height h
 *
 * if w or h is equal to 0 or not a positive integer, create an empty object
 *
 * create an instance method called print() that prints the rectangle using character x
 *
 * create an instance method called rotate() that exhanges the width and
 * height of the rectangle
 *
 * create an instance method called double() the multiplies the width and the
 * height of the rectangle by 2
 *
 */

module.exports = class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      [this.width, this.height] = [w, h];
    }
  }

  print() {
    for (let i = 0; i < this.height; i++) {
      console.log('x'.repeat(this.width));
    }
  }

  rotate() {
    [this.width, this.height] = [this.height, this.width];
  }

  double() {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
