// note the type of selector: element, class, ID, etc...

function paragraphSelector(){
  return $('p');
}

function lastImageSelector(){
  return $('img:last');
  //OR
  //return $('img[src ="https://s3.amazonaws.com/after-school-assets/confused.gif"]')
}

function ninjaBabySelector(){
  return $('#baby-ninja');
}

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('#pic-list li:first');
}
