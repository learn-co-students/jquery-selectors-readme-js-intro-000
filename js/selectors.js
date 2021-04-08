/* Write a function paragraphSelector that does not accept any parameters.
The function should use an element selector to select the p tags in index.html
and return those elements. (Note that we're using the plural because the selector
will always return an array when used with tags, even if there's only one!)

Write a function lastImageSelector that does not accept any parameters.
The function should use the last jQuery selector to return the last image in index.html.

Write a function ninjaBabySelector that does not accept any parameters.
The function should use an ID selector to return the ninja baby image.

Write a function divSelector that does not accept any parameters.
The function should use a class selector to return the two divs with the class pics.

Write a function firstListItem that does not accept any parameters.
The function should use a first-child selector to return the first
list item in the ul with the ID pic-list.*/

var paragraphSelector = () =>
  {
    return $('p');
  }
var lastImageSelector = () =>
  {
    return $('img:last');
  }
var ninjaBabySelector = () =>
  {
    return $('#baby-ninja');
  }
var divSelector = () =>
  {
    return $('div.pics');
  }
var firstListItem = () =>
  {
    return $('li:first-child');
  }
