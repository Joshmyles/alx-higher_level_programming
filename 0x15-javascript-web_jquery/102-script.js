#!/usr/bin/node

/**
 * a script that fetches and prints how to say hello depending on the language
 *
 * you should use this api: https://www.fourtonfish.com/hellosalut/hello/
 * the language code will be the value entered in the tag: INPUT#language_code (ex: es, fr, en etc.)
 * the transalation must be fetched when the user clicks on: INPUT#btn_translate
 * the translation of hello must be displayed in the html tag: DIV#hello
 *
 * you can't use document.querySelector
 * you  must use the jquery api
 *
 * your script must work when imported from the head
 */

const url = 'https://www.fourtonfish.com/hellosalut/hello/';

$('document').ready(function () {
  $('INPUT#btn_translate').click(function () {
    const languageCode = $('INPUT#language_code').val();
    if (languageCode) {
      $.get(url + `?lang=${languageCode}`, function (data) {
        $('DIV#hello').text(data.hello);
      });
    }
  });
});
