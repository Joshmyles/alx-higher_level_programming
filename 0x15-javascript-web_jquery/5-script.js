#!/usr/bin/node

/**
 * a script that adds a <li> element to a list when the user
 * clicks on the tag DIV#add_item
 * the new element must be : <li>Item</li>
 * the new lement must be added to UL.my_list
 *
 * you can't use document.querySelector
 * you must use jquery API
 */

$('DIV#add_item').click(function () {
  $('UL.my_list').append('<li>Item</li>');
});
