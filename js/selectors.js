// declare your functions here...
function paragraphSelector(){
  let p = document.getElementsByTagName('p')
  return p
}

function lastImageSelector(){
  let lastImg = $('img:last')
  return lastImg
}

function ninjaBabySelector(){
 let babyNinja = $('#baby-ninja')
 return babyNinja
}

function divSelector(){
  let pics = $('.pics')
  return pics
}

function firstListItem(){
 let firstChild = $('ul#pic-list li:first-child')
 return firstChild
}
