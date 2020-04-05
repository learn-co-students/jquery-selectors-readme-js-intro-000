// declare your functions here...

$('img')

$('.pics')

$('parent-tag child-tag:first-child')

function paragraphSelector() {
  var arr = $('p')
  return arr
}

function lastImageSelector() {
  var arr = $('img:last')
  return arr
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('div.pics')
}

function firstListItem() {
  return $('ul#pic-list li:first-child')
}
