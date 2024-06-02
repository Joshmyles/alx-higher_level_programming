#!/usr/bin/node

/**
 * a script that updates the text color of the header to read
 * when the user clicks the tag div#red_header
 * you can't use document.querySelector
 * you must use the jquery api
 */

$('div#red_header').click(function () {
  $('header').css('color', '#FF0000');
});
