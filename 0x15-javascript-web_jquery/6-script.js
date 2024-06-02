#!/usr/bin/node

/**
 * a script that updates the test of the header
 * to 'New Header!!!' when the user clicks on
 * DIV#update_header
 *
 * you can't use document.querySelector
 * you must use the jquery api
 */

$('DIV#update_header').click(function () {
  $('header').text('New Header!!!');
});
