// declare your functions here...
function paragraphSelector(){
 var array =$('p')
 return array;
}

function lastImageSelector(){
  return $('img:last')
}
function ninjaBabySelector(){
  return $("img[id='baby-ninja']")
}

function divSelector(){
  return $('div').slice(0,2)
}

function firstListItem(){
  return $('ul li:first-child')
}
