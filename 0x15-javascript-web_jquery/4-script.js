#!/usr/bin/node

/**
 * a script that toggles the class of the header element
 * when the user clciks on the tag DIV#toggle_header
 * the header element must always have one class red/green
 * never both in the same time and never empty
 *
 * if the current class is red, when the user click on the
 * toggle, the class must be updated to green and viceversa
 *
 * you can't use the document.querySelector
 * you must use the jquery api
 */

$('DIV#toggle_header').click(function () {
  $('header').toggleClass('red green');
});
