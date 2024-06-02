#!/usr/bin/node

/**
 * a script that fetches from
 * url: https://hellosalut.stefanbohacek.dev/?lang=fr
 * and displays the value of hello from that fetch in the
 * html tag DIV#hello
 *
 * translation of "hello" must be displayed in the html tag
 *
 * you can't use document.querySelector
 * you must use jquery api
 * script must work when imported from the <head> tag
 */

const url = 'https://hellosalut.stefanbohacek.dev/?lang=fr';

$.get(url, function (data) {
  $('DIV#hello').text('data.hello');
});
