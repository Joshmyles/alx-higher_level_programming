#!/usr/bin/node

/**
 * a script that fetches and prints how to say hello depending on language
 *
 * you should use this api service: https://www.fourtonfish.com/hellosalut/hello/
 * the language code will be the value entered in the tag: INPUT#language_code
 * the translation must be fetched when the user clicks on: INPUT#btn_translate
 *
 * OR presses enter when the focus is on: INPUT#language_code
 *
 * the transalation of hello must be displayed in the html tag: DIV#hello
 *
 * you can't use document.querySelector
 * you must use the jquery api
 *
 * your script must work when imported from the head tag
 */

const url = 'https://www.fourtonfish.com/hellosalut/hello/';

$('document').ready(function () {
  function fetchTranslation() {
    const languageCode = $('#language_code').val();
    if (languageCode) {
      $.get(url + `?lang=${languageCode}`, function (data) {
        $('#hello').text(data.hello);
      });
    }
  }

  $('#btn_translate').click(fetchTranslation);

  $('#btn_translate').keypress(function (event) {
    if (event.which === 13) {
      //13 is the "Enter" key code.
      fetchTranslation();
    }
  });
});
