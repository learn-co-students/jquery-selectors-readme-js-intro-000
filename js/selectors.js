// declare your functions here...

function paragraphSelector() {
  return $('p');
}

//last jQuery selector to return the last image in index.html
function lastImageSelector() {
  return $('div img:last');
}

function ninjaBabySelector() {  //ID selector to return the ninja baby image
  return $('#baby-ninja');
}

function divSelector() {  //use a class selector to return the two divs with the class pics
  return $('.pics');
}

function firstListItem() {  //use a first-child selector to return the first list item in the ul with the ID pic-list
  return $('ul:first-child li:first-child');
}