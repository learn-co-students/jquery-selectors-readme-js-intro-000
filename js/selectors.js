// declare your functions here...
function paragraphSelector() {
  return $('p')
   //use an element selector to select the p tags in index.html and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
}
function lastImageSelector() {
  return $('img:last')
   //use the last jQuery selector to return the last image in index.html.
}
function ninjaBabySelector() {
  return $('#baby-ninja')
   //use an ID selector to return the ninja baby image.
}
function divSelector() {
  return $('.pics')
   //use a class selector to return the two divs with the class pics.
}
function firstListItem() {
  return $('ul#pic-list li:first-child')
   //use a first-child selector to return the first list item in the ul with the ID pic-list.
}
