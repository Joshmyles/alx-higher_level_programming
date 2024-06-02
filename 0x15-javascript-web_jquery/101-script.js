#!/usr/bin/node

/**
 * a script that adds, removes and cleans LI elements from a list when
 * the user clicks
 *
 * the new element must be: <li>Item</li>
 * the new element must be added to UL.my_list
 * when the user clicks on DIV#add_item: a new element is added to the list
 * when the user cliks on DIV#remove_item: the last item is removed from the list
 * when the user clicks on DIV#clear_list: all elements of the list are removed
 *
 * you can't use document.querySelector
 * you must use the jquery api
 * your script must work when it is imported from the head
 */

$('document').ready(function () {
  $('DIV#add_item').click(function () {
    $('UL.my_list').append('<li>Item</li>');
  });
  $('DIV#remove_item').click(function () {
    $('UL.my_list li:last').remove();
  });
  $('DIV#clear_list').click(function () {
    $('UL.my_list').empty();
  });
});
