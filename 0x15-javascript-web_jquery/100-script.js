#!/usr/bin/node

/**
 * a script that updates the text color of the header
 * element to red #FF0000
 *
 * you must use the document.querySelector
 * you can't use jquery api
 *
 * your script must be imported from the head tag not
 * at the end of the html
 */

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('header').style.color = '#FF0000';
});
