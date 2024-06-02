#!/usr/bin/node

/**
 * a script that adds the class red to the header element
 * when the user clicks on the tag div#red_header
 * you can't use document.querySelector
 * you must use the jquery api
 */

$('DIV#red_header').click(function () {
  $('header').addClass('red');
});
