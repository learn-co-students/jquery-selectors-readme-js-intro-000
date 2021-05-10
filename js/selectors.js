// declare your functions here...
function paragraphSelector() {
  
  return $('p')
  
}



function lastImageSelector() {   
  //should return the last image
return $('img:last')
  
}

function ninjaBabySelector() {
  //should return the image of the ninja baby
return $('#baby-ninja')
  
}
function divSelector() {
  //should return two divs
return $('.pics')
  
}
function firstListItem() {
//should return the first list item in the unordered list
$('pic-list li:first-child')
//console.log($('#pic-list li img:first-child')[0].src)
return $('ul li:first-child')


}

