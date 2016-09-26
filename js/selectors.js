// $(document).ready(function() {
  // $('.pics').doSomething
  // $('#baby-ninja').doSomething
  // $('ul li').doSomething
  // $('div img:first-child').doSomething
  // $("img[alt='the beatles making faces']").doSomething
  // $('div:last').doSomething
// })// declare your functions here...
function paragraphSelector() {
  return $('p')
}

function lastImageSelector() {
  return $('img:last')
}

function ninjaBabySelector() {
  return $('#baby-ninja')
}

function divSelector() {
  return $('.pics')
}

function firstListItem() {
  return $('ul li:first-child')
  // return $('#pic-list ul li:first-child')
}
